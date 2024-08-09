"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const StairTransition = dynamic(() => import('./StairTransition').then((mod) => mod.StairTransition), { ssr: false });

export default function ClientOnlyStairTransition() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <StairTransition />;
}
