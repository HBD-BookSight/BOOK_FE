import {
  ContactDto,
  ContentsCreateRequest,
  ContentsDetail,
  EventCreateRequest,
  PublisherCreateRequest,
  PublisherDetail,
} from "./dto";

export type DefaultValueTypes =
  | ContentsCreateRequest
  | EventCreateRequest
  | PublisherCreateRequest
  | ContactDto
  | PublisherDetail
  | ContentsDetail;
