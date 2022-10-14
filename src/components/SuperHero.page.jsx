import { useEffect, useState } from "react";
import axios from "axios";

export const SuperHerosPage = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/superheros").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error =>{
      setError(error.message)
      setIsLoading(false)
    });
  }, []);

  if (isloading) {
    return <h2> Loading... </h2>;
  }


  if(error) {
    return <h2> {error} </h2>
  }
  return (
    <div>
      {" "}
      <h1> super hero pages </h1>
      {data.map((hero) => {
        return <div key={hero.name}> {hero.name} </div>;
      })}
    </div>
  );
};
