import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Day from './Day';

const DailyStyle = styled.div`
  padding: 20px;
`;

function Daily(): ReactElement {
  return (
    <DailyStyle>
      <Day
        date="2021.7.25"
        img="/blog/images/20210725.png"
        imgWidth="100"
        text="Fell A Coffe를 갔는데 초코렛 들어간 우유도 맛있고 과자 서비스도 많이 주시고 30분 마시고 나오는데 서비스로 아메리카노를 무료로 주셨다.
          오픈한지 얼마 안되서 친절한 것 같은데 사장님이 전략적으로 하시는 것인지 모르겠지만 오랜만에 마음에 드는 친절한 커피숍을 발견한 것 같아
          기분이 좋았다."
      ></Day>

      <Day date="2021.7.27" img="/blog/images/20210727.png" text="행복이랑 놀았다. i had a time that i play with 행복이 "></Day>

      <Day
        date="2021.7.28"
        img="/blog/images/20210728.png"
        text={
          <p>
            The Tow of guys entered my company.
            <br />
            it is first time that I talk much in a weekly meeting.
            <br />
            The subject of talk is Code-Review about my jog(gigs project).
            <br /> 두명의 신규 입사자가 회사에 입사했다.
            <br />
            처음으로 주간 회의떄 말을 많이 했다.
            <br />
            대화의 주제는 내 일(긱스 프로젝트)에 대한 코드 리뷰였다.
          </p>
        }
      ></Day>

      <Day
        date="2021.7.29"
        img="/blog/images/20210729.png"
        imgWidth="400"
        text={
          <p>
            I bougth a 금강제화 gift card for 세정's father birthday.
            <br />
            And We bought a coffee and a cake from the starbuck.
            <br />
            And We went to chaire in lotte tower front square.
            <br />
            So We ate they.
            <br />
            By the away The woman on a bicycle told us.
            <br />
            She say that believe hallelujah.
          </p>
        }
      ></Day>

      <Day
        date="2021.7.30"
        img="/blog/images/20210730.png"
        imgWidth="400"
        text={
          <p>
            Today is 세정's father birthday.
            <br />
            We went to the 세정's home after finish my work.
            <br />
            there are many foods. Sliced raw fish of Salmon and Flatfish , Sea cucumber, octopus, small octopus, spicy soup.
            <br />
            Spicy soup was the most impressive in today.
            <br />
            It's very delicious.
          </p>
        }
      ></Day>

      <Day
        date="2021.8.01"
        img="/blog/images/20210801.png"
        imgWidth="400"
        text={
          <p>
            i want to be freeman.
            <br />i many watched the youtube videos.
            <br />i watched a youtube about the 안성시's a house and a land investment.
          </p>
        }
      ></Day>

      <Day
        date="2021.8.04"
        img="/blog/images/20210804.png"
        imgWidth="400"
        text={
          <p>
            There were meeting to 세정's english study in the 역삼.
            <br /> I went the 역삼 too.
            <br /> And i ride a bicycle during 세정's meeting.
            <br /> i took a big circle around 강남.
          </p>
        }
      ></Day>

      <Day
        date="2021.8.05"
        text={
          <>
            최근에 프리즌 브레이크를 다시 보고 있다.
            <br />
            역시 캐릭터들이 개성있어야 재미있는것 같다.
            <br />
            아침에는 올림픽 공원가는길에 뻐칼국수를 먹었다. <br />
            맛있었다.
            <br />
            Recent, I am reWatching the PrisonBreak.
            <br />
            As expected, I think Darama funny point with charactor's personalaty.
            <br />
            i had Bone chopped noodles during way to olympic park.
            <br />
            it is delicious.
          </>
        }
      ></Day>
    </DailyStyle>
  );
}

export default Daily;
