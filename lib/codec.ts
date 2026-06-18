import type { LaqtaData } from '../types';

export function encodeLaqta(data: LaqtaData) {
  const json = JSON.stringify(data);
  if (typeof window === 'undefined') return '';
  return window.btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

export function decodeLaqta(encoded: string): LaqtaData | null {
  try {
    if (typeof window === 'undefined') return null;
    const normalized = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
    const json = decodeURIComponent(escape(window.atob(padded)));
    return JSON.parse(json) as LaqtaData;
  } catch {
    return null;
  }
}

export function makeSlug(title: string) {
  const cleaned = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const random = Math.random().toString(36).slice(2, 7);
  return `${cleaned || 'laqta'}-${random}`;
}
