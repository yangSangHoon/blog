import { ReactElement } from 'react';
import styled from 'styled-components';
import Item from './Item';
import React from 'react';
const WritingStyle = styled.div`
  padding: 20px;
`;

function Writing(): ReactElement {
  return (
    <WritingStyle>
      <Item
        title="사랑은 풍선 같은 것"
        content={
          <>
            사랑은 풍선 같은것
            <br />
            너무 커지면 뻥 하고 터진다
            <br />
            너무 힘을 빼면 쓩 하고 작아진다
            <br />
            적절하게 부풀어 올랐을때 못 달아나게 묶어 보았다
            <br />
            이제됐다 싶으면 두둥실 날아가 버렸다
            <br />
            알록 달록 고운 풍선 언젠가는 남으리
            <br />
            평생 함께할 풍선
          </>
        }
      ></Item>
      <Item
        title="마시멜로와 입술의 상관 관계"
        content={
          <>
            말랑말랑 마시멜로
            <br />
            말랑말랑 너의 입술
            <br />
            오물오물 맛있다
            <br />
            달짝지근 맛있다
            <br />
            내 입술안에 녹아내리는
            <br />
            마시멜로와 너의 입술
          </>
        }
      ></Item>
    </WritingStyle>
  );
}

export default Writing;
