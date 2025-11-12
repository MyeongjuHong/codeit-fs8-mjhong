import { Post } from "./types";

export function printPostStatus(post: Post) {
  console.log("Post ID:", post.id);
  console.log("Post Title:", post.title);

  switch (post.status) {
    case "draft":
      console.log("Status: Draft post");
      break;
    case "published":
      console.log("Status: Published post");
      break;
    case "archived":
      console.log("Status: Archived post");
      break;
    default:
      console.log("Status: Unknown post");
      break;
  }
}

// TODO-2: 아래 3가지 사용자 정의 타입 가드 함수를 완성하세요
function isPublishedPost(post: Post) {
  // post 상태가 published 인지 확인하는 타입 가드 함수 작성하세요
}

function isDraftPost(post: Post) {
  // post 상태가 draft 인지 확인하는 타입 가드 함수 작성하세요
}

function isArchivedPost(post: Post) {
  // post 상태가 archived 인지 확인하는 타입 가드 함수 작성하세요
}
