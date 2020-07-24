import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../lotties/lf30_editor_4hpwS0.json'


class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={500}
              width={500}
              resizeMode="contain"
              autoZise
        />
      </div>
    )
  }
}

export default UncontrolledLottie