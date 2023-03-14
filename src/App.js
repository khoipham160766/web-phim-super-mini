import React, { Fragment } from "react"
import "./App.css"
import Navbar from "./components/nav/nav"
import Footer from "./components/footer/footer"
import { Outlet } from "react-router-dom"

const App = () =>{
    return(
      <Fragment>
          <div className="body">
              <Navbar />
              <div className="container">
                  <Outlet />
              </div>
              <Footer />
          </div>
      </Fragment>
    )
}

export default App