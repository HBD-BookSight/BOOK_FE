"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import BookItem from "./Bookitem";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;
type Books = {
  isbn: string;
  created_at: Date;
  image_url: string;
};
const BirthDayGrid = ({ className, ...props }: Readonly<Props>) => {
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
    ]);
  }, []);
  return (
    <section
      className={`relative grid w-full grid-cols-2 gap-[10px] p-[var(--root-layout-margin)] ${className || ""}`}
      {...props}
    >
      {books?.map((item) => (
        <BookItem key={item.isbn} isbn={item.isbn} imageUrl={item.image_url} />
      ))}
    </section>
  );
};

export default BirthDayGrid;
