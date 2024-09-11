import Image from "next/image";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/f0d7c642-1825-4ffa-944e-cb0a4a976295-1kikn0.jpg",
  "https://utfs.io/f/558b6ce9-bf2e-469f-8cbf-3f4a2e9f7ff3-tusl81.jpg",
  "https://utfs.io/f/4617a42c-dff0-4fdd-9ea8-69b274fa554a-1vdbq.jpg",
  "https://utfs.io/f/006391fc-4aff-4b39-bed6-80a4fc4f26b3-3j6w32.jpg",
  "https://utfs.io/f/2dcb9a9e-a224-4070-a62e-f4056f5df7c0-wh3lcj.jpg",
  "https://utfs.io/f/47e64670-2219-4e0a-99f4-1254059c96ab-8di91p.png",
  "https://utfs.io/f/7f162813-7f4e-4878-9c49-983c36a48866-3kw6za.jpg",
  "https://utfs.io/f/fb4996a8-baa4-40e6-8785-b8cdec75991a-e14xva.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {mockImages.map((image) => (
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
