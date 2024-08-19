import { getAllEmployee } from '@/api/redis/allEmployee';

export async function GET() {
  try {
    const data = await getAllEmployee();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
