"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const BirthDayHeaderHelper = () => {
  const params = useSearchParams();
  const { setTitle, setSubTitle } = useBackHeader();
  const month = params.get("month");
  const day = params.get("day");

  useEffect(() => {
    setTitle("Happy Books Day!");
    setSubTitle(`${month}월 ${day}일 태어난 책`);
    return () => {
      setTitle("");
      setSubTitle("");
    };
  }, [setSubTitle, setTitle, month, day]);
  return null;
};

export default BirthDayHeaderHelper;
