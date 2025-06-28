import { getContentDetail, getPublisherDetail } from "../get/client";

export const fetchDetail = (id: number, pathName: string) => {
  try {
    let data;
    if (pathName === "/admin/content") {
      data = getContentDetail(id);
    } else if (pathName === "/admin/publisher") {
      data = getPublisherDetail(id);
    }
    return data;
  } catch (e) {
    console.error("데이터 조회 실패", e);
  }
};
