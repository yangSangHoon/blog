import { ReactElement } from 'react';
import styled from 'styled-components';
import React from 'react';

const DayStyle = styled.div`
  h2 {
    margin-top: 50px;
    display: block;
    font-size: 30px;
  }

  div {
    position: relative;
    z-index: 1;
    background-size: 300px auto;
    background-repeat: no-repeat;
  }
`;

interface Props {
  date: string;
  text: string | ReactElement;
  img?: string;
  imgWidth?: string;
}

function Day({ date, text, img, imgWidth }: Props): ReactElement {
  return (
    <DayStyle>
      <h2>{date}</h2>
      {img && <img src={img} width={imgWidth ?? 300} />}
      <div>{text}</div>
    </DayStyle>
  );
}

export default Day;
