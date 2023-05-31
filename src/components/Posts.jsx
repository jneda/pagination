import { useEffect, useState } from "react";
import usePagination from "../hooks/usePagination";

import PaginationControls from "./PaginationControls";
import PaginationInfo from "./PaginationInfo";
import PostsList from "./PostsList";

import data from "../db/data.json";

function getPostsSlice(data, page, limit) {
  const start = (page - 1) * limit;
  const end = start + limit;
  return data.slice(start, end);
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const postsCount = data.length;

  let { page, limit, nextPage, previousPage, changeLimit, lastPage } =
    usePagination(postsCount);

  // select relevant posts whenever page or limit change
  useEffect(() => {
    setPosts(() => getPostsSlice(data, page, limit));
  }, [limit, page]);

  const controlProps = {
    limit,
    changeLimit,
    page,
    previousPage,
    nextPage,
    lastPage,
  };

  const infoProps = {
    page,
    lastPage,
    limit,
    postsCount,
  };

  return (
    <>
      <h2>Posts</h2>
      <PaginationControls {...controlProps} />
      <PaginationInfo {...infoProps} />
      <PostsList posts={posts} />
    </>
  );
}
