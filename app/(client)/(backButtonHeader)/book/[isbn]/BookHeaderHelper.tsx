"use client";
import { useBackHeader } from "@/context/backHeaderStore";
import { useEffect, useState } from "react";
import ShareIcon from "@/public/icons/shareIcon.svg";
import KakaoInfoTip from "@/components/kakaoInfoTip/KakaoInfoTip";

type Props = { bookName?: string; isbn: number; hasData: boolean };
const BookHeaderHelper = ({ bookName, hasData, isbn }: Readonly<Props>) => {
  const { setTitle, setEtcButton } = useBackHeader();
  const [bookNameState, setBookNameState] = useState(bookName);
  useEffect(() => {
    //카카오 검색데이터 없을시 세션 스토리지에서 제목을 가져옴
    if (!bookName) {
      const bookName = sessionStorage.getItem(isbn.toString());
      if (bookName) {
        setBookNameState(JSON.parse(bookName).TITLE_NM);
      }
    }
  }, [bookName, isbn]);

  useEffect(() => {
    if (typeof bookNameState !== "string") return;
    setTitle(
      <div className="flex size-fit min-w-0 max-w-[50vw] flex-row items-center justify-start">
        <span className="truncate">{bookNameState}</span>
        {hasData && <KakaoInfoTip />}
      </div>
    );
    setEtcButton(<ShareIcon className="text-[var(--sub-color)]" />);
    return () => {
      setTitle("");
      setEtcButton(null);
    };
  }, [setTitle, setEtcButton, bookNameState, hasData]);
  return null;
};

export default BookHeaderHelper;
