import React, { HTMLAttributes } from "react";
import PublisherPortrait from "./PublisherPortrait";
import CommonPillButton from "../common/CommonPillButton";
import InstagramIcon from "@/public/icons/instagramIcon.svg";

type Props = { className?: string; publisherName: string; imageUrl: string } & HTMLAttributes<HTMLDivElement>;
const PublisherProfile = ({ className, publisherName, imageUrl, ...props }: Readonly<Props>) => {
  return (
    <section className={`relative flex w-full flex-col gap-5 ${className || ""}`} {...props}>
      <div className="flex flex-row gap-3">
        <PublisherPortrait imageUrl={imageUrl} className="!w-20" />
        <div className="flex flex-col items-start justify-center">
          <h2 className="section-title line-clamp-1">{publisherName}</h2>
          <p className="text-sm text-[var(--sub-color)]">출판사</p>
        </div>
      </div>
      <CommonPillButton className="w-fit !justify-start overflow-hidden border-gray-300 px-4 text-sm">
        <InstagramIcon className="aspect-square size-4" />
        <p className="w-full max-w-[50vw] overflow-hidden text-ellipsis">dadsfasdffasdfasasdfadsfasdfdfasdfafsd</p>
      </CommonPillButton>
    </section>
  );
};

export default PublisherProfile;
