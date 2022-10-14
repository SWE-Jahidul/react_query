import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
export const RQSuperHerosPage = () => {


  const onSuccess = (data) =>{
    console.log("perfrom side effect after data fetching",data);
  }



  const onError = (error) =>{
    console.log("perfrom side effect after encounting error",error);
  }
  const { isLoading, data, isError, error,isFetching , refetch} = useQuery(
    "super-heroes",
    fetchSuperHeros,
    {

      onSuccess,
    onError
      // enabled :false
      // refetchInterval:2000,
      // refetchIntervalInBackground:true
    }
  );


  console.log({isLoading, isFetching});

  if (isLoading ) {
    return <h2> loading...</h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <h2>RQSuperHeros Page</h2>


      <button onClick={refetch}> Fetch Heros </button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
 