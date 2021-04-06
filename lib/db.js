import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    // 'mongodb+srv://maximilian:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority'
    'mongodb+srv://pepsiamir:54bgC4ZukRq5t9zb@nextjs.kmkg5.mongodb.net/test'
  );

  return client;
}
