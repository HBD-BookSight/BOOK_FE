"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import BookItem from "./BookItem";
import BookDescription from "./BookDescription";
import ReactConfetti from "react-confetti";
import { Book } from "@/function/server/getBirtdayBook";
import { motion } from "framer-motion";
import ArrowHeadIcon from "@/public/icons/arrowHeadIcon.svg";

type Props = { className?: string; books: Book[] } & HTMLAttributes<HTMLDivElement>;
const MainBookSlide = ({ className, books, ...props }: Readonly<Props>) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [booksData, setBooksData] = useState<Array<Book> | undefined>(books);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [slideViewSize, setSlideViewSize] = useState<number>();
  const [prevScrollIndex, setPrevScrollIndex] = useState<number>(0);
  const [confettiWind, setConfettiWind] = useState<number>(0);

  //전체 크기 조정용
  useEffect(() => {
    const sectionUpdateSize = () => {
      if (sectionRef.current) {
        setSize({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    };
    sectionUpdateSize();
    window.addEventListener("resize", sectionUpdateSize);
    return () => window.removeEventListener("resize", sectionUpdateSize);
  }, []);

  //슬라이드 뷰 크기 조정용
  useEffect(() => {
    const slideViewUpdateSize = () => {
      if (slideContainerRef.current) {
        setSlideViewSize(slideContainerRef.current.offsetWidth);
      }
    };
    slideViewUpdateSize();
    window.addEventListener("resize", slideViewUpdateSize);
    return () => window.removeEventListener("resize", slideViewUpdateSize);
  }, []);

  const slideLeftHandler = () => {
    setBooksData((prev) => {
      if (!prev) return prev;
      return [...prev.slice(1), prev[0]];
    });
    setConfettiWind(-0.1);
  };
  const slideRightHandler = () => {
    setBooksData((prev) => {
      if (!prev) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
    setConfettiWind(0.1);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (slideContainerRef.current && booksData) {
      const { scrollLeft, scrollWidth, clientWidth } = slideContainerRef.current;
      const scrollRatio = scrollLeft / (scrollWidth - clientWidth); // 현재 스크롤 비율
      const totalSteps = booksData.length; // 배열의 길이 (6개)
      const stepSize = 1 / totalSteps; // 한 단계의 비율 (예: 0.16)
      const currentIndex = Math.floor(scrollRatio / stepSize); // 현재 단계 계산

      if (currentIndex !== prevScrollIndex) {
        // 새로운 단계에 도달했을 때만 배열 업데이트
        setBooksData((prevItems) => rotateArray(prevItems));
        setPrevScrollIndex(currentIndex); // 이전 인덱스 업데이트
      }
      if (currentIndex > prevScrollIndex) {
        setConfettiWind(-0.1);
      } else if (currentIndex < prevScrollIndex) {
        setConfettiWind(0.1);
      }
    }
  };

  //콘페티 이벡트 바람 조정
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiWind(0);
    }, 2000);
    return () => clearTimeout(timer);
  }, [confettiWind]);

  // 배열 회전
  const rotateArray = (array: Book[] | undefined) => {
    if (!array) return;
    return [...array.slice(1), array[0]]; // 첫 번째 요소를 마지막으로 이동
  };

  return (
    <section className={`flex size-full flex-col ${className || ""}`} {...props} ref={sectionRef}>
      <ReactConfetti
        width={size.width}
        height={size.height}
        wind={confettiWind}
        gravity={0.08}
        friction={0.96}
        numberOfPieces={size.width / 25}
        drawShape={drawShape}
        style={{ zIndex: 0, display: "absolute" }}
      />
      <BookDescription createdAt={new Date()} className="z-10 px-[var(--client-layout-margin)]" />
      <div
        className=" scrollbar-hide group relative size-full max-w-full overflow-auto"
        ref={slideContainerRef}
        onScroll={handleScroll}
      >
        <div className="relative flex w-[150vw] flex-row">
          <div
            className="sticky left-0 flex h-[calc(341px+var(--client-layout-margin))] flex-row-reverse justify-between overflow-visible py-[var(--client-layout-margin)] pl-[calc(235px)]"
            style={slideViewSize ? { width: slideViewSize } : {}}
          >
            <button
              className="absolute left-0 top-1/2 z-10 ml-[var(--client-layout-margin)] flex size-10 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#FFFFFFD9] opacity-0 backdrop-blur-[5px] transition-opacity group-hover:opacity-100"
              onClick={slideLeftHandler}
            >
              <ArrowHeadIcon className="size-5 rounded-2xl text-[var(--sub-color)]" />
            </button>
            <button
              className="absolute right-0 top-1/2 z-10 mr-[var(--client-layout-margin)] flex size-10 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#FFFFFFD9] opacity-0 backdrop-blur-[5px] transition-opacity group-hover:opacity-100"
              onClick={slideRightHandler}
            >
              <ArrowHeadIcon className="size-5 rotate-180 rounded-2xl text-[var(--sub-color)]" />
            </button>
            {booksData &&
              booksData.map((book, index) => (
                <motion.div
                  layout
                  transition={{
                    layout: { duration: 0.15, ease: "easeInOut" },
                  }}
                  key={book.ISBN_THIRTEEN_NO}
                  className="relative flex size-full items-end justify-center"
                >
                  <BookItem
                    ind={index}
                    isbn={book.ISBN_THIRTEEN_NO}
                    imageUrl={book.IMAGE_URL}
                    bookLength={booksData.length}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBookSlide;

const drawShape = (ctx: CanvasRenderingContext2D) => {
  const path = new Path2D(
    "M37 2L23 0C23.8 7.2 13.3333 12.3333 8 14C10.5 16.5 17.6 20.9 26 18.5C34.4 16.1 36.8333 6.5 37 2Z"
  );
  ctx.save();
  ctx.fill(path);
  ctx.restore();
};
