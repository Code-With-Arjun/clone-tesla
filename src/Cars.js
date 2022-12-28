import React,{useEffect,useRef,useState} from "react";

const Cars = (props) => {

    // console.log(isIntersection)
    return (
        <>
            <div className={`image-container ${props.title==="Accessories"?"last-section":"null"}`} >
            <div className="text">
            <h3>{props.title}</h3>
                    <a href="" className="text-dark text-decoration-none">{props.label}</a>
              </div>
                {/* <div className="image-section"> */}
                    <img src={props.img} alt={props.title} className="img-imgx" />
                    <div className="button-container button">
                    <button className="button-tesla btn-none">Buy Now</button>
                    <button className="button-tesla button-tesla2 btn-none">Custom Order</button>
                    <button className="button-tesla button-tesla3 btn-all-none">Shop Now</button>
                    </div>
                {/* </div>
                <div className="mx-div">
                <div className="heading hz-center">
                    <h3>{props.title}</h3>
                    <a href="" className="text-dark">Schedule a Test Drive</a>
                </div>
                <div className="button hz-center flex-row">
                    <button className="button-tesla">Buy Now</button>
                    <button className="button-tesla button-tesla2">Custom Order</button>
                </div> */}
                {/* </div> */}
      
            </div>

        </>
    )
};

export default Cars;
