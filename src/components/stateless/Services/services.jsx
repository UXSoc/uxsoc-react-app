import React, { Component } from 'react';
import './style.css'
import productivityGirl from '../../../resources/img/work-imgs/productivity-2.svg'

const Services = () => {
return (
    <div className = "mainServicesComp">
                <div className= "services">
                    <h4>SERVICES</h4>
                    <h2>What we can do for you</h2>

                    <div className = "row1">
                        <img src = {productivityGirl} className = "firstRow"></img>
                        <div className = "firstRowText">
                        <h3 className = "webDesign">Web Design and Development</h3>
                        <div className = "p1">We help you create effective products on the web, 
                        from aesthetics, flow to usability. We believe that we can 
                        create a competitive advantage to your organization 
                        through human-centered design. </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className = "row2">
                    <h3 className = "prodRev">Product Review and Recommendation</h3>
                    <div className = "p2">Have a product to improve? Tell us about it. We help you 
                    identify which areas you can refine on and tell you the steps 
                    to take in order to achieve a better product for 
                    your customers.</div>
                    </div>
                    <img src = {productivityGirl} className = "img2"></img>
                </div>

                <div>
                    <div className = "row3">
                        <img src = {productivityGirl} className = "img3"></img>
                        <div className = "row3text">
                        <h3 className = "designWorkshops">Design Workshops</h3>
                        <div className = "p3">
                        Aside from product creation and redesign, we also hold
                        different kinds of workshops that help you and your
                        organization with your design needs. These workshops
                        are designed to give you more perspective about your 
                        product, brand, or users.
                        </div>
                        </div>
                    </div>

                </div>


            </div>
)

}

 
export default Services;