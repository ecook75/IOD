import Link from 'next/link';

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
      <p>
        Go back <Link href="/">Home</Link> or visit the{' '}
        <Link href="/about">About</Link> page.
      </p>
    </main>
  );
}