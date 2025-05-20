import Image from "next/image";

const Readerpage = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh)" }}>
      <Image
        fill
        src="/images/독자.png"
        alt="독자이미지"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Readerpage;
