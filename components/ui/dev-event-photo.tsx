import Image from "next/image";

interface DevEventPhotoProps {
  image: string;
  name: string;
  year: string;
}

export function DevEventPhoto({ image, name, year }: DevEventPhotoProps) {
  return (
    <div className="w-full space-y-2">
      <Image
        src={image}
        alt={name}
        width={1200}
        height={800}
        className="w-full h-auto rounded-sm"
      />
      <div className="flex w-full items-center justify-between">
        <p className="text-style-body-small-100">{name}</p>
        <p className="text-style-body-small-100">{year}</p>
      </div>
    </div>
  );
}
