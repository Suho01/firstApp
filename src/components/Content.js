import React, { useState } from 'react'

function Content(props) {
    let [good, setGood] = useState(0);

    let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]);
    let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"]);
    
    function goodFun() {
        setGood(good + 1);
    }

    function Change() {
        let copy = [...title];
        let copy2 = [...desc];
        copy[0] = "쌍둥이 아기판다77";
        copy2[2] = "판다는 곰이 맞음";
        setTitle(copy);
        setDesc(copy2);
    }

    let [ModalChk, setModalChk] = useState(false);
    function Modal() {
        // if (ModalChk === false) {
        //     setModalChk(true);
        // } else {
        //     setModalChk(false);
        // }

        // ModalChk === false ? setModalChk(true) : setModalChk(false);

        setModalChk(!ModalChk);  
    }

    return (
        <>
            <div className='content-item' onClick={Modal}>
                <img src="https://via.placeholder.com/320" alt="test" />
                <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
                <p>{desc[props.arrayNum]}</p>
                <p onClick={goodFun}>👍 {good}</p>
                <button onClick={Change}>수정</button>
            </div>
            
            {
                (ModalChk === true && <div className='window' onClick={Modal}></div>) // ModalChk가 true와 완전 같은 값이라면 window(모달창)이 나오고, 아니라면 null(존재하지 않는다.)
            }            
        </>
    )
}

export default Content