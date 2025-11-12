export type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
};

// TODO-1: status 속성을 판별자로 판별 유니온 타입을 사용해서 Post 타입을 구체화하세요
// 아래는 판별 유니온 타입을 활용한 Post 타입 구체화 예시입니다.
// 각 타입별로 status 값을 판별자로 사용하며, 기존 Post 속성 중 id를 제외한 나머지를 확장합니다.

// type DraftPost = { status: 'draft', ...기존 Post 속성 (id 제외) };
// type PublishedPost = { status: 'published', publishedDate: Date, ...기존 Post 속성(id 제외) };
// type ArchivedPost = { status: 'archived', archivedDate: Date, ...기존 Post 속성(id 제외) };

type DraftPost = {
  status: "draft";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
};

type PublishedPost = {
  status: "published";
  publishedDate: Date;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
};

type ArchivedPost = {
  status: "archived";
  archivedDate: Date;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
};

export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

// export type Post = {
//   id: number;
//   title: string;
//   content: string;
//   authorId: number;
//   tags: string[];
//   status: "draft" | "published" | "archived";
// };
