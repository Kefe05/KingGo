import { ReactNode } from 'react';
import AuthLayout from './component/authLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
