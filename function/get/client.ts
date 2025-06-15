import { ListResponseContentsDto, PageResponsePublisherDto } from "@/types/dto";
import { getRequest } from "./commonGet";

export const getPublishers = () =>
  getRequest<PageResponsePublisherDto>("/publishers");

export const getBookContents = (isbn: string) =>
  getRequest<ListResponseContentsDto>(`books/${isbn}/contents`);
