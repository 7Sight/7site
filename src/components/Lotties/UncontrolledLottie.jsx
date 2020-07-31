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
      
        <Lottie options={defaultOptions}
              height={'50%'}
              width={'50%'}
              resizeMode="contain"
              autoZise
        />
      
    )
  }
}

export default UncontrolledLottie