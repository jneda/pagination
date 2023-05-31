import { useState } from "react";

export default function usePagination(postsCount) {
  const [limit, setLimit] = useState(40);
  const [page, setPage] = useState(1);

  let lastPage = Math.ceil(postsCount / limit);

  function nextPage() {
    const nextPage = page + 1;
    setPage(Math.min(lastPage, nextPage));
  }

  function previousPage() {
    const previousPage = page - 1;
    setPage(Math.max(1, previousPage));
  }

  function changeLimit(e) {
    const newLimit = parseInt(e.target.value);
    lastPage = Math.ceil(postsCount / newLimit);
    const newPage = Math.floor(((page - 1) * limit) / newLimit) + 1;
    setLimit(newLimit);
    setPage(newPage);
  }

  return {
    limit,
    setLimit,
    page,
    setPage,
    nextPage,
    previousPage,
    changeLimit,
    lastPage,
  };
}
