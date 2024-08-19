import { getAllLocationEmployee } from '@/api/redis/allLocationEmployee';

export async function GET() {
  try {
    const data = await getAllLocationEmployee();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
