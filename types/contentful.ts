import { Asset, EntrySkeletonType } from "contentful";

export interface BannerFields {
  backgroundImage?: Asset; // Asset chứa thông tin về file hình ảnh từ Contentful
  title: string; // Tiêu đề chính
  subtitle: string; // Phụ đề
  ctaText: string; // Nội dung nút CTA
  ctaLink: string; // Link nút CTA
}

// Kế thừa kiểu từ EntrySkeletonType
export interface BannerEntry extends EntrySkeletonType {
  fields: BannerFields;
}
