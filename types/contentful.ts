import { Asset, EntrySkeletonType } from "contentful";

export type ContentfulEntry<TFields> = EntrySkeletonType & {
  fields: TFields;
};

export interface BannerFields {
  backgroundImage?: Asset;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface BlueZoneFields {
  title1: string;
  title2: string;
  icon: string;
  content: string;
  backgroundImage?: Asset;
  backgroundColor: string;
}

export interface OverallFields {
  title1: string;
  title2: string;
  textbold1: string;
  textbold2: string;
  text1: string;
  text2: string;
  slides: Asset[];
  hightlight?: any;
  mainImage?: Asset;
}

// Sử dụng generic utility
export type BannerEntry = ContentfulEntry<BannerFields>;
export type BlueZoneEntry = ContentfulEntry<BlueZoneFields>;
