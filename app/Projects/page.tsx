import React from "react";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="mt-44 border-b-4 border-red-400">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 ">PROJECTS</h2>

                                               {/* 1st Project  */}
        <Image src={"/gym.png"} alt="pic" width={900} height={400}  className="rounded-2xl ml-44"/>
        <div className="p-6 text-center border bg-gradient-to-r from-indigo-500 to-pink-500 mt-5 ml-20 mr-20 rounded-2xl mb-10 active:scale-75 w-56 ">
          <Link href="https://gym-website-custom-css.vercel.app/" target="_blank">
            Gym Website
          </Link>
        </div>


                               {/* 2nd project */}
        
        <Image src={"/pakistanTravel.png"} alt="pic" width={900} height={400}  className="rounded-2xl ml-44"/>
        <div className="p-6 text-center border bg-gradient-to-r from-indigo-500 to-pink-500 mt-5 ml-20 mr-20 rounded-2xl mb-10 active:scale-75 w-56 ">
          <Link href="https://pakistan-travel-places.vercel.app/" target="_blank">
            Pakistan Travel Places
          </Link>
        </div>
                      
                                           {/* 3rd project */}

        <Image src={"/resume.png"} alt="pic" width={900} height={400}  className="rounded-2xl ml-44 "/>
        <div className="p-6 text-center border bg-gradient-to-r from-indigo-500 to-pink-500 mt-5 ml-20  rounded-2xl mb-10 active:scale-75 w-56 ">
          <Link href="https://hackathon-milestone.vercel.app/" target="_blank" >
            Dynamic Resume Builder
          </Link>
        </div>
  


  
    </div>
  );
};

export default Projects;
