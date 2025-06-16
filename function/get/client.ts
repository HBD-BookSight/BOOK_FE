import { ListResponseContentsDto, PageResponsePublisherDto } from "@/types/dto";
import { getRequest } from "./commonGet";

export const getPublishers = () =>
  getRequest<PageResponsePublisherDto>("/publishers");

export const getBookContents = (isbn: string) =>
  getRequest<ListResponseContentsDto>(`books/${isbn}/contents`);

export const getBirthdayBooks = (date: string) =>
  getRequest<ListResponseContentsDto>(`books?page=0&limit=10&publishedDate=${date}&orderBy=PublishedDate&direction=desc`);