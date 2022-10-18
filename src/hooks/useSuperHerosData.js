import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from '../utils/axios-utils'
const fetchSuperHeros = () => {
  // return axios.get("http://localhost:4000/superheros");

  return request({ url : '/superheros'})

};

const addSuperHero = (hero) => {
  //return axios.post("http://localhost:4000/superheros", hero);
return request({ url : '/superheros', method:'post', data:hero})


};
export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeros, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('super-heroes')

    //   queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data : [...oldQueryData.data, data.data],

    //     };
    //   });
    // },

    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");

      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data.length + 1, ...newHero },
          ],
        };
      });
      return {
        previousHeroData,
      };
    },
    onError: (_error , _hero , context ) => {
      previousHeroData.setQueryData('super-heroes', context.previousHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes')
    },
  });
};
