"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import BookItem from "./BookItem";
import BookDescription from "./BookDescription";
import ReactConfetti from "react-confetti";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

type Books = {
  isbn: string;
  created_at: Date;
  image_url: string;
};
const MainBookSlide = ({ className, ...etc }: Readonly<Props>) => {
  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    setBooks([
      {
        isbn: "1",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
      {
        isbn: "2",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
      {
        isbn: "3",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
      {
        isbn: "4",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
      {
        isbn: "5",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
      {
        isbn: "6",
        created_at: new Date(),
        image_url:
          "https://s3-alpha-sig.figma.com/img/6968/9fe6/099879556d8a4fa78e4f47da472f3ccc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DG5-W8XYicpyjSur7jnZ7k5PmgDY8qjFQzbN2YrPxRHG9mcji3pRUX2zBBPczIgT21eOIuJDnSzEWW6cTDEkWcfjdKUJzYoaGbVJsrYWPZahVZ4OIFek970Jr~4RCYVJWlvzkNiOn2wH4woAfST1dx7uqnQmIQcS0PlX1CUNCQVJw-MobnwPgAENstFrQqjQ8ulbH9EREhzUfE0SWG~HptvljbyD6903xVYVwag6iHvSbxPv7xvvLOdst5Zl~8xEy7jNDrjC0jxazCtPJTTn2bCM-2wgEv85qh2hh7jII8iJBT079ArQwksJOHR6Vwm0nU6XaVvkDxXn~lbop2Qy9w__",
      },
    ]);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className={`flex size-full flex-col px-[var(--root-layout-margin)] ${className || ""}`} {...etc} ref={ref}>
      <ReactConfetti
        width={size.width}
        height={size.height}
        gravity={0.08}
        friction={0.96}
        numberOfPieces={size.width / 30}
        drawShape={drawShape}
        style={{ zIndex: 0 }}
      />
      <BookDescription createdAt={new Date()} className="z-10" />
      <div className="flex size-full h-[341px] flex-row-reverse justify-between pl-[235px]">
        {books.map((book, index) => (
          <BookItem key={index} ind={index} isbn={book.isbn} imageUrl={book.image_url} bookLength={books.length} />
        ))}
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
