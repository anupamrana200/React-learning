import React from 'react'

// here the btnText = "xyz" refers to the default value, if anyone not pass the value then it reflects.
function Card({username, btnText = "xyz"}){
  return(
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-4">
          <a href="#">
              <img className="rounded-t-lg" src="https://images.pexels.com/photos/29914981/pexels-photo-29914981.jpeg" alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg">
                  {btnText}
              </a>
          </div>
      </div>
  )
}

export default Card;