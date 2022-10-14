import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros11");
};
export const RQSuperHerosPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeros
  );

  if (isLoading) {
    return <h2> loading...</h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <h2>RQSuperHeros Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
