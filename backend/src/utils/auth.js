import jwt from 'jsonwebtoken';

const { sign } = jwt;

/**
 * Create JWT token for authentication
 * 
 * @param {String} id - User ID to be encoded in token
 * @returns {String} JWT token
 */
const signToken = id => {
  return sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

/**
 * Create and send JWT token in response
 * 
 * @param {Object} user - User object
 * @param {Number} statusCode - HTTP status code
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export function createSendToken(user, statusCode, req, res) {
  const token = signToken(user.id);
  
  if (process.env.JWT_COOKIE_EXPIRES_IN) {
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    };
    
    res.cookie('jwt', token, cookieOptions);
  }
  
  user.password = undefined; // Remove password from output
  
  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user }
  });
}

/**
 * Creates an authentication token and returns it
 * without sending a response (for special cases)
 * 
 * @param {Object} user - User object
 * @returns {String} JWT token
 */
export function createToken(user) {
    return signToken(user.id);
  }