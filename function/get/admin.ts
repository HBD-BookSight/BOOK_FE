import { getRequest } from "./commonGet";

export const getAdminKakaoBooks = () => getRequest("/kakao-books");

export const getAdminViewLogs = () => getRequest("/book-view-logs");

export const getAdminSearchLogs = () => getRequest("/book-search-logs");
