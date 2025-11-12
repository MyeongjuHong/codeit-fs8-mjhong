import { printPostStatus } from "./postUtils";
import { User, Post } from "./types";

const sampleUser: User = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
};

// const samplePosts: Post[] = [
//   {
//     id: 1,
//     title: "Hello World",
//     content: "This is a sample post",
//     authorId: sampleUser.id,
//     tags: ["typescript", "javascript"],
//     status: "published",
//   },
//   {
//     id: 2,
//     title: "Hello World 2",
//     content: "This is a sample post 2",
//     authorId: sampleUser.id,
//     tags: ["typescript", "javascript"],
//     status: "published",
//   },
// ];

// console.log("sampleUser", sampleUser);
// console.log("samplePosts", samplePosts);

const updatedSamplePosts: Post[] = [
  {
    id: 101,
    title: "새로운 기능 아이디어 (초안)",
    content: "사용자 프로필 편집 기능 개선 방안...",
    authorId: sampleUser.id,
    tags: ["feature", "draft", "ui"],
    status: "draft",
  },
  {
    id: 102,
    title: "타입스크립트 유틸리티 타입 활용법",
    content: "Pick, Omit, Partial 등 유용한 유틸리티 타입을 알아봅시다!",
    authorId: sampleUser.id,
    tags: ["typescript", "utility-types", "guide"],
    status: "published",
    publishedDate: new Date(),
  },
  {
    id: 103,
    title: "주간 회의 미팅 요약",
    content: "이번 주 회의에서 다룬 주요 안건 및 결정 사항입니다.",
    authorId: sampleUser.id,
    tags: ["meeting", "summary"],
    status: "published",
    publishedDate: new Date(),
  },
  {
    id: 104,
    title: "지난 분기 업데이트 요약 (보관용)",
    content: "지난 분기의 주요 업데이트를 정리했습니다.",
    authorId: sampleUser.id,
    tags: ["update", "archive"],
    status: "archived",
    archivedDate: new Date(),
  },
];

// TODO-3: printPostStatus 함수를 import 해서 updatedSamplePosts의 각 포스트의 상태를 출력하세요
updatedSamplePosts.map((post) => printPostStatus(post));
updatedSamplePosts.map(printPostStatus);
