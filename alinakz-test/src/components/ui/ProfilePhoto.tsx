import { cn } from "@/utils/cn";

export interface ProfilePhotoProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfilePhoto({ src, alt, className }: ProfilePhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("rounded-full border-[1px] border-accent", className)}
    />
  );
}
