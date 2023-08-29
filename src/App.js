import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Content from './components/Content';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Notpage from './pages/Notpage';
// import Styled from './components/Styled';

{/* <Content /> */}

function App() {
  // 변수설정하는 자리
  // let Name = "김준면";

  return (
    // <div className="App">
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/portfolio" element={<Portfolio/>}></Route>
                <Route path="/*" element={<Notpage/>}></Route>
            </Routes>
        </>
    //     {/* <h3 className={Name} style={{color: "white", backgroundColor: "skyblue"}}>Hello React {Name}</h3> */}
    //     {/* <div className='content'>
    //         <Content title={title[0]} desc="스페셜 이벤트" desc2="테스트1" arrayNum="0" />
    //         <Content title={title[1]} desc="이름을 지어주세요" desc2="테스트2" arrayNum="1" />
    //         <Content title={title[2]} desc="판다는 곰이 맞을까?" desc2="테스트3" arrayNum="2" />
    //         <Content title={title[3]} desc="에버랜드 AR필터" desc2="테스트4" arrayNum="3" />
    //     </div> */}
    //     <div className = 'content'>
    //         <Content arrayNum = "0" />
    //         <Content arrayNum = "1" />
    //         <Content arrayNum = "2" />
    //         <Content arrayNum = "3" />
    //     </div>
    //     <Styled />
    // </div>
  );
}

export default App;