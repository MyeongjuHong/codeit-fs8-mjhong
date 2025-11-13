// 블로그 포스트 Post 타입 (type alias)
export type Post = {
  id: number;
  authorId: number;
  title: string;
  content: string;

};

// API 에러 타입 (type alias)
export type Error<T> = {
  success: boolean;
  data: T;
  error?: boolean;
};
