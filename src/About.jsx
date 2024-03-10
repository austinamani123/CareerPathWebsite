import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
        <div className="flex flex-col justify-center mt-24">

            <p className="flex justify-center text-2xl mt-6 w-[80%] ml-28">
            Embark on a journey of self-discovery with our innovative web app! Tailored
            specifically for the youth, our platform hosts a comprehensive questionnaire
            designed to illuminate the path to your ideal career. Through a series of insightful
            questions and personalized feedback, we aim to empower you with the clarity and
            confidence needed to pursue a fulfilling professional journey. Join us today and
            unlock the door to a future brimming with possibilities!
            </p>

            <p className="flex justify-center text-2xl mt-6 w-[80%] ml-28">
            In this current world many youths are faced with the dire question,
            “What career should they choose?” This is where we come in, our survey
            will guide the youth towards the right career path based off of personality,
            goals and etc. We get our info based on the survey presented to the viewer.
            We’ve observed thus far that many of the youths have flocked towards more
            technological based careers. In conclusion, we believe that our website will
            help the government towards understanding career fields to invest resources in.  
            </p>

        </div>
    </>
  )
}

export default About