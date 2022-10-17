import { useQuery } from "react-query";
import axios from "axios";

const featchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const ParallelQueriesQueriesPage = () => {
  const { data: superHeros } = useQuery("super-heroes", featchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesQueriesPage

   {

JSON.stringify(friends)
}
  </div>;
};
