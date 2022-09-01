import React from "react";

function Header() {
  return (
    <div className="text-white ">
        <div className="sm:flex justify-between">
            <div className="text-yellow-400 font-bold text-[24px]">Taskoo</div>
            <div className="sm:flex gap-5 sm:block hidden">
                <div>Taskoo</div>
                <div>Taskoo</div>
                <div>Taskoo</div>
                <div>Taskoo</div>
            </div>
            <div className="flex gap-5">
              <div className="text-yellow-400">Log in</div>
              <div className="bg-yellow-400 text-black font-bold rounded-lg p-1">SignUp</div>
            </div>
        </div>
    </div>
  );
}

export default Header;
