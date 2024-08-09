"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const PageTransition = dynamic(() => import('./PageTransition').then((mod) => mod.PageTransition), { ssr: false });

export default function ClientOnlyPageTransition({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <PageTransition>{children}</PageTransition>;
}
