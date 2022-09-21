// 타이핑 효과
const content = "2022 PORTFOLIO, \n Web Designer 'CHU YU JIN'";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)

// 타이핑 효과 종료