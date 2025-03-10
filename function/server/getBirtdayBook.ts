import fs from "fs";
import path from "path";
import csv from "csv-parser";

export type Book = {
  SEQ_NO: string;
  ISBN_THIRTEEN_NO: string;
  VLM_NM: string;
  TITLE_NM: string;
  AUTHR_NM: string;
  PUBLISHER_NM: string;
  PBLICTE_DE: string;
  ADTION_SMBL_NM: string;
  PRC_VALUE: string;
  IMAGE_URL: string;
  BOOK_INTRCN_CN: string;
  KDC_NM: string;
  TITLE_SBST_NM: string;
  AUTHR_SBST_NM: string;
  TWO_PBLICTE_DE: string;
  INTNT_BOOKST_BOOK_EXST_AT: string;
  PORTAL_SITE_BOOK_EXST_AT: string;
  ISBN_NO: string;
};
const getBirtdayBook = async (): Promise<Book[]> => {
  const filePath = path.join(process.cwd(), "public", "data", "NL_BO_SPECIES_MASTER_NEW_202112.csv");
  try {
    const result: Book[] | null = await new Promise((resolve, reject) => {
      const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
      const day = new Date().getDate().toString().padStart(2, "0");
      const toDayDate = `${month}-${day}`;
      const bookData: Book[] = [];
      const stream = fs
        .createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
          const spltit = row.TWO_PBLICTE_DE.split("-");
          if (`${spltit[1]}-${spltit[2]}` === toDayDate) {
            bookData.push(row);
            if (bookData.length === 6) {
              //최대 6개까지만 찾음 다 찾으면 너무 오래걸리고 어차피 안씀
              resolve(bookData);
              stream.destroy();
            }
          }
        })
        .on("end", () => {
          resolve(bookData); //6개 다 못찾아도 Promise를 반환
        })
        .on("error", (error) => {
          reject(error); // 에러 발생 시 Promise를 실패 상태로 설정
        })
        .on("close", () => {
          // 스트림이 닫혔지만 조건에 맞는 데이터를 찾지 못한 경우
          resolve(null); // null 반환
        });
    });
    // 결과 반환
    if (result) {
      return result;
    } else {
      throw new Error("No matching data found");
    }
  } catch (error) {
    throw error;
  }
};

export default getBirtdayBook;
