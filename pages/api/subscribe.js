import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const docRef = await addDoc(collection(db, 'subscriptions'), {
        email,
        subscribedAt: new Date()
      });
      res.status(200).json({ id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: 'Error adding document: ' + error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
