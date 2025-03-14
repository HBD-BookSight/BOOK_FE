"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { useEffect } from "react";
const SearchHeaderHelper = ({ query }: { query: string }) => {
  const { setTitle } = useBackHeader();

  useEffect(() => {
    setTitle(query);
    return () => {
      setTitle("");
    };
  }, [setTitle, query]);
  return null;
};

export default SearchHeaderHelper;
