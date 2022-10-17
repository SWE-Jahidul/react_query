import { useQuery, useQueryClient } from "react-query";

import axios from "axios";
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http:localhost:4000/superheros/${heroId}`);
};

export const useSuperHeroeData = (heroId) => {
  const queryClient = useQueryClient();
  console.log("--------------" , heroId);
  return useQuery(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heros")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
    
    console.log('---------------', hero);
    
      },
  });
};
