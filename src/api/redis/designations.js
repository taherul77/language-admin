import Redis from 'ioredis';
import { DesignationData } from '@/api';

const redis = new Redis({
  host: '127.0.0.1', // Replace with your Redis server's IP if necessary
  port: 6379, // Default Redis port
  password: '123456', // Replace with your Redis password
});

export async function getDesignations() {
  const cacheKey = 'designations';
  const cacheTTL = 15 * 60; // Cache for 15 minutes

  try {
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const data = await DesignationData();
    await redis.set(cacheKey, JSON.stringify(data), 'EX', cacheTTL);

    return data;
  } catch (error) {
    console.error('Error in getDesignations:', error);
    throw new Error('Internal Server Error');
  }
}
