import { hash, compare } from 'bcryptjs';
import axios from 'axios';

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = compare(password, hashedPassword);
  return isValid;
};

export const createUser = async (name, email, password) => {
  const response = await axios.post('/api/auth/signup', {
    name,
    email,
    password,
  });

  const user = await signIn('credentials', {
    email,
    password,
  });

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return response.data;
};
