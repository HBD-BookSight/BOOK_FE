import Image from "next/image";
import React from "react";
import EmptyImage from "../common/EmptyImage";

type Props = {
  className?: string;
  imageUrl?: string;
};
const PublisherPortrait = ({ className, imageUrl, ...props }: Readonly<Props>) => {
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-full ${className || ""}`} {...props}>
      {imageUrl ? <Image alt="publisher" src={imageUrl} fill></Image> : <EmptyImage />}
    </div>
  );
};

export default PublisherPortrait;
