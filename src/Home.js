import React,{useState,useEffect, useRef, useMemo} from "react";
import Navbar from "./Navbar";
import { Button } from 'primereact/button';
import Cars from "./Cars";
import { Menubar } from 'primereact/menubar';
import Footer from "./Footer";
// import heroimg1 from './assets/1.jpeg'
// import heroimg1 from './assets/1.jpeg'
const images=[
    {
        id:0,
        img:"/images/1.jpeg",
        label:"Model 3",
        title:"Schedule a Test Drive"
    },
    {
        id:1,
        img:"/images/2.jpeg",
        label:"Model Y",
        title:"Schedule a Test Drive"
    },
    {
        id:2,
        img:"/images/1.jpeg",
        label:"Model S",
        title:"Schedule a Test Drive"
    },
    {
        id:3,
        img:"/images/4.jpeg",
        label:"Model X",
        title:"Schedule a Test Drive"
    },
    {
        id:4,
        img:"/images/5.jpeg",
        label:"Solar Panels",
        title:"Lowest Cost Solar Panels in America"
    },
    {
        id:5,
        img:"/images/6.webp",
        label:"Solar Roof",
        title:"Produce Clean Energy From Your Roof"
    },
    {
        id:6,
        img:"/images/7.jpeg",
        label:"Accessories"
    },
]
const items = [
    {
        label: 'Model S'
    },
    {
        label: 'Model 3',
    },
    {
        label: 'Model X',
    },
    {
        label: 'Model Y',
    },
    {
        label: 'Solar Roof',
    },
    {
        label: 'Solar Panels',
    },
  
];

const Home = () => {
  const ref=useRef()
    const [image,setImage]=useState(images)

//  window.addEventListener("scroll",scrollElement)
  return (
    <>
   <div className="main-page">
    <div className="header">
    <Navbar/>
    </div>

    
        {
            image.map((val)=>{
                return  <Cars img={val.img} title={val.label} id={val.id} label={val.title}/>
            })
        }
       
  
  {/* <div className="card px-5 border-bottom-0 fixed"> */}
  <footer className="footer">
                {/* <Menubar model={items} />
                 */}
                 <Footer/>
                
  </footer>
            {/* </div> */}
   </div>
    </>
  )
};

export default Home;
