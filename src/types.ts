export type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  isAdmin: boolean;
};

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

// TODO-1: 아래 5가지 블로그 액션 함수타입을 정의하세요
// GetPostsFunc (특정 저자 글 또는 전체 글 가져오기)
// GetPostByIdFunc (ID로 글 하나 가져오기)
// AddPostFunc (새 글 추가 -초기 상태는 draft, ID는 자동 생성 가정. 성공시 Post 반환)
// UpdatePostFunc (글 수정. 성공시 Post 반환, 실패 시 undefined 반환)
// DeletePostFunc (글 삭제. 성공 여부 반환)

export type GetPostsFunc = (authorId?: number) => Post[];
export type GetPostByIdFunc = (id: number) => Post;
export type AddPostFunc = (post: Omit<Post, "id">) => Post;
export type UpdatePostFunc = (
  id: number,
  post: Partial<Post>
) => Post | undefined;
export type DeletePostFunc = (id: number) => boolean;
