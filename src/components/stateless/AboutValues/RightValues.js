import React from 'react';
import styled from 'styled-components';

const RightValues = props => {

  const ValueSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
  `

  const ValueDetails = styled.p`
    width: 80%;
    margin-left: 120px;
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

      <img src={props.img} alt="Core Value Image"/>
    </ValueSection>
  );
}

export default RightValues;
