import { BannerEntry, BlueZoneEntry } from "@/types/contentful";
import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

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

// Hàm fetch dữ liệu Blue Zone
export const fetchBlueZone = async (): Promise<
  EntryCollection<BlueZoneEntry>
> => {
  return client.getEntries<BlueZoneEntry>({
    content_type: "bluezone", // Tên Content Type trong Contentful
  });
};

export const fetchContentfulData = async <T extends EntrySkeletonType>(
  contentType: string
): Promise<EntryCollection<T>> => {
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
    });

    if (!entries.items.length) {
      throw new Error(`No entries found for content type: ${contentType}`);
    }

    return entries;
  } catch (error) {
    console.error(`Error fetching content type "${contentType}":`, error);
    throw error;
  }
};
