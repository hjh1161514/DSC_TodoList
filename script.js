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
}

//삭제버튼 클릭시
function remove(count){
    var li = document.getElementById("li"+count);
    list.removeChild(li);
}