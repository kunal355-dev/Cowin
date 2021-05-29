import React from 'react';
//import { Image } from '@themesberg/react-bootstrap';
import * as animationData from './54949-vaccine.json'
import Lottie from 'react-lottie';


const Preloader = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
  );
};



export default Preloader;