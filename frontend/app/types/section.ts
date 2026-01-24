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
