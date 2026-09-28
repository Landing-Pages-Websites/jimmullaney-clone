import type { BlogPost } from "./posts";
import { jacksonvilleAlimonyLawyerBodyHtml } from "./jacksonville-alimony-lawyer-main-issues-body";

export const jacksonvilleAlimonyLawyerPost: BlogPost = {
  year: "2026",
  month: "09",
  slug: "jacksonville-alimony-lawyer-main-issues",
  title: "Jacksonville Alimony Lawyer: Main Issues to Know",
  publishedDate: "2026-09-28",
  date: "September 28, 2026",
  excerpt: "Learn how Florida alimony decisions address need, ability to pay, duration, marriage length, and mediation options in Jacksonville divorce cases.",
  image: "https://zleague-public-prod.s3.us-east-2.amazonaws.com/article_images/8426fda1-fea5-46d1-b5fa-ffacfc441a6d/jacksonville-alimony-lawyer-main-issues-to-know-748320.webp",
  imageAlt: "Jacksonville family law attorney consulting with a spouse about alimony and divorce finances",
  body: jacksonvilleAlimonyLawyerBodyHtml.split(/(?=<(?:p|h2|h3|ul)>)/),
};
