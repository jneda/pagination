export default function PaginationControls({
  limit,
  changeLimit,
  page,
  previousPage,
  nextPage,
  lastPage,
}) {
  const limitOptions = [...Array(10).keys()].map((_, i) => (
    <option key={i}>{(i + 1) * 10}</option>
  ));

  return (
    <div className="pagination-controls">
      <button onClick={previousPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={nextPage} disabled={page === lastPage}>
        Next
      </button>
      <select value={limit} onChange={changeLimit}>
        {limitOptions}
      </select>
    </div>
  );
}
