import{q as e,R as t,H as n,L as l,a,b as r}from"./vendor.206d61b2.js";const i=e.div`
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
`;function m({date:e,text:n,img:l,imgWidth:a}){return t.createElement(i,null,t.createElement("h2",null,e),l&&t.createElement("img",{src:l,width:null!=a?a:300}),t.createElement("div",null,n))}const c=e.div`
  padding: 20px;
`;function o(){return t.createElement(c,null,t.createElement(m,{date:"2021.7.25",img:"/blog/images/20210725.png",imgWidth:"100",text:"Fell A Coffe를 갔는데 초코렛 들어간 우유도 맛있고 과자 서비스도 많이 주시고 30분 마시고 나오는데 서비스로 아메리카노를 무료로 주셨다.\n          오픈한지 얼마 안되서 친절한 것 같은데 사장님이 전략적으로 하시는 것인지 모르겠지만 오랜만에 마음에 드는 친절한 커피숍을 발견한 것 같아\n          기분이 좋았다."}),t.createElement(m,{date:"2021.7.27",img:"/blog/images/20210727.png",text:"행복이랑 놀았다. i had a time that i play with 행복이 "}),t.createElement(m,{date:"2021.7.28",img:"/blog/images/20210728.png",text:t.createElement("p",null,"The Tow of guys entered my company.",t.createElement("br",null),"it is first time that I talk much in a weekly meeting.",t.createElement("br",null),"The subject of talk is Code-Review about my jog(gigs project).",t.createElement("br",null)," 두명의 신규 입사자가 회사에 입사했다.",t.createElement("br",null),"처음으로 주간 회의떄 말을 많이 했다.",t.createElement("br",null),"대화의 주제는 내 일(긱스 프로젝트)에 대한 코드 리뷰였다.")}),t.createElement(m,{date:"2021.7.29",img:"/blog/images/20210729.png",imgWidth:"400",text:t.createElement("p",null,"I bougth a 금강제화 gift card for 세정's father birthday.",t.createElement("br",null),"And We bought a coffee and a cake from the starbuck.",t.createElement("br",null),"And We went to chaire in lotte tower front square.",t.createElement("br",null),"So We ate they.",t.createElement("br",null),"By the away The woman on a bicycle told us.",t.createElement("br",null),"She say that believe hallelujah.")}),t.createElement(m,{date:"2021.7.30",img:"/blog/images/20210730.png",imgWidth:"400",text:t.createElement("p",null,"Today is 세정's father birthday.",t.createElement("br",null),"We went to the 세정's home after finish my work.",t.createElement("br",null),"there are many foods. Sliced raw fish of Salmon and Flatfish , Sea cucumber, octopus, small octopus, spicy soup.",t.createElement("br",null),"Spicy soup was the most impressive in today.",t.createElement("br",null),"It's very delicious.")}),t.createElement(m,{date:"2021.8.01",img:"/blog/images/20210801.png",imgWidth:"400",text:t.createElement("p",null,"i want to be freeman.",t.createElement("br",null),"i many watched the youtube videos.",t.createElement("br",null),"i watched a youtube about the 안성시's a house and a land investment.")}),t.createElement(m,{date:"2021.8.04",img:"/blog/images/20210804.png",imgWidth:"400",text:t.createElement("p",null,"There were meeting to 세정's english study in the 역삼.",t.createElement("br",null)," I went the 역삼 too.",t.createElement("br",null)," And i ride a bicycle during 세정's meeting.",t.createElement("br",null)," i took a big circle around 강남.")}))}const u=e.div`
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
`;function d({title:e,content:n}){return t.createElement(u,null,t.createElement("h2",null,e),t.createElement("div",null,n))}const s=e.div`
  padding: 20px;
`;function g(){return t.createElement(s,null,t.createElement(d,{title:"사랑은 풍선 같은 것",content:t.createElement(t.Fragment,null,"사랑은 풍선 같은것",t.createElement("br",null),"너무 커지면 뻥 하고 터진다",t.createElement("br",null),"너무 힘을 빼면 쓩 하고 작아진다",t.createElement("br",null),"적절하게 부풀어 올랐을때 못 달아나게 묶어 보았다",t.createElement("br",null),"이제됐다 싶으면 두둥실 날아가 버렸다",t.createElement("br",null),"알록 달록 고운 풍선 언젠가는 남으리",t.createElement("br",null),"평생 함께할 풍선")}),t.createElement(d,{title:"마시멜로와 입술의 상관 관계",content:t.createElement(t.Fragment,null,"말랑말랑 마시멜로",t.createElement("br",null),"말랑말랑 너의 입술",t.createElement("br",null),"오물오물 맛있다",t.createElement("br",null),"달짝지근 맛있다",t.createElement("br",null),"내 입술안에 녹아내리는",t.createElement("br",null),"마시멜로와 너의 입술")}))}const E=e.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;function b(){return t.createElement(n,{basename:"/blog"},t.createElement(E,null,t.createElement("h1",null,"양상훈의 블로그"),t.createElement(l,{to:"/daily"},"일기"),t.createElement(l,{to:"/writing"},"낙서")),t.createElement(a,{path:"/daily",exact:!0,component:o}),t.createElement(a,{path:"/writing",exact:!0,component:g}))}r.render(t.createElement(t.StrictMode,null,t.createElement(b,null)),document.getElementById("root"));
