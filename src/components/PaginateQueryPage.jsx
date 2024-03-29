import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColor = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data , isFetching} = useQuery(
    ["colors", pageNumber],
    () => fetchColor(pageNumber),
    {
        keepPreviousData:true,
    }
  );

  if (isLoading) {
    return <h2> loading ...</h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>; 
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id} . {color.label}
              </h2>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 3}
        >
          Next page
        </button>


      </div>
      {
        isFetching && 'Loading......' 
      }
    </>
  );
};
