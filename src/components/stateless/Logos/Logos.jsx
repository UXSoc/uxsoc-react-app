import React from 'react';

import shield from '../../../resources/img/work-imgs/logo.svg'
import tugon from '../../../resources/img/work-imgs/tugon-logo.svg'
import lions from '../../../resources/img/work-imgs/LIONS-Logo.svg'
import uxph from '../../../resources/img/work-imgs/uxph.svg'

import './style.css'

const Logos = () => {
  return (
    <div className="Logos">
      <div className="logo-container">
        <div className="logo shield">
          <img src={shield} alt="shield"/>
        </div>
        <div className="logo tugon">
          <img src={tugon} alt="tugon"/>
        </div>
        <div className="logo lions">
          <img src={lions} alt="lions"/>
        </div>
        <div className="logo uxph">
          <img src={uxph} alt="uxph"/>
        </div>
      </div>
    </div>
  )
}

export default Logos;