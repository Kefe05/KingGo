'use client';
import React from 'react';
import NotFoundCard from '@/components/ui/NotFoundCard';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <NotFoundCard
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist in the KingGo universe. Let's get you back to familiar territory."
      onBack={() => window.history.back()}
      onHome={() => (window.location.href = '/dashboard')}
    />
  );
}
