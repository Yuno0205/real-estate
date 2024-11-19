import { BannerEntry } from "@/types/contentful";
import { createClient, EntryCollection } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Hàm fetch dữ liệu Banner
export const fetchBanner = async (): Promise<EntryCollection<BannerEntry>> => {
  return client.getEntries<BannerEntry>({
    content_type: "banner", // Tên Content Type trong Contentful
  });
};
