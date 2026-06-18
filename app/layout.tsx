import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'لقطة — اصنع صفحة بيع فاخرة خلال دقائق',
  description: 'لقطة من مُلهمات: منصة عربية لإنشاء صفحات بيع فاخرة للمنتجات والخدمات والعيادات والعقار خلال دقائق.',
  metadataBase: new URL('https://laqta.vercel.app'),
  openGraph: {
    title: 'لقطة — صفحة بيع فاخرة خلال دقائق',
    description: 'حوّل منتجك أو خدمتك إلى صفحة جذابة قابلة للمشاركة والطلب فورًا.',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'لقطة — صفحة بيع فاخرة خلال دقائق',
    description: 'اصنع صفحة بيع فاخرة لمنتجك أو خدمتك واربطها بواتساب أو رابط الدفع.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f7efe4',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
    </html>
  );
}
