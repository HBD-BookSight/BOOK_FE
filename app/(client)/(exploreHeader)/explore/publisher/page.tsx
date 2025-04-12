import PublisherGridItem from "./components/PublisherGridItem";
import Link from "next/link";
import PublisherPageDataProvider from "./components/PublisherPageDataProvider";
import PublisherFilterController from "./components/publisherFilterController/PublisherFilterController";

const PublisherPage = () => {
  return (
    <main className="relative flex size-full flex-col items-center">
      <PublisherPageDataProvider initialData={{}}>
        <PublisherFilterController />
        <section className="mt-14 grid size-full grid-cols-3 gap-2 p-9">
          {[...new Array(30)].map((_item, index) => (
            <Link href={`/publisher/${index}`} key={index}>
              <PublisherGridItem
                key={index}
                imageUrl="https://s3-alpha-sig.figma.com/img/d0e2/5bb2/de40eee98c72f7a09314e260baa500a0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iPBj-JFOKN~02lRr3C1SoNM0vmqmoWgGQ~~HO8V6F80ok2YjsJr4oD-nFnZQWTdo2vS5cY-r5WxRQDCTF5B~fxukoXy7mRvq-JudRbf8fWsfak2NJ0yeGXO5MOQMfVgP46GTmJjw98fBdNUZFoQuH103lzBgcdYGOtKRddg9CckUF5~WQqPo7ivrKl7RG0gCdMKkIDAI~JaLH3kGGiT0xAE~TMZs373K9qiuC6zzweO9KgSar5DddyMvIinPT1182v-nCt0Xrv6EUQ0MKWtkAQdji09S3Swg0f9X965u9lUB34osEJyHlYgjvPe6iviTMjbf-4~H0sMyTaQXzB5l0w__"
                instagramId="@testasddfsdaf"
                publisherName="asdfsdasfd"
              />
            </Link>
          ))}
        </section>
      </PublisherPageDataProvider>
    </main>
  );
};

export default PublisherPage;
