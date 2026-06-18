export type LaqtaType = 'product' | 'clinic' | 'real_estate' | 'service' | 'personal_brand';

export type LaqtaData = {
  type: LaqtaType;
  brandName: string;
  title: string;
  description: string;
  price?: string;
  mainImageUrl?: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  competitorEdge: string;
  ctaType: 'whatsapp' | 'link';
  ctaValue: string;
};
