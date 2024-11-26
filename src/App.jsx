import react from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page from "./components/Paste";

import ViewPaste from "./components/ViewPaste";

import './App.css'


const router = createBrowserRouter(
  [
    {path:'/',
    element:
    <div>
      <Navbar />
      <Home />
    </div>},

  {
    path:"/pastes",
    element:
    <div>
      <Navbar />
      <Page />
    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
      <Navbar />
      <ViewPaste />
    </div>
  },
] 
      );

function App() {
 

  return (
    <>
     <RouterProvider router = {router} />
    </>
  )
}

export default App
