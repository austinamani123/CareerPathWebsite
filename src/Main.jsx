import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <div className="mt-8 ml-8 mr-5 max-w-[1200px]">
          <p className="text-2xl">
            Are you struggling to find your true purpose in life? Well your not alone. Millions of
            people worldwide have no idea what they want to pursue in life. But what are they doing 
            about it? Most people dont really do much and just keep living in the moment. Below is
            an actionable step to take inorder to get closer to discovering your purpose in life.
            The survey you are about to take will help you determine what the best choice for you is.
            But what exactly are these choices? Lets take a look at them below.
          </p>
          <div className="mt-6">
            <h1 className="text-3xl font-bold pb-4">STEM</h1>
              <div className="grid grid-cols-2">
                <p className="text-xl max-w-[550px]">
                  STEM is an abbreviation for Science Technology Engineering and Mathematics.
                  This career path is for those who find joy in solving puzzles and giving
                  solutions to technological problems. Furthermore if you prefer working with
                  machines rather than people then this career path is well suitable for you.
                  The STEM career path offers a dynamic landscape of opportunities across various
                  fields, from cutting-edge research in biotechnology to pioneering advancements
                  in artificial intelligence. With a strong emphasis on critical thinking, creativity, and interdisciplinary
                  collaboration, individuals in STEM careers play a vital role in shaping the future
                  of technology, medicine, sustainability, and beyond.
                  Take the survey below to determine whether this is the choice to make.
                </p>
                <div className="flex items-center">
                  <img src="../assets/STEMImage.jpeg" alt="image of a man looking at a screen" className="w-[600px] h-[400px] rounded-[12px]"/>
                </div>
              </div>
          </div>
          <div className="mt-12">
            <h1 className="text-3xl font-bold pb-6">Literary Arts and Humanities</h1>
              <div className="grid grid-cols-2">
                <div>
                  <img src="../assets/literaryArts.jpeg" alt="image of a pen on a notebook" className="w-[550px] h-[350px] rounded-[12px]"/>
                </div>
                <p className="text-xl max-w-[550px]">
                  A career in the literary arts is a journey of imagination and expression,
                  where words become the canvas for creativity and storytelling. Writers,
                  editors, and literary agents navigate through a realm where ideas flow freely
                  and words hold immense power. From crafting compelling narratives to delving
                  into the depths of human emotions, literary professionals bring stories to life
                  in various forms, including novels, poetry, plays, and screenplays. Their work
                  not only entertains but also challenges perspectives, fosters empathy, and
                  preserves cultures, leaving an indelible mark on society's collective
                  consciousness. Find out whether this is the path for you to take using the survey.
                </p>
              </div>
          </div>
          <div className="mt-12">
            <h1 className="text-3xl font-bold pb-6">Business and Public Relations</h1>
              <div className="grid grid-cols-2">
                <p className="text-xl max-w-[550px]">
                  A career path in business and firms offers a dynamic landscape of opportunities
                  for individuals with a keen eye for strategy and innovation. In this field,
                  professionals navigate diverse sectors, from finance and marketing to operations
                  and management, fostering growth and maximizing efficiency within organizations.
                  With roles ranging from entry-level positions to executive leadership, business
                  careers emphasize adaptability, problem-solving, and leadership skills. Whether
                  in startups, multinational corporations, or entrepreneurial ventures, pursuing a
                  career in business and firms promises a rewarding journey of professional
                  development and impact in the global marketplace. Take the survey to make a choice 
                  on this career path
                </p>
                <div>
                  <img src="../assets/businessImage.jpeg" alt="An image of members of a company at a meeting" className="w-[600px] h-[400px] rounded-[12px]"/>
                </div>  
              </div>
          </div>
          <div className="mt-12">
            <h1 className="text-3xl font-bold pb-4">Design and Aesthetics</h1>
              <div className="grid grid-cols-2">
                <div>
                  <img src="../assets/designImage.jpeg" alt="An image of a lady painting" className="w-[550px] h-[350px] rounded-[12px]"/>
                </div>
                <p className="text-xl max-w-[550px]">
                  The design and aesthetics career path is a vibrant realm where creativity meets
                  functionality, shaping the visual landscape of our world. Designers, architects,
                  and artists blend form and function to create captivating experiences, from sleek
                  product designs to awe-inspiring architectural marvels. With an acute eye for
                  detail and a passion for innovation, professionals in this field transform ideas
                  into tangible expressions of beauty and utility. Their work not only influences
                  consumer preferences but also enriches daily life, fostering a harmonious balance
                  between aesthetics and practicality in our ever-evolving society. Discover whether
                  this is the suitable path to take using the survey.
                </p>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-2 ml-8 mt-8 ">
            <p className="max-w-[550px] text-xl">
                Now that you've read about the choices available, its time to take the quiz to
                determine what the appropriate career path for you is.
            </p>
            <div className="flex justify-center mt-2"> 
                <button className="bg-[#32CD32] rounded-md w-40 h-[52px]">
                    <Link to="/questionnaire">Take Quiz</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Main