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
}
