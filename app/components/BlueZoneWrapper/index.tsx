import { fetchBlueZone } from "@/lib/contentful";
import BlueZone from "../BlueZone";
import { BlueZoneFields } from "@/types/contentful";

export default async function BlueZoneWrapper() {
  const res = await fetchBlueZone(); // Fetch dữ liệu trên server
  const data = res.items[0].fields as BlueZoneFields; // Lấy fields của entry đầu tiên

  return <BlueZone data={data} />;
}
