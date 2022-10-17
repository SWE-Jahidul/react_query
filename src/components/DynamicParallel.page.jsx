import { useQueries } from "react-query";
import axios from "axios";

const featchSuperHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

export const DynamicParallelPage = ({ heroId }) => {
  const queryResult = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => featchSuperHeros(id),
      };
    })
  );

  console.log({ queryResult });
  return <div>Dynamic Parallel Page</div>;
};
