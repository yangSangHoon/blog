import { ReactElement } from 'react';
import React from 'react';
import styled from 'styled-components';

const ItemStyle = styled.div`
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
  title: string | ReactElement;
  content: string | ReactElement;
}

function Item({ title, content }: Props): ReactElement {
  return (
    <ItemStyle>
      <h2>{title}</h2>
      <div>{content}</div>
    </ItemStyle>
  );
}

export default Item;
