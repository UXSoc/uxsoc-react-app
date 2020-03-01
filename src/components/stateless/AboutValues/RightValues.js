import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

const RightValues = props => {

  const ValueSection = styled.div`
    display: flex;
    flex-direction: row-reverse;

    img {
      margin-right: 30px;
    }

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      text-align: left;

      img {
        margin: 15px auto !important;
      }
    }

    @media (max-width: 610px) {
      img {
        width: 320px !important;
        height: 320px;
      }
    }

    @media (max-width: 415px) {
      img {
        width: 240px !important;
        height: 240px;
      }
    }
  `

  const Values = styled.div`
    margin: auto;
  `

  const ValueTitle = styled.h3`
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 24px;
    color: #101010;
  `

  const ValueDetails = styled.p`
    font-family: Proxima Nova;
    line-height: 30px;
    font-size: 18px;
    color: #101010;
  `

  return(
    <ValueSection>
      <Values>
        <ValueTitle>{props.title}</ValueTitle>
        <ValueDetails>{props.details}</ValueDetails>
      </Values>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="500">
        <img src={props.img} alt="Core Value"/>
      </ScrollAnimation>
    </ValueSection>
  );
}

export default RightValues;
