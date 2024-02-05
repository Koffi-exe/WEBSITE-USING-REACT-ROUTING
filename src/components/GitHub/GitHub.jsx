import React, { useEffect, useState } from 'react'

export default function GitHub() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/koffi-exe')
        .then((res)=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-500 text-white text-6xl'>
      Follower:{data.followers}
      <img 
         src={data.avatar_url}/>
    </div>
  )
}
