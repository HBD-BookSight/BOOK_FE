import PublisherPortrait from "@/components/publisherProfile/PublisherPortrait";
import React from "react";

type Props = {
  className?: string;
  publisherName: string;
  imageUrl: string;
  instagramId: string;
};
const PublisherGridItem = ({ className, publisherName, imageUrl, instagramId, ...props }: Readonly<Props>) => {
  return (
    <div className={`relative flex size-full flex-col overflow-hidden ${className || ""}`} {...props}>
      {imageUrl ? (
        <PublisherPortrait className="mb-3" imageUrl={imageUrl} />
      ) : (
        <div className="aspect-square rounded-full bg-[#FFFFFFD9] shadow-[0_0_var(--client-layout-margin)_rgba(0,0,0,0.12)]"></div>
      )}
      <p className="line-clamp-1 text-center text-sm">{publisherName || "출판사 이름"}</p>
      <p className="line-clamp-1 text-center text-xs text-[var(--sub-color)]">{instagramId || "인스타그램 아이디"}</p>
    </div>
  );
};

export default PublisherGridItem;
