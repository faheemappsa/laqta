'use client';

import { useEffect, useState } from 'react';

type StoredLanding = {
  slug: string;
  title: string;
  brandName: string;
  landingUrl: string;
  createdAt: string;
};

export default function Page() {
  const [items, setItems] = useState<StoredLanding[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('laqta_recent_landings') || '[]') as StoredLanding[];
      setItems(saved);
    } catch {
      setItems([]);
    }
  }, []);

  return <main>{items[0]?.title || 'No landing yet'}</main>;
}
