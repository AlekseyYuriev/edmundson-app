export interface HeroData {
  title: string;
  subtitle: string;
  image?: { url?: string };
}

export interface ServicesData {
  title: string;
  subtitle: string;
  service_cards: ServiceCardData[];
}

export interface ServiceCardData {
  id: number;
  title: string;
  description: [
    {
      type: string;
      children: [
        {
          text: string;
        },
      ];
    },
  ];
  image?: { url?: string };
}

export interface PartnersData {
  title: string;
  partner_cards: PartnerCardData[];
}

export interface PartnerCardData {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  image?: { url?: string };
  logo?: { url?: string };
}

export interface LocationData {
  title: string;
  locations: LocationCardData[];
}

export interface LocationCardData {
  id: number;
  title: string;
  manager: string;
  phone: string;
  email: string;
  address: AddressData;
  order: number;
  latitude: number;
  longitude: number;
}

export interface AddressData {
  id: number;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  district: string;
  postcode: string;
}

export interface RichTextData {
  type: string;
  children: [
    {
      type: string;
      text: string;
      bold?: boolean;
    },
  ];
}
