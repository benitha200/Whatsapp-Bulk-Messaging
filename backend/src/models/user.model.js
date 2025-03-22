// models/user.model.js
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
imp

class User {
    /**
     * Find a user by ID
     */
    static async findById(id) {
        return prisma.user.findUnique({
            where: { id: Number(id) },
            include: { subscription: true }
        });
    }

    /**
   * Generate email verification token
   */
    static createVerificationToken(user) {
        const token = crypto.randomBytes(32).toString('hex');

        const verificationToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');

        const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

        return {
            token,
            verificationToken,
            verificationExpires
        };
    }

    /**
     * Find a user by email
     */
    static async findOne(criteria) {
        return prisma.user.findFirst({
            where: criteria,
            include: { subscription: true }
        });
    }

    /**
     * Find all users with pagination
     */
    static async find(options = {}) {
        const { skip = 0, limit = 10 } = options;

        return prisma.user.findMany({
            skip,
            take: limit,
            where: { active: true },
            include: { subscription: true }
        });
    }

    /**
     * Count documents
     */
    static async countDocuments(criteria = {}) {
        return prisma.user.count({
            where: { ...criteria, active: true }
        });
    }

    /**
     * Update a user
     */
    static async findByIdAndUpdate(id, updateData, options = {}) {
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: updateData,
            include: { subscription: true }
        });

        return user;
    }

    /**
     * Delete a user
     */
    static async findByIdAndDelete(id) {
        return prisma.user.delete({
            where: { id: Number(id) }
        });
    }

    /**
     * Create a new user
     */
    static async create(userData) {
        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 12);
        }

        // Remove passwordConfirm as it's not in the schema
        const { passwordConfirm, ...data } = userData;

        return prisma.user.create({
            data,
            include: { subscription: true }
        });
    }

    /**
     * Check if password is correct
     */
    static async correctPassword(candidatePassword, userPassword) {
        return await bcrypt.compare(candidatePassword, userPassword);
    }

    /**
     * Check if user changed password after token was issued
     */
    static changedPasswordAfter(user, JWTTimestamp) {
        if (user.passwordChangedAt) {
            const changedTimestamp = parseInt(user.passwordChangedAt.getTime() / 1000, 10);
            return JWTTimestamp < changedTimestamp;
        }
        return false;
    }

    /**
     * Generate password reset token
     */
    static createPasswordResetToken(user) {
        const resetToken = crypto.randomBytes(32).toString('hex');

        const passwordResetToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        const passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        return {
            resetToken,
            passwordResetToken,
            passwordResetExpires
        };
    }

    /**
     * Generate email verification token
     */
    static createVerificationToken(user) {
        const token = crypto.randomBytes(32).toString('hex');

        const verificationToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');

        const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

        return {
            token,
            verificationToken,
            verificationExpires
        };
    }
}

module.exports = User;