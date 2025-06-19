
import { sendEmail } from '../utils/mailer.js';
import { generateToken } from './auth.services.js';

const LINK = process.env.LINK;

export async function sendEmailWithToken(user, path, subject, buildHtmlFn, expiresIn = '15m') {
  const token = generateToken({ id: user.id, email: user.email }, expiresIn);
  const link = `${LINK}${path}?token=${token}`;
  const html = buildHtmlFn(link, user);

  await sendEmail(user.email, subject, html);
}

