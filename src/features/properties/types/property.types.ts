export interface Property {
  id: number;
  name: string;
  location: string;
  city: string;
  type: 'Villa' | 'Apartment' | 'Independent House' | 'Commercial' | 'Plot & Land';
  status: 'For Sale' | 'For Rent';
  price: string;
  priceNote?: string;
  beds?: number;
  baths?: number;
  area: string;
  image: string;
}

export interface Category {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
