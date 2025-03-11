import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { CSVBook } from "@/types/api";

const getBirtdayBook = async (): Promise<CSVBook[]> => {
  const filePath = path.join(process.cwd(), "public", "data", "NL_BO_SPECIES_MASTER_NEW_202112.csv");
  try {
    const result: CSVBook[] | null = await new Promise((resolve, reject) => {
      const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
      const day = new Date().getDate().toString().padStart(2, "0");
      const toDayDate = `${month}-${day}`;
      const bookData: CSVBook[] = [];
      const stream = fs
        .createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
          const spltit = row.TWO_PBLICTE_DE.split("-");
          if (`${spltit[1]}-${spltit[2]}` === toDayDate && row.IMAGE_URL.includes("image.aladin.co.kr")) {
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
