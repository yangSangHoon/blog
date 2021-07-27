import{q as e,R as t,H as n,L as a,a as l,b as o}from"./vendor.206d61b2.js";const i=e.div`
  padding: 20px;
  h2 {
    margin-top: 50px;
    display: block;
    font-size: 30px;
  }

  div{
    position: relative;
    z-index:1;
    background-size: 300px auto;
    background-repeat: no-repeat;
    & > p {
      box-sizing: border-box;
      padding: 70px 10px 10px 10px;
      position: absolute;
      left: 0;
      top:0;
      color: #ffffff;
      font-size: 22px;
      font-weight: bold;
      width: 100%;
      height: 100%;
      line-height: 1.6;
    }

    
    &:before {
      content: '';
      background-color: #000000;
      position: absolute;
      opacity: 0.5;
      left: 0;
      top:0;
      width: 100%;
      height: 100%;
    }
  }
  

  .d20210725{
    height: 350px;
    background-size: 200px auto;
    //background-image: url('/blog/images/20210725.png');
  }

  .d20210727 {
    height: 300px;
    //background-image: url('/blog/images/20210727.png');
  }
`;function r(){return t.createElement(i,null,t.createElement("h2",null,"2021.7.25"),t.createElement("img",{src:"/blog/images/20210725.png",width:"100"}),t.createElement("div",{className:"d20210725"},t.createElement("p",null,"Fell A Coffe를 갔는데 초코렛 들어간 우유도 맛있고 과자 서비스도 많이 주시고 30분 마시고 나오는데 서비스로 아메리카노를 무료로 주셨다. 오픈한지 얼마 안되서 친절한 것 같은데 사장님이 전략적으로 하시는 것인지 모르겠지만 오랜만에 마음에 드는 친절한 커피숍을 발견한 것 같아 기분이 좋았다.")),t.createElement("h2",null,"2021.7.27"),t.createElement("img",{src:"/blog/images/20210727.png",width:"200"}),t.createElement("div",{className:"d20210727"},t.createElement("p",null,"행복이랑 놀았다. i had play with 행복이  ")))}function c(){return t.createElement(n,{basename:"/blog"},t.createElement("h1",null,"양상훈의 블로그"),t.createElement(a,{to:"/daily"},"일기"),t.createElement(l,{path:"/daily",exact:!0,component:r}))}o.render(t.createElement(t.StrictMode,null,t.createElement(c,null)),document.getElementById("root"));
