import { getImages } from "@/drizzle/db";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const images = await getImages();
  console.log(images);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48">
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              height={480}
              width={480}
              alt={`image number ${image.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
