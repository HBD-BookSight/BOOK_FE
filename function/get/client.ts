import { PageResponsePublisherDto } from "@/types/dto";
import { getRequest } from "./commonGet";

export const getPublishers = () =>
  getRequest<PageResponsePublisherDto>("/publishers");
