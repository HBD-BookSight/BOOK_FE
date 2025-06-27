import { PublisherDto } from "@/types/dto";
import { FormattedPublisher } from "@/types/format";

export const formatPublisherData = (
  publishers: PublisherDto[]
): FormattedPublisher[] => {
  return publishers.map((p) => {
    return {
      PublisherName: p.name,
      InstagramID: "",
      LogoLink: p.logo || "",
      URL: p.urls?.[0]?.url || "",
      URLType: p.urls?.[0]?.type || "",
      BookISBN: "",
      Memo: p.description || "",
      Tag: "",
    };
  });
};
