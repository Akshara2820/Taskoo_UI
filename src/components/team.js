import React from "react";
import {RiTeamLine} from 'react-icons/ri'

function Team() {
  return (
    <div className="text-white mt-10">
      <div className="sm:flex justify-between">
        
        <div>
          <div className="text-[45px] font-bold">
            Organize Your <br/>Task More Easily<br/> With US
          </div>
          <div>
            Lorem ipsum is placeholder text commonly used <br/>in the graphic, print,
            and publishing industries for
          </div>
          <div className="flex gap-5 mt-5">
            <div className="bg-yellow-400 text-black font-bold rounded-lg p-1">
              Get Started
            </div>
            <div className="text-yellow-400">How it Works?</div>
          </div>
        </div>
        
        <div className="sm:flex gap-5  sm:mt-0 mt-12">
          <div>
            <div className="bg-gray-900 rounded p-5">
              <div className="font-bold text-[20px]">Task Progress</div>
              <div className="mt-1">Recent all kind of running task</div>
              
              <div className="flex gap-5 justify-between mt-3">
                <div>Web UI Design</div>
                <div>5/10</div>
              </div>
              <div><input type='range' value={50}/></div>


              <div className="flex gap-5 justify-between">
                <div>Web UI Design</div>
                <div>8/10</div>
              </div>
              <div><input type='range' value={80}/></div>


              <div className="flex gap-5 justify-between">
                <div>Web UI Design</div>
                <div>7/10</div>
              </div>
              <div><input type='range' value={70}/></div>
            </div>
            
            <div className="bg-gray-900 rounded p-5 mt-4">
              <div className="font-bold">Task Incompleted Task</div>
              <div className="font-bold">18</div>
              <div className="flex justify-between gap-5">
                <div>Task Count</div>
                <div className="bg-orange-400 rounded p-1">1 filter</div>
              </div>
            </div>

          </div>
          <div>
            <div className="bg-gray-900 rounded p-5 sm:mt-0 mt-5 ">
              <div className="flex justify-between gap-5">
                <div className="text-[20px]"><RiTeamLine/></div>
                <div className="font-bold text-[20px] ">Our team</div>
              </div>
              <div className="mt-1">Team Member</div>
              <div className="flex mt-1"> 
                <div><img className="rounded-full" src="https://educal-course.vercel.app/cource_clip.jpg" alt="loading"/></div>
                <div><img className="rounded-full" src="https://educal-course.vercel.app/cource_clip.jpg" alt="loading"/></div>
                <div className="bg-gray-600 rounded-full p-1 px-2">+5</div>
                
              </div>
            </div> 
            <div className="bg-gray-900 rounded p-5 mt-5">
              <div>Our Best Performer</div>
              <div className="flex sm:justify-between justify-center gap-4 mt-2">
                <div className="bg-blue-600 rounded-full  h-16 mt-16 p-2 text-blue-600">1</div>
                <div className="bg-yellow-400 rounded-full h-32 p-2 text-yellow-400">1</div>
                <div className="bg-orange-400 rounded-full h-24 mt-8 p-2 text-orange-400">1</div>
              </div>
              <div className="flex sm:justify-between justify-center gap-2 mt-1">
                <div><img className="rounded-full" src="https://educal-course.vercel.app/cource_clip.jpg" alt="loading"/></div>
                <div><img className="rounded-full" src="https://educal-course.vercel.app/cource_clip.jpg" alt="loading"/></div>
                <div><img className="rounded-full" src="https://educal-course.vercel.app/cource_clip.jpg" alt="loading"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
