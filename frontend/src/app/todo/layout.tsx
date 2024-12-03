import styles from './styles.module.css';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';
import { Header } from '@/components/organisms/Header';

export default function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
