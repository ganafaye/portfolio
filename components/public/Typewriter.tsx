'use client';

import { useEffect, useState } from 'react';
import { TYPEWRITER_PHRASES } from '@/lib/data';

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 400;

export function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((p) => (p + 1) % TYPEWRITER_PHRASES.length);
        }, PAUSE_BEFORE);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      <span>{text}</span>
      <span className="tw-cursor" />
    </>
  );
}