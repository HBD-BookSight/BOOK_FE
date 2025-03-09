"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import ShareIcon from "@/public/icons/shareIcon.svg";

const BookHeaderHelper = () => {
  const { isbn } = useParams();
  const { setTitle, setEtcButton } = useBackHeader();

  useEffect(() => {
    if (typeof isbn !== "string") return;
    setTitle(isbn);
    setEtcButton(<ShareIcon className="text-[var(--sub-color)]" />);
    return () => {
      setTitle("");
      setEtcButton(null);
    };
  }, [setTitle, setEtcButton, isbn]);
  return null;
};

export default BookHeaderHelper;
