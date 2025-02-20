"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { useParams } from "next/navigation";
import React from "react";
const BookDetailpage = () => {
  const params = useParams();
  const {} = useBackHeader();
  return <main className="flex size-full flex-1 items-center gap-8">{params.isbn}</main>;
};

export default BookDetailpage;
