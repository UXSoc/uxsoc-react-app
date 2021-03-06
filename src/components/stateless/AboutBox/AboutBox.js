import React from 'react';
import styled from 'styled-components';

const AboutBox = (props) => {

  const AboutBox = styled.div`
    margin: 0 20px;
    width: 430px;
    padding: 16px;

    @media (max-width: 1024px) {
      margin: auto;
    }


    @media (max-width: 460px) {
      width: 80%;
      margin: auto;
    }
  `
  const VisionMission = styled.h4`
    font-family: Proxima Nova, sans-serif;
    line-height: normal;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0.32em;
    color: #B3BCC4;
  `

  const Details = styled.p`
  font-family: Proxima Nova;
  line-height: 30px;
  font-size: 20px;
  color: #101010;

  @media (max-width: 768px) {
    text-align: left;
  }
  `

  return(
    <AboutBox>
      <VisionMission>{props.title}</VisionMission>
      <Details>{props.details}</Details>
    </AboutBox>
  );
}

export default AboutBox;
