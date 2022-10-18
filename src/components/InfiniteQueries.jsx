import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const featchColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

export const InfinateQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], featchColor, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2> Loading....</h2>;
  }

  if (isError) {
    return <h2> {error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((color) => (
                <h2 key={i}>
                  {" "}
                  {color.id} {color.label}{" "} 
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>

      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
