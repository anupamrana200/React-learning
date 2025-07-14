import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data, setData] =useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/anupamrana200')
  //   // fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])
  return (
    <div className='text-center text-white bg-gray-600 text-3xl m-4 p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github
export const gitHubInfoLoader = async () => {
  const responce = await fetch('https://api.github.com/users/anupamrana200')
  return responce.json();
}