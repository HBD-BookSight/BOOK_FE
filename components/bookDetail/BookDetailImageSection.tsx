import Image from "next/image";
import birthDayCake from "@/public/birthDayCake.png";
import { HTMLAttributes } from "react";

type Props = { className?: string; imageUrl?: string; birthDay?: Date } & HTMLAttributes<HTMLDivElement>;
const BookDetailImageSection = ({ className, imageUrl, birthDay, ...props }: Readonly<Props>) => {
  const birthDayDate = birthDay?.getDate();
  const birthDayMonth = birthDay?.getMonth();
  return (
    <section
      className={`relative mx-auto flex aspect-[3/4] size-full max-w-[163px] items-center justify-center ${
        className || ""
      }`}
      {...props}
    >
      {imageUrl ? (
        <Image alt="book" src={imageUrl} className={`relative size-full rounded-2xl`} fill sizes="163px" />
      ) : (
        <div className="relative flex size-full items-center justify-center rounded-2xl bg-gray-200">사진 미제공</div>
      )}
      {birthDayDate === new Date().getDate() && birthDayMonth === new Date().getMonth() && (
        <Image alt="bithDayCake" src={birthDayCake} width={40} height={40} className="absolute -bottom-2 -right-2" />
      )}
    </section>
  );
};

export default BookDetailImageSection;
