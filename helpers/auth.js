import { hash, compare } from 'bcryptjs';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const createUser = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/signup', {
      email,
      password,
    });

    const user = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
};
