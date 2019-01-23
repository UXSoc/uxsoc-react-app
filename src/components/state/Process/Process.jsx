import React, { Component } from 'react';
import productivity1 from '../../../resources/img/work-imgs/productivity-discovery.svg';
import productivity2 from '../../../resources/img/work-imgs/productivity-define.svg';
import productivity3 from '../../../resources/img/work-imgs/productivity-ideate.svg';
import productivity4 from '../../../resources/img/work-imgs/productivity-build.svg';
import productivity5 from '../../../resources/img/work-imgs/productivity-measure.svg';
import arrowRight from '../../../resources/img/work-imgs/arrowRight.svg';
import arrowLeft from '../../../resources/img/work-imgs/arrowLeft.svg';

import './style.css'

class Process extends Component {
  constructor(props) {
    super(props);
    this.toggleDefine = this.toggleDefine.bind(this);
    this.toggleIdeate = this.toggleIdeate.bind(this);
    this.toggleBuild = this.toggleBuild.bind(this);
    this.toggleMeasure = this.toggleMeasure.bind(this);
    this.toggleDiscovery = this.toggleDiscovery.bind(this);
    this.state = {
      discovery: true,
      define: false,
      ideate: false,
      build: false,
      measure: false
    }

  }

  toggleDefine() {
    this.setState({
      define: true,
      discovery: false,
      ideate: false
    })
  }

  toggleIdeate() {
    this.setState({
      ideate: true,
      define: false,
      build: false,
    })
  }

  toggleBuild() {
    this.setState({
      build: true,
      ideate: false,
      measure: false
    })
  }

  toggleMeasure() {
    this.setState({
      measure: true,
      build: false,
      discovery: false
    })
  }

  toggleDiscovery() {
    this.setState({
      discovery: true,
      measure: false,
      define: false,
    })
  }

  render() {
    return (
      <div className="process">
        <div className="headers">
          <p className="section-label">Process</p>
          <h2 className="method-title">The method to our madness</h2>
          {
            this.state.discovery ?
            <div>
              <img src={productivity1} className="processImage" alt="process=1"/>
              <img src={arrowRight} className = "arrowRight" alt="arrow-right" onClick={this.toggleDefine}/>
              <img src={arrowLeft} className = "arrowLeft" alt="arrow-left" onClick={this.toggleMeasure}/>
              <div className="method-block-container">
              <MethodBlock
                subheader="01. Discovery"
                text="This is our research phase. We try to get as much information about
                our client and their needs. We do stakeholder interviews, user surveys,
                competitive analysis, naturalistic observations, affinity mapping
                and brand workshops to understand the user needs and align it with
                the business goals of our clients."/>
              </div>
            </div> : this.state.define ?
            <div>
              <img src={productivity2} className="processImage" alt="process=1"/>
              <img src={arrowRight} className = "arrowRight" alt="arrow-right" onClick={this.toggleIdeate}/>
              <img src={arrowLeft} className = "arrowLeft" alt="arrow-left" onClick={this.toggleDiscovery}/>
              <div className="method-block-container">
              <MethodBlock
                subheader="02. Define"
                text="After the discovery phase, we will be analyzing the resuls from the
                research. We will identify the problems and rank them based on importance.
                We create personas, journey maps, information architecture and user flows
                during this phase."/>
              </div>
            </div> : this.state.ideate ?
            <div>
              <img src={productivity3} className="processImage" alt="process=1"/>
              <img src={arrowRight} className = "arrowRight" alt="arrow-right" onClick={this.toggleBuild}/>
              <img src={arrowLeft} className = "arrowLeft" alt="arrow-left" onClick={this.toggleDefine}/>
              <div className="method-block-container">
              <MethodBlock
                subheader="03. Ideate > Test > Prototype"
                text="In this stage, we will be extracting our creative juices and think
                about possible solutions to the problem/s. We will then text this solution
                out. If it passes user testing, we will then mobe on to prototyping the
                solution, then testing it to more people afain. We do crazy 8s, wireframing,
                and prototyping at this stage. This also covers all aspects of visual,
                interaction and motion design."/>
              </div>
            </div> : this.state.build ?
            <div>
              <img src={productivity4} className="processImage" alt="process=1"/>
              <img src={arrowRight} className = "arrowRight" alt="arrow-right" onClick={this.toggleMeasure}/>
              <img src={arrowLeft} className = "arrowLeft" alt="arrow-left" onClick={this.toggleIdeate}/>
              <div className="method-block-container">
              <MethodBlock
                subheader="04. Build and Deploy"
                text="When we finally settled for a specific solution, we hand it off to our
                developers to build the product. Within one or two months, we will be deploying
                the site. Our developers are adept in HTML, CSS, JavaScript. They also embed
                Google Analytics and other measuring tools for the product."/>
              </div>
            </div> :
            <div>
              <img src={productivity5} className="processImage" alt="process=1"/>
              <img src={arrowRight} className = "arrowRight" alt="arrow-right" onClick={this.toggleDiscovery}/>
              <img src={arrowLeft} className = "arrowLeft" alt="arrow-left" onClick={this.toggleBuild}/>
              <div className="method-block-container">
              <MethodBlock
                subheader="05. Measure"
                text="After releasing the site, we will be measuring the product's performance.
                We will then take these results and try to modify or improve the product if
                necessary."/>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

class MethodBlock extends Component {
  render() {
    const { subheader, text } = this.props;
    return(
      <div className="MethodBlock">
        <h2 className="method-subheader">{subheader}</h2>
        <p className="method-text">{text}</p>
      </div>
    )
  }
}

export default Process;
