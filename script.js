var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);

function clickButton(){
    // li라는 리스트 요소를 추가해 li라는 변수에 저장
    var li = document.createElement('li')

    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group-item"); // bootstrap 사용

    // 입력값을 HTML에 넣어줌
    li.innerHTML = input.value;

    //삭제버튼이 처음부터 있으면 안 예쁘고 리스트가 만들 때마다 추가되는 것이 올바름
    li.innerHTML += "<button style='float: right;' onclick='remove("+count+")' class='btn btn-outline-primary btn-sm'>삭제</button>" //+가 없으면 입력값이 저장되지 않고 삭제 버튼만 출력
    li.innerHTML += "<button style='float: right;' onclick='check("+count+")' class='btn btn-outline-primary btn-sm'>체크</button>"

    list.appendChild(li);

    //입력창 초기화
    input.value="";

    count = count+1; //count++;
}

//체크버튼 클릭시
function check(count){
    var li = document.getElementById("li"+count);
    li.style.textDecoration = "line-through"

    /*
    text-decoration은 선으로 텍스트를 꾸밀 수 있게 해주는 속성입니다.
    none : 선을 만들지 않습니다.
    line-through : 글자 중간에 선을 만듭니다.
    overline : 글자 위에 선을 만듭니다.
    underline : 글자 아래에 선을 만듭니다.
    initial : 기본값으로 설정합니다.
    inherit : 부모 요소의 속성값을 상속받습니다.
    */

}

//삭제버튼 클릭시
function remove(count){
    var li = document.getElementById("li"+count);
    list.removeChild(li);
}