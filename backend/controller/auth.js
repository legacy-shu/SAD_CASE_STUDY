import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../model/userRepository.js';

const jwtSecretKey = '7!eTNrZa6WE7TstUtMeICO4RQt$bJ$22';
const jwtExpiresInDays = '1d';
const bcryptSaltRounds = 12;

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await userRepository.findByEmail(email);
  console.log(`user:${user.email}`);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, email, role: user.role, name: user.name });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ email: user.email, role: user.role, name: user.name });
}

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}
