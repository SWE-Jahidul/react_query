import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHerosData";

export const RQSuperHerosPage = () => {
  const onSuccess = (data) => {
    console.log("perfrom side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perfrom side effect after encounting error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

 
  console.log({ isLoading, isFetching });

  if (isLoading) {
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
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}> {hero.name}</Link>
          </div>
        );
      })}

      {/* {data.map((heroName) => {
        return <div key={heroName}> {heroName}</div>;
      })} */}
    </>
  );
};
