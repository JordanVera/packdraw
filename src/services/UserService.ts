import axios from 'axios';
import { User } from '@/types/User';

class UserService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async getUserById(id: string): Promise<User> {
    try {
      const response = await axios.get<User>(`${this.baseUrl}/user/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  }
}

export default new UserService();
