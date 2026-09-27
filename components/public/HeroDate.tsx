'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { formatFrenchDate } from '@/lib/utils';

export function HeroDate() {
  const [date, setDate] = useState('—');

  useEffect(() => {
    setDate(formatFrenchDate());
  }, []);

  return (
    <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 text-white drop-shadow-lg">
      <Icon name="calendar_today" size={20} />
      <span className="text-body-md font-medium tracking-wide">{date}</span>
    </div>
  );
}