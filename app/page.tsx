import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
};

export default function HomePage() {
  return <main className="flex grow flex-col">Hello world!</main>;
}
