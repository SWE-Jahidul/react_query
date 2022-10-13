import { useEffect, useState } from "react";
import axios from "axios";



export const SuperHerosPage = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() =>{
    axios.get('http://localhost:4000/superheros')
  })

  return <div> super hero pages </div>;
};
