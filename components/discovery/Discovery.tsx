import React, { HTMLAttributes } from "react";
import CommonPillButton from "../common/CommonPillButton";
import Image from "next/image";
import DiscoveryList from "./DiscoveryList";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
const Discovery = ({ className, ...props }: Readonly<Props>) => {
  return (
    <section className={`relative h-fit w-full p-[var(--client-layout-margin)] ${className || ""}`} {...props}>
      <div className="relative flex size-full flex-col items-center justify-between">
        <div className="relative flex size-full flex-col items-start justify-center">
          <h2 className="section-title mb-1">디스커버리</h2>
          <p className="section-sub-title mb-4">좋은 책을 발견하는 새로운 관점 </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            alt="discovery"
            src={
              "https://s3-alpha-sig.figma.com/img/0765/8133/dcde9229b77417236ff0d50c7f427e83?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rOES0-J8KQ5hY1nRf0gj6BGpoFr7GYQtmMYSHN6qxePUay0NU9Wyq5l-nDNYry93c2S1~Pq-mQS1YTNAgdwqzpkPK1Fec6omhCx3wgXSbosOVOjOFODliKnJ0IzE6nL151Al4BhW45bGh-1hI7Vyrxmz-LB7GTJmZ-Seubc5VDxNImlKr7kh4G4~5mXM1XhK~DGce7QzBwTljTmXg295~SDC3tie--ht~PI1pfmA~4Art6TIqUu1rbiqdt~aAlKg30r6SF95f6OnjUgkWSN72VPo2kKZvJLbdbPkN0xnyZbmYCPDdv6VtEVPpCZInsi~wByw8Rvt51QHtkyWDJ8xsg__"
            }
            fill
            sizes="768px"
          />
        </div>
      </div>
      <ul>
        {[...new Array(3)].map((_item, index) => (
          <React.Fragment key={index}>
            <DiscoveryList
              contentType="유튜브"
              title="ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㅇㅁㄴㄹㅇㅁㅇㄹㄴㅁ"
              imageUrl="https://s3-alpha-sig.figma.com/img/0765/8133/dcde9229b77417236ff0d50c7f427e83?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rOES0-J8KQ5hY1nRf0gj6BGpoFr7GYQtmMYSHN6qxePUay0NU9Wyq5l-nDNYry93c2S1~Pq-mQS1YTNAgdwqzpkPK1Fec6omhCx3wgXSbosOVOjOFODliKnJ0IzE6nL151Al4BhW45bGh-1hI7Vyrxmz-LB7GTJmZ-Seubc5VDxNImlKr7kh4G4~5mXM1XhK~DGce7QzBwTljTmXg295~SDC3tie--ht~PI1pfmA~4Art6TIqUu1rbiqdt~aAlKg30r6SF95f6OnjUgkWSN72VPo2kKZvJLbdbPkN0xnyZbmYCPDdv6VtEVPpCZInsi~wByw8Rvt51QHtkyWDJ8xsg__"
            />
            {index < [...new Array(3)].length - 1 && <div className="border-b" />}
          </React.Fragment>
        ))}
      </ul>
      <div className="relative flex w-full justify-center">
        <CommonPillButton className="!size-fit border border-gray-200 bg-white px-4 text-[var(--sub-color)]">
          컨텐츠 더보기
        </CommonPillButton>
      </div>
    </section>
  );
};

export default Discovery;
