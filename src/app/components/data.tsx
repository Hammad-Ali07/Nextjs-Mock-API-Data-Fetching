import React from 'react'

const Data =  ({info}:{info:Data}) => {



  return (
    <div>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={info.image}
            alt="blog"
          />
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             {info.name}
            </h1>
            <p className="leading-relaxed mb-3">
              {info.discription}
            </p>
            
          </div>
        </div>
      </div>
    </div>
</section>


        
        

    </div>
  )
}

export default Data