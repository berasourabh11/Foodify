import { Client } from 'pg';

const dburi = process.env.DB_URI;

const connectdb = async () => {
  const client = new Client({
    connectionString: dburi,
  });

  try {
    await client.connect();
    console.log('Connected to the database successfully');
    return client;
  } catch (err) {
    console.error('Database connection error', (err as any).stack);
    throw err;
  }
};

export default connectdb;
