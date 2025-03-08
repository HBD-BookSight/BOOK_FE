"use server";
import fs from "fs";
import path from "path";
import csv from "csv-parser";

// 클라이언트 요청 처리
export async function getCSVData(isbn: string) {
  const csvFilePath = path.join(process.cwd(), "data", "NL_BO_SPECIES_MASTER_NEW_202112.csv");
  const indexFilePath = path.join(process.cwd(), "data", "index.json");

  if (!isbn) {
    return { message: "ID가 제공되지 않았습니다." };
  }

  try {
    // 미리 생성된 인덱스 로드
    const index = JSON.parse(fs.readFileSync(indexFilePath, "utf-8"));

    // 인덱스에서 데이터 위치 확인
    const offset = index[isbn];
    if (offset === undefined) {
      return { message: "데이터를 찾을 수 없습니다." };
    }

    // CSV 파일에서 데이터 읽기
    const result = await new Promise((resolve, reject) => {
      const stream = fs
        .createReadStream(csvFilePath, { start: offset })
        .pipe(
          csv({
            headers: [
              //헤더를 못읽어서 직접 헤더 작성
              "SEQ_NO",
              "ISBN_THIRTEEN_NO",
              "VLM_NM",
              "TITLE_NM",
              "AUTHR_NM",
              "PUBLISHER_NM",
              "PBLICTE_DE",
              "ADTION_SMBL_NM",
              "PRC_VALUE",
              "IMAGE_URL",
              "BOOK_INTRCN_CN",
              "KDC_NM",
              "TITLE_SBST_NM",
              "AUTHR_SBST_NM",
              "TWO_PBLICTE_DE",
              "INTNT_BOOKST_BOOK_EXST_AT",
              "PORTAL_SITE_BOOK_EXST_AT",
              "ISBN_NO",
            ],
          })
        )
        .on("data", (data) => {
          if (data.ISBN_THIRTEEN_NO === isbn) {
            // 조건에 맞는 데이터를 찾으면 바로 resolve
            resolve(data);
            stream.destroy(); // 스트림 강제 종료
          }
        })
        .on("error", (error) => {
          reject(error); // 에러 발생 시 Promise를 실패 상태로 설정
        })
        .on("end", () => {
          console.log("스트림 종료: 데이터 없음");
          resolve(null); // 데이터가 없으면 null 반환
        })
        .on("close", () => {
          // 스트림이 닫혔지만 조건에 맞는 데이터를 찾지 못한 경우
          resolve(null); // null 반환
        });
    });

    if (result) {
      return { data: result };
    } else {
      return { message: "데이터를 찾을 수 없습니다." };
    }
  } catch (error) {
    return { error };
  }
}
