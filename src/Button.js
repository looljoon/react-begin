/* eslint-disable */

import {useEffect, useState} from "react";
import './App.css';
    
// 컴포넌트는 다른 function의 바깥에서 만들며 처음은 영어대문자를 써야한다.

// state
    // → 변동시 자동으로 html에 반영되게 만들고 싶을때 state 사용.
    // → 자주 바뀌는 글자들을 state로 해놓으면 좋음. ex)좋아요버튼

//array나 object 특징. 
    // let arr = [1,2,3]; 라고하면 1,2,3 이 어디있는지 화살표만 변수에 저장이 되어지게되는것.
    // 기존 state나 array일경우 독립적 카피본을 만들어서 수정해줘야함. \


// map() 함수
    // 1. 왼쪽 array자료만큼 내부코드 실행해줌
    //      → 글제목.map(function(){ ~ 에서 글제목의 array만큼.
    // 2. return에 있는걸 array로 담아줌
    // 3. 유용한 파라미터 두개 사용가능

// props 
    // 1. state를 부모컴포넌트에서 자식컴포넌트로 props를 통해 전송하는 법.
    //      1-1 <자식 컴포넌트 작명={state이름}>
    //      1-2 props 파라미터 등록 후 props.작명 사용

// onChange
    // 유저가 input 내 입력시( 값이 바뀔때마다) 코드실행. 유사한 기능으로 onInput

function App() {
   

    let [글제목,글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    let [따봉,따봉변경] = useState(0);
    let [modal,setModal] = useState(false);
    let [title,setTitle] = useState(0);
    let [입력값,입력값변경] = useState('');
   
  
    return(
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            
            {    
                글제목.map(function(a,i){
                    return (
                    <div className="list">                      
                            <h4 onClick={()=>{setModal(true),setTitle(i)}}>{ 글제목[i] }
                            <span onClick={()=>{따봉변경(따봉+1)
                            }}>👍</span>{따봉}</h4>
                            <p>2월 17일 발행</p>
                          
                            
                        </div> 
                    )
                })
            }

            {/* 유저가 입력한 값을 저장하고자할때. 
            출력을할때보면 state변경함수는 늦게 처리가되서
            콘솔창에서 늦게 처리된다.*/}
            <input onChange={(e)=>{
                입력값변경(e.target.value);    
            }} />
            <button onClick={()=>{
                let copy = [...글제목];
                copy.unshift();
                글제목변경(copy);
            }}></button>
           
          
            {modal == true ? <Modal  title={title} 글제목={글제목}/> : null}
        </div>

    );
   

    
}

function Modal(props){
    return(
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div> 
    )
}
export default App; 

