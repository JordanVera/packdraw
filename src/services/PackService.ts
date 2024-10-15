import axios from 'axios';

interface Pack {
  id: string;
  // Add other pack properties here
}

class PackService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async getAllPacks(): Promise<Pack[]> {
    try {
      const response = await axios.get<Pack[]>(`${this.baseUrl}/packs`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all packs:', error);
      throw error;
    }
  }

  async getPackById(id: string): Promise<Pack> {
    try {
      const response = await axios.get<Pack>(`${this.baseUrl}/packs/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching pack with id ${id}:`, error);
      throw error;
    }
  }
}

export default new PackService();
