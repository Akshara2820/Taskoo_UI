import React from "react";

import Team from "./team";
import Partners from "./partners";
import ChooseUs from "./chooseUs";
import Header from "./header";


function Layout() {
  return (
    <div className="max-w-7xl m-auto p-5">
    <Header/>
      <Team />
      <Partners />
      <ChooseUs />
    
    </div>
  );
}

export default Layout;
