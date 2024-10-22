import axios from 'axios';

interface Pack {
  id: string;
  // Add other pack properties here
}

interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  brand?: string;
  createdAt: Date;
  updatedAt: Date;
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

  async getAllItems(): Promise<Item[]> {
    try {
      const response = await axios.get<Item[]>(`${this.baseUrl}/items`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all items:', error);
      throw error;
    }
  }
}

export default new PackService();
