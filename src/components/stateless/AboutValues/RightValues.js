import React from 'react';
import styled from 'styled-components';

const RightValues = props => {

  const ValueSection = styled.div`
    display: flex;
    flex-direction: row-reverse;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  `

  const Values = styled.div`
    margin: auto;
  `

  const ValueTitle = styled.h3`
    margin-left: 120px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 24px;
    color: #101010;

    @media (max-width: 1024px) {
      margin-left: 90px;
    }

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  `

  const ValueDetails = styled.p`
    width: 75%;
    margin-left: 120px;
    font-family: Proxima Nova;
    line-height: 30px;
    font-size: 18px;
    color: #101010;

    @media (max-width: 1024px) {
      margin-left: 90px;
    }

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  `

  return(
    <ValueSection>
      <Values>
        <ValueTitle>{props.title}</ValueTitle>
        <ValueDetails>{props.details}</ValueDetails>
      </Values>

      <img src={props.img} alt="Core Value Image"/>
    </ValueSection>
  );
}

export default RightValues;
