import React from 'react'
import Data from './components/data'

const page = async() => {
 

const response =  await  fetch('https://677f08c30476123f76a53ed0.mockapi.io/data')

const data = await response.json()

console.log(data)


  return (
    <div>
      {data.map((info:Data)=>(
        <Data info={info} key={info.id} />

      ))}
             

        </div>
  )
}

export default page