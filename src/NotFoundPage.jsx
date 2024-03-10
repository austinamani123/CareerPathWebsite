import React from 'react'
import { Link } from 'react-router-dom' 

export default function NotFoundPage(){
    return (
        <div className="flex flex-col justify-center items-center mt-28"> 
            <p className="text-red-500 text-3xl mb-6">404 Not Found</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}