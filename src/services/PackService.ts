import axios from 'axios';
import { Item } from '@/types/Item';
import { Pack } from '@/types/Pack';
import { CreatePackData } from '@/types/CreatePackData';

class PackService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async getAllPacks(): Promise<Pack[]> {
    try {
      const response = await axios.get<Pack[]>(`${this.baseUrl}/packs`);

      console.log('response.data', response.data);

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

  async createPack(packData: CreatePackData): Promise<Pack> {
    try {
      const response = await axios.post<Pack>(
        `${this.baseUrl}/packs`,
        packData
      );

      return response.data;
    } catch (error) {
      console.error('Error creating pack:', error);
      throw error;
    }
  }
}

export default new PackService();
