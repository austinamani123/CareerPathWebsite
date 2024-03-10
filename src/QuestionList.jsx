import React from 'react'

const QuestionList = ({handleChangeOne ,handleChangeTwo, handleChangeThree, handleChangeFour}) => {
  return (
    <div>
        <div className="ml-12 mt-28 w-[1200px] rounded-md p-4">
        <div className="py-8 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">What subjects do you enjoy the most in school?</p>
            <div className="flex pt-2 justify-between w-[90%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q1" ></input> <p className="ml-2 ">Math and Science</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q1"></input> <p className="ml-2">Literature and Language Arts</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q1"></input> <p className="ml-2"> History and Social Studies</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q1"></input> <p className="ml-2">Art and Music</p>
                </div>
            </div>
        </div> 
        <div className="py-8 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">Which activities or hobbies do you find most fulfilling in your free time?</p>
            <div className="flex pt-2 space-x-10 w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q2"></input> <p className="ml-2 ">Solving puzzles or coding</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q2"></input> <p className="ml-2">Writing stories or poetry</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q2"></input> <p className="ml-2">Debating or discussing current events</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q2"></input> <p className="ml-2">Creating artwork or playing instruments</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">When faced with a problem, what is your preferred approach to finding a solution?</p>
            <div className="flex pt-2 space-x-1 w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q3"></input> <p className="ml-2 ">Analyzing data and conducting experiments</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q3"></input> <p className="ml-2">Brainstorming ideas and writing creatively</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q3"></input> <p className="ml-2">Researching and discussing with others</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q3"></input> <p className="ml-2">Expressing through visual or performance mediums</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">Which career-related values do you prioritize the most?</p>
            <div className="flex pt-2 space-x-4 w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q4"></input> <p className="ml-2 ">Innovation and technological advancement</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q4"></input> <p className="ml-2">Creativity and self-expression</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q4"></input> <p className="ml-2">Social impact and community engagement</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q4"></input> <p className="ml-2">Aesthetic appeal and design aesthetics</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">What type of work environment do you envision yourself thriving in?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q5"></input> <p className="ml-2 ">High-tech startup or research laboratory</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q5"></input> <p className="ml-2">Publishing house or media production company</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q5"></input> <p className="ml-2">Corporate office or public relations firm </p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q5"></input> <p className="ml-2">Design studio or performing arts center</p>
                </div>
            </div>
        </div> 
        <div className="py-8 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">Which role in a team setting do you typically find yourself gravitating towards?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q6"></input> <p className="ml-2 ">The problem solver or technical expert</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q6"></input> <p className="ml-2">The storyteller or communicator</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q6"></input> <p className="ml-2">The leader or organizer</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q6"></input> <p className="ml-2">The visionary or creative thinker</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">Which aspect of a potential career excites you the most?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q7"></input> <p className="ml-2 ">Making groundbreaking discoveries or advancements</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q7"></input> <p className="ml-2">Crafting narratives or conveying messages effectively</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q7"></input> <p className="ml-2">Initiating positive change and helping others</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q7"></input> <p className="ml-2">Designing beautiful products or experiences</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">What are your long-term goals in terms of personal and professional growth?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q8"></input> <p className="ml-2 ">Becoming an expert in a specific field</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q8"></input> <p className="ml-2">Publishing a book or producing creative works</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q8"></input> <p className="ml-2">Climbing the corporate ladder or starting a business</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q8"></input> <p className="ml-2">Establishing a unique artistic or design style</p>
                </div>
            </div>
        </div> 
        <div className="py-8 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">Which industries or fields do you feel drawn to the most?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q9"></input> <p className="ml-2 ">Technology and engineering</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q9"></input> <p className="ml-2">Literature and media</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q9"></input> <p className="ml-2">Business and marketing</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q9"></input> <p className="ml-2">Fashion and architecture</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">How do you prefer to learn new skills or acquire knowledge?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q10"></input> <p className="ml-2 ">Hands-on experimentation and problem-solving</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q10"></input> <p className="ml-2">Reading books and analyzing literature</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q10"></input> <p className="ml-2">Participating in discussions and group projects</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q10"></input> <p className="ml-2">Engaging in creative expression and artistic endeavors</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">What do you consider your greatest strengths?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q11"></input> <p className="ml-2 ">Logical thinking and analytical skills</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q11"></input> <p className="ml-2">Imagination and storytelling abilities </p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q11"></input> <p className="ml-2">Empathy and communication skills</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q11"></input> <p className="ml-2">Visual perception and artistic talents</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">What role do you see technology playing in your future career?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q12"></input> <p className="ml-2 ">A fundamental tool for problem-solving</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q12"></input> <p className="ml-2">A platform for creative expression</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q12"></input> <p className="ml-2">A means to connect and impact communities</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q12"></input> <p className="ml-2">A medium for innovative design and aesthetics</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">How do you handle setbacks or failures?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q13"></input> <p className="ml-2 ">Analyze the situation and find alternative solutions</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q13"></input> <p className="ml-2">Use setbacks as inspiration for new ideas</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q13"></input> <p className="ml-2">Seek support from others and learn from the experience</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q13"></input> <p className="ml-2">Embrace failure as part of the creative process</p>
                </div>
            </div>
        </div> 
        <div className="py-8 px-2 bg-gray-100 rounded-md">
            <p className="pb-2 text-2xl">Which historical figure or contemporary personality inspires you the most?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q14"></input> <p className="ml-2 ">Albert Einstein or Marie Curie</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q14"></input> <p className="ml-2">Shakespeare or J.K. Rowling</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q14"></input> <p className="ml-2">Steve Jobs or Oprah Winfrey</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q14"></input> <p className="ml-2">Leonardo da Vinci or Frida Kahlo</p>
                </div>
            </div>
        </div> 
        <div className="py-6 px-2 bg-gray-200 rounded-md">
            <p className="pb-2 text-2xl">What impact do you hope to make through your future career?</p>
            <div className="flex pt-2 justify-between w-[100%] items-center">
                <div className="flex">
                    <input type="radio" onChange={handleChangeOne} className="mt-1" name="q15"></input> <p className="ml-2 ">Advancing technology for the betterment of society</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeTwo} className="mt-1" name="q15"></input> <p className="ml-2">Inspiring others through storytelling and art</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeThree} className="mt-1" name="q15"></input> <p className="ml-2">Fostering positive change and equality</p>
                </div>
                <div className="flex ml-3">
                    <input type="radio" onChange={handleChangeFour} className="mt-1" name="q15"></input> <p className="ml-2">Enriching lives through creativity and aesthetics</p>
                </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default QuestionList