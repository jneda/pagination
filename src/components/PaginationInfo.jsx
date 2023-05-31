export default function PaginationInfo({ page, lastPage, limit, postsCount }) {
  const firstPost = (page - 1) * limit + 1;
  const lastPost = Math.min(postsCount, firstPost + limit - 1);

  return (
    <p>
      Page {page} of {lastPage}, showing posts {firstPost} to {lastPost} of{" "}
      {postsCount}
    </p>
  );
}
