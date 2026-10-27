//익명함수
//let은 변수 선언 할때 사용함. 
// let funcNoname = function(){
//     alert('함수 1');
//     alert('함수 2');
// }

// funcNoname();

// alert(typeof(funcNoname) + ' : ' + funcNoname);

// 선언적함수
// function funcName(){
//     alert('함수_01');
//     alert('함수_02');
// };

// alert(typeof(funcName)+ ' + ' + funcName);

//함수 - 매개변수 반환 f는 함수명, x는 매개변수임
// function f(x){
//     return x * x;
// };

// alert(f(3));

//콜백함수: 매개변수로 전달되는 함수
//간단하게 말하면 함수의 어떤 함수명으로 써져있고 그 함수의 매개변수의 함수를 부르는 함수.

// 선언적함수 방식
// function fun(){
//     alert('함수호출');
// };

// 익명함수 방식
// let fun = function(){
//     alert('함수호');
// };

// function callTenTimes(callback_func){

//     for(let i=0; i<10; i++){
//         callback_func();
//     }
// };

// 호출할 함수를 매개변수가 있었던 콜텐타임즈 함수에 넣어 실행
// callTenTimes(fun);

//객체 자료형을 한 번에 저장 키를 기반으로 자료를 저장.

let person = {
    name: '윤인성',
    eat: function(food){
        alert(food + '을/를 먹습니다.');
    }
};

person.eat('밥');
