import { Header } from '@deur/design-system';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Web() {
  const { setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-slate-800 h-screen">
      <button onClick={() => setTheme('light')} className="bg-red-500 dark:bg-green-500">
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <Header classNames="">Welcome to @deur</Header>
      <Link href={'/setup-device'}>setup-device</Link>
    </div>
  );
}
