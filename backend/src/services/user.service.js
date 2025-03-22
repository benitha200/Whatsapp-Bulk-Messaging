// services/user.service.js
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
// import { sendEmail } from '../utils/email.js';
import { prisma } from '../../config/database.js';
// import { AppError } from '../utils/appError.js';
import AppError from '../utils/appError.js';

class UserService {
  /**
   * Get all users with pagination
   */
  async getAllUsers(query) {
    const page = query.page * 1 || 1;
    const limit = query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      skip,
      take: limit,
      where: { active: true },
      include: { subscription: true }
    });

    const total = await prisma.user.count({
      where: { active: true }
    });

    return {
      users,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit
      }
    };
  }

  /**
   * Get user by ID
   */
  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { subscription: true }
    });

    if (!user) {
      throw new AppError('No user found with that ID', 404);
    }

    return user;
  }

  /**
   * Update user
   */
  async updateUser(id, updateData) {
    if (updateData.password || updateData.passwordConfirm) {
      throw new AppError('This route is not for password updates. Please use /updatePassword', 400);
    }

    const filteredData = this.filterObj(updateData, 'name', 'email');

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: filteredData,
      include: { subscription: true }
    });

    if (!updatedUser) {
      throw new AppError('No user found with that ID', 404);
    }

    return updatedUser;
  }

  /**
   * Delete user
   */
  async deleteUser(id) {
    const user = await prisma.user.delete({
      where: { id: Number(id) }
    });

    if (!user) {
      throw new AppError('No user found with that ID', 404);
    }

    return { status: 'success' };
  }

  /**
   * Deactivate user (soft delete)
   */
  async deactivateUser(id) {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { active: false }
    });

    if (!user) {
      throw new AppError('No user found with that ID', 404);
    }

    return { status: 'success' };
  }

  /**
   * Update user password
   */
  async updatePassword(user, currentPassword, newPassword, passwordConfirm) {
    if (!(await bcrypt.compare(currentPassword, user.password))) {
      throw new AppError('Your current password is incorrect', 401);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordChangedAt: new Date()
      }
    });

    return updatedUser;
  }

  /**
   * Send password reset email
   */
  async forgotPassword(email) {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new AppError('There is no user with that email address', 404);
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken,
        passwordResetExpires
      }
    });

    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 minutes)',
        message
      });

      return { status: 'success', message: 'Token sent to email!' };
    } catch (err) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          passwordResetToken: null,
          passwordResetExpires: null
        }
      });

      throw new AppError('There was an error sending the email. Try again later!', 500);
    }
  }

  /**
   * Reset password with token
   */
  async resetPassword(token, password, passwordConfirm) {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: { gt: new Date() }
      }
    });

    if (!user) {
      throw new AppError('Token is invalid or has expired', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
        passwordChangedAt: new Date()
      }
    });

    return user;
  }

  /**
   * Send verification email
   */
  async sendVerificationEmail(userId) {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) }
    });
  
    if (!user) {
      throw new AppError('No user found with that ID', 404);
    }
  
    if (user.isVerified) {
      throw new AppError('User is already verified', 400);
    }
  
    // const token = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign(
        { id: user.id }, // Make sure to include the user id here
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
    const verificationToken = crypto.createHash('sha256').update(token).digest('hex');
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  
    await prisma.user.update({
      where: { id: user.id },
      data: {
        verificationToken,
        verificationExpires
      }
    });
  
    const verifyURL = `${process.env.FRONTEND_URL}/verify/${token}`;
    const message = `Please verify your email by clicking on the following link: ${verifyURL}\nIf you didn't create an account, please ignore this email!`;
  
    // For testing purposes, just log the email instead of sending it
    console.log('Would send email to:', user.email);
    console.log('Subject: Email Verification (valid for 24 hours)');
    console.log('Message:', message);
    
    return { status: 'success', message: 'Verification email logged (not sent in test mode)' };
    
    // When you're ready to actually send emails, uncomment this:
    /*
    try {
      await sendEmail({
        email: user.email,
        subject: 'Email Verification (valid for 24 hours)',
        message
      });
  
      return { status: 'success', message: 'Verification email sent!' };
    } catch (err) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          verificationToken: null,
          verificationExpires: null
        }
      });
  
      throw new AppError('There was an error sending the verification email. Try again later!', 500);
    }
    */
  }

  /**
   * Verify user email with token
   */
  async verifyEmail(token) {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await prisma.user.findFirst({
      where: {
        verificationToken: hashedToken,
        verificationExpires: { gt: new Date() }
      }
    });

    if (!user) {
      throw new AppError('Token is invalid or has expired', 400);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        verified: true,
        verificationToken: null,
        verificationExpires: null
      }
    });

    return user;
  }

  /**
 * Send password reset email
 */
async sendPasswordResetEmail(email, resetURL) {
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  
    try {
      await sendEmail({
        email: email,
        subject: 'Your password reset token (valid for 10 minutes)',
        message
      });
    } catch (err) {
      throw new AppError('There was an error sending the email. Try again later!', 500);
    }
  }

  /**
   * Helper to filter allowed fields
   */
  filterObj(obj, ...allowedFields) {
    const newObj = {};
    Object.keys(obj).forEach(el => {
      if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
  }
}

export default UserService;