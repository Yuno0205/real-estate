import { Entry } from "contentful";
import { BannerSkeleton } from "../types/contentful";
import { client } from "@/lib/contentful";

export const fetchBanners = async (): Promise<Entry<BannerSkeleton>[]> => {
  const response = await client.getEntries<BannerSkeleton>({
    content_type: "banner", // ID Content Type từ Contentful
    include: 2,
  });

  return response.items; // Trả về Entry<BannerSkeleton>[]
};
