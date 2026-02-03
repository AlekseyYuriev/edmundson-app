export interface StrapiResponse<T> {
  data: T[];
  meta: any;
}

export interface PageSection {
  id: number;
  title: string;
  content: any[];
}

export interface PageData {
  id: number;
  slug: string;
  sections: PageSection[];
}
