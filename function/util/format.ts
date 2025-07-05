import { ContentsDto, PublisherDto } from "@/types/dto";
import { FormattedContents, FormattedPublisher } from "@/types/format";

export const formatPublisherData = (
  publishers: PublisherDto[]
): FormattedPublisher[] => {
  return publishers.map((p) => {
    return {
      PublisherName: p.name,
      InstagramID: p.engName || "",
      LogoLink: p.logo || "",
      URL: p.urls?.[0]?.url || "",
      URLType: p.urls?.[0]?.type || "",
      BookISBN: "",
      Memo: p.description || "",
      Tag: "",
      id: p.id || 0,
    };
  });
};

export const formatContentsData = (
  contents: ContentsDto[]
): FormattedContents[] => {
  return contents.map((c) => {
    return {
      contentTitle: c.title || "",
      BookName: "",
      // URL: c.urls?.[0]?.url || [],
      URL: c.urls?.map((url) => url.url) || [],
      Memo: "",
      Tag: "",
      id: c.id || 0,
    };
  });
};
