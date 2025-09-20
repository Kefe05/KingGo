'use client';
import Card from '@mui/material/Card';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen flex">
      {pathname.startsWith('role') && (
        <Card
          sx={{
            height: '100%',
            width: '40%',
            borderRadius: '50px',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            border: '1px solid black',
          }}
        >
          <Image
            src={'/auth-pic.jpg'}
            alt="driving home"
            className="w-full h-full"
            width={200}
            height={200}
          />
        </Card>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
}
