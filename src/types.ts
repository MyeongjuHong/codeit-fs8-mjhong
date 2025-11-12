// TODO-1: User 타입을 interface로 변경하세요

export type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
};

// TODO-2: DraftPost, PublishedPost, ArchivedPost 타입을 interface로 변경하세요
type DraftPost = {
  status: "draft";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
};
type PublishedPost = {
  status: "published";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  publishedDate: Date;
};
type ArchivedPost = {
  status: "archived";
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  archivedDate: Date;
};
export type Post = { id: number } & (DraftPost | PublishedPost | ArchivedPost);

export type GetPostsFunc = (authorId?: number) => Post[];
export type GetPostByIdFunc = (id: number) => Post | undefined;
export type AddPostFunc = (postData: {
  title: string;
  content: string;
  authorId: number;
  tags: string[];
}) => Post;
export type UpdatePostFunc = (
  id: number,
  updateData: {
    title?: string;
    content?: string;
    authorId?: number;
    tags?: string[];
    publishedDate?: Date;
  },
) => Post | undefined;
export type DeletePostFunc = (id: number) => boolean;

// TODO-3: User 인터페이스를 확장한 Author 인터페이스를 정의하세요
// 추가되는 속성 bio?, posts
