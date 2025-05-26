import { AdminInquiryInputs } from "@/components/popupProvider/adminForm/AdminInquiryForm";
import {
  ConentsPostRequest,
  EventPostRequest,
  PublisherPostRequest,
} from "@/types/dto";
import { postRequest } from "./commonPost";

export const postContacts = (body: AdminInquiryInputs) =>
  postRequest<AdminInquiryInputs>("/contacts", body);

export const postContents = (body: ConentsPostRequest) =>
  postRequest<ConentsPostRequest>("/contents", body);

export const postEvents = (body: EventPostRequest) =>
  postRequest<EventPostRequest>("/events", body);

export const postPublisher = (body: PublisherPostRequest) =>
  postRequest<PublisherPostRequest>("/publishers", body);
