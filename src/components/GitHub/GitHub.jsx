import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // GitHub()
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/koffi-exe')
  //     .then((res)=>res.json())
  //     .then(data=>{
  //         setData(data)
  //     })
  // },[])
  return (
    <div className="bg-gray-500 text-white text-6xl">
      Follower:{(data.followers)?"": data.followers}
      <img src={data.avatar_url? data.avatar_url:""} />
    </div>
    // <>  
      
    //   {console.log(data)}
    // </>
  );
}

export default GitHub;

export const GitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/koffi-exe");
  return response.json();
};
