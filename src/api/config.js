import axios from 'axios';
import API_BASE_URL from './config';

export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/`,
      {
        username: name,
        email: email,
        password: password,
      }
    );

    return response.data; // ou qualquer coisa que você deseje retornar
  } catch (error) {
    throw error;
  }
};

export default registerUser;
