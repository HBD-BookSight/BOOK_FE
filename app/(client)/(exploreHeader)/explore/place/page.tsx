import Image from "next/image";

const Placepage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        fill
        src={"/images/공간.png"}
        alt={"공간이미지"}
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
};

export default Placepage;
