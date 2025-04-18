const nodemailer = require('nodemailer');

/**
 * Send email using nodemailer
 * 
 * @param {Object} options - Email options (to, subject, message)
 * @returns {Promise} Resolves when email is sent
 */
/**
 * Send email using nodemailer
 * 
 * @param {Object} options - Email options (to, subject, message)
 * @returns {Promise} Resolves when email is sent
 */
export const sendEmail = async options => {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  
    // 2) Define the email options
    const mailOptions = {
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html
    };
  
    // 3) Send the email
    await transporter.sendMail(mailOptions);
  };
  
  /**
   * Send HTML formatted email
   * 
   * @param {Object} options - Email options including HTML content
   * @returns {Promise} Resolves when email is sent
   */
  export const sendHtmlEmail = async options => {
    if (!options.html) {
      throw new Error('HTML content is required for HTML emails');
    }
    
    return await sendEmail(options);
  };

/**
 * Send HTML formatted email
 * 
 * @param {Object} options - Email options including HTML content
 * @returns {Promise} Resolves when email is sent
 */
exports.sendHtmlEmail = async options => {
  if (!options.html) {
    throw new Error('HTML content is required for HTML emails');
  }
  
  return await exports.sendEmail(options);
};