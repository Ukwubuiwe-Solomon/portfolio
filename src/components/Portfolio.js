import React from 'react'
import meals from '../assets/portfolio/meals.png'
import Youtube_clone from '../assets/portfolio/Youtube_clone.png'
import navbar from '../assets/portfolio/navbar.jpg'
import movie from '../assets/portfolio/movie.png'
import grocery_app from '../assets/portfolio/grocery_app.png'
import booking1 from '../assets/portfolio/booking1.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:meals,
            link:"https://meals-site.onrender.com/",
            code:"https://github.com/Ukwubuiwe-Solomon/Meal-App-for-a-Restuarant/tree/master/src/component"

        },
        {
            id:2,
            src:movie,
            link:"https://movieland-tnzx.onrender.com/",
            code:"https://github.com/Ukwubuiwe-Solomon/MovieLand/tree/master/src"
        },
        {
            id:3,
            src:grocery_app,
            link:"https://grocery-bud-9sor.onrender.com/",
            code:"https://github.com/Ukwubuiwe-Solomon/GroceryBud/tree/master/src/component"
        },
        {
            id:4,
            src:booking1,
            link:"https://booking-app-a018.onrender.com",
            code:"https://github.com/Ukwubuiwe-Solomon/Order-app"
        },
        {
            id:5,
            src:Youtube_clone,
            link:"https://ukwubuiwe-solomon.github.io/Youtube-clone-app-html-css/",
            code:"https://github.com/Ukwubuiwe-Solomon/Youtube-clone-app-html-css"
            
        },
        {
            id:6,
            src:navbar,
            link:"",
            code:""
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-16'>
        <div className='max-w-screen-lg mx-auto p-4 w-full h-full flex flex-col justify-center py-16'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline text-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>Check out some of my works right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src, link, code})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='name' className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center items-center'>

                        <a href={link} target='_blank' rel="noreferrer" className='w-1/2 md:px-6 py-3 md:m-4 duration-200 hover:scale-105'>Demo</a>

                        <a href={code} target='_blank' rel="noreferrer" className='w-1/2 md:px-6 py-3 md:m-4 duration-200 hover:scale-105'>Code</a>
                        
                        
                    </div>
                    
                    
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio