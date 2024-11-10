import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export interface ProfileWidgetProps {
  src: string;
  name: string;
  className?: string;
}

export function ProfileWidget({ src, name, className }: ProfileWidgetProps) {
  return (
    <button className="flex items-center gap-[8px]">
      <ProfilePhoto src={src} alt={name} className={className} />
      <span className="hidden sm:inline">{name}</span>
    </button>
  );
}
