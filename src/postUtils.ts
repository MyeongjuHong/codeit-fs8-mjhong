import { Post } from "./types";

export function printPostStatus(post: Post) {
  console.log("Post ID:", post.id);
  console.log("Post Title:", post.title);

  // TODO-2: switch/case 사용해서 post.status 값에 따라 post 상태를 출력하세요
  // ex) "draft" -> "Status: Draft post"
  // 정해진 status 에 해당되지 않는 경우, "Status: Unknown post" 로 출력하세요
}
