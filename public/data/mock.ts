import { AuthorDto } from "@/types/dto";

export const mockAuthors: AuthorDto[] = [
  {
    id: 1,
    name: "김초보",
    description: "프론트엔드 개발자를 위한 입문서 저자",
    profile: "https://example.com/profile1.jpg",
    bookList: [
      {
        isbn: "978-1234567890",
        title: "프론트엔드 입문",
        summary: "프론트엔드 기초를 다루는 책입니다.",
        publishedDate: "2023-01-10T00:00:00Z",
        titleImage: "https://example.com/book1.jpg",
        authorList: [
          { id: 1, name: "김초보" }
        ],
        translator: "홍길동",
        price: 18000,
        publisher: { id: 1, name: "한빛출판사" }
      }
    ]
  },
  {
    id: 2,
    name: "박고수",
    description: "리액트와 타입스크립트의 모든 것",
    profile: "https://example.com/profile2.jpg",
    bookList: [
      {
        isbn: "978-0987654321",
        title: "실전 리액트",
        summary: "리액트를 실무에서 어떻게 쓰는지를 다룬 책",
        publishedDate: "2024-05-01T00:00:00Z",
        titleImage: "https://example.com/book2.jpg",
        authorList: [
          { id: 2, name: "박고수" }
        ],
        translator: undefined,
        price: 24000,
        publisher: { id: 2, name: "위키북스" }
      },
      {
        isbn: "978-1122334455",
        title: "타입스크립트 마스터",
        summary: "TS의 개념부터 활용까지",
        publishedDate: "2022-09-15T00:00:00Z",
        titleImage: "https://example.com/book3.jpg",
        authorList: [
          { id: 2, name: "박고수" }
        ],
        translator: undefined,
        price: 22000,
        publisher: { id: 2, name: "위키북스" }
      }
    ]
  }
];