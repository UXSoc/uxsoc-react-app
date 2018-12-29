import React from 'react';
import styled from 'styled-components';

const LeftValues = props => {

  const ValueSection = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  `

  const Values = styled.div`
    margin: auto;
  `

  const ValueTitle = styled.h3`
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 24px;
    color: #101010;

    @media (max-width: 767px) {
      text-align: center;
    }
  `

  const ValueDetails = styled.p`
    width: 75%;
    font-family: Proxima Nova;
    line-height: 30px;
    font-size: 18px;
    color: #101010;

    @media (max-width: 767px) {
      text-align: center;
      margin: auto;
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

export default LeftValues;
