import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuperHeroesData } from "../hooks/useSuperHerosData";

export const RQSuperHerosPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("perfrom side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perfrom side effect after encounting error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);



  const {mutate : addHero } = useAddSuperHeroData()

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name , alterEgo}
    addHero(hero)
  };

  if (isLoading) {
    return <h2> loading...</h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <h2>RQSuperHeros Page</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}> Add Hero </button>
      </div>

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
