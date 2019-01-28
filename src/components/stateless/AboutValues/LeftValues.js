import React from 'react';
import styled from 'styled-components';

const LeftValues = props => {

  const ValueSection = styled.div`
    display: flex;
    flex-direction: row;

    img {
      margin-left: 30px;
    }

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      text-align: center;

      img {
        margin: 0 !important;
      }
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
      <img src={props.img} alt="Core Value"/>
    </ValueSection>
  );
}

export default LeftValues;
