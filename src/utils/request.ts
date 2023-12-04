import axios from 'axios';
import { requestError } from '@/errors';

async function get(url: string) {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    if (error.response) {
      const { status, statusText } = error.response;
      throw requestError(status, statusText);
    } else {
      throw error;
    }
  }
}

export const request = {
  get
};
