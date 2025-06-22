import { getRequestForAdmin } from "./commonGet";

export const getAdminKakaoBooks = () => getRequestForAdmin("/kakao-books");

export const getAdminViewLogs = () => getRequestForAdmin("/book-view-logs");

export const getAdminSearchLogs = () => getRequestForAdmin("/book-search-logs");
