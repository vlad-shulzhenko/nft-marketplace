import Header from './components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NFT MARKETPLACE',
  description: 'NFT MARKETPLACE',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
    </main>
  );
}
