import { Post } from "./types";

export function printPostStatus(post: Post) {
  switch (post.status) {
    case "draft":
      console.log("Post ID:", post.id);
      // console.log("Post Title:", post.title);
      console.log("Status: Draft post");
      break;
    case "published":
      console.log("Post ID:", post.id);
      // console.log("Post Title:", post.title);
      console.log("Status: Published post");
      break;
    case "archived":
      console.log("Post ID:", post.id);
      // console.log("Post Title:", post.title);
      console.log("Status: Archived post");
      break;
    default:
      console.log("Status: Unknown post");
      break;
  }

  // TODO-2: switch/case 사용해서 post.status 값에 따라 post 상태를 출력하세요
  // ex) "draft" -> "Status: Draft post"
  // 정해진 status 에 해당되지 않는 경우, "Status: Unknown post" 로 출력하세요
}
