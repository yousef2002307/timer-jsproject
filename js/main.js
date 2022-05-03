/* algrithm 
https://mytimer2022.netlify.app/?fbclid=IwAR369ZHB7ArevQWQOzjVaHWMid9ZXrK47UMkN-7ypb4fmeZzXDbQzxpTngg

الساعات 
لو الرقم اكبر من ٢٣ فال date هنزود اليوم بقيمة واحد والساعات هنزودة بقيمة الفرق بين الرقم اللي طلع وال٢٣ وننقص واحد يعني هنزود صفر
الدقائق 
لو الرقم اكبر من ٥٩ فهنطرح الرقم من ٦٠ وعدد الدقائق هيزيد بقيمة الطرح والساعات هتزيد بقيمة واحد
نفس الكلام مع الثواني ولكن هنشيل دقائق نحط ثواني وهنشيل ساعات نحط دقائق
خلي بالك بعد ال timer ده هعمل more complex  timer يعني بيزود اكتر من 23 ساعه وهنشوف موضوع الدقائق والثواني.
وافتكر حاجه هامه ان ٥%٩ =٥

- واحل مشكلة pause and resume باني لما اضغط علي ال btn بتاع resume اخلي قيم ال input هي هي قيم ال spans  ثم اعمل ايفينت علي زرار الstart اللي هو click 






-to determine if it is pm or am subtract date from date2 and if it negative change it to pm put if not then it is am











let x = 3;
let y = 48;
let z = 10;
let date = new Date(`2022-4-28 ${x}:${y}:${z} am`);
console.log(date)
let date2 = new Date();
let gap = date.getTime() - date2.getTime();

console.log(Math.floor(gap / (1000 * 60 * 60)))
*/

//////////////////work station/////////////////////////////////////////////////////////////////////////////////////////////////////
let alert = document.querySelector(".alert_jo");
let inputs = document.querySelectorAll(".timer");
let sound1 = document.querySelector(".one");
let reset = document.querySelector(".reset");
let start = document.querySelector(".start");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let boxtimer = document.querySelector(".timer-box");
let boxtimer2 = document.querySelector(".timer-box2");
let spans = document.querySelectorAll(".timer-box2 span");
let audio2 = document.querySelector(".two-audio");
let givup = document.querySelector(".giveup");
let resume = document.querySelector(".resume");
let interval;
givup.addEventListener("click", relading);
spans = Array.from(spans);

inputs = Array.from(inputs);
/// make the footer date (year) dynamic ////
document.querySelector("footer p span").textContent = new Date().getFullYear();

/// make the footer date (year) dynamic ////
/* allow no negative values and make sound*/

hour.onchange = function () {
    let val = this.value;
    if (val < 0) {
        this.value = 0;
        alert.classList.add("alert2_jo");
        alert.textContent = "values can only be 0 or positive"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    if (val > 23) {
        this.value = 23;
        alert.classList.add("alert2_jo");
        alert.textContent = "hours can not be larger than 23"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    sound1.play()
}
min.onchange = function () {
    let val = this.value;
    if (val < 0) {
        this.value = 0;
        alert.classList.add("alert2_jo");
        alert.textContent = "values can only be 0 or positive"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    if (val > 59) {
        this.value = 59;
        alert.classList.add("alert2_jo");
        alert.textContent = "minutes can not be larger than 23"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    sound1.play()
}
sec.onchange = function () {
    let val = this.value;
    if (val < 0) {
        this.value = 0;
        alert.classList.add("alert2_jo");
        alert.textContent = "values can only be 0 or positive"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    if (val > 59) {
        this.value = 59;
        alert.classList.add("alert2_jo");
        alert.textContent = "seconeds can not be larger than 23"
        let int = setTimeout(() => {
            alert.classList.remove("alert2_jo");
        }, 6000);
    }
    sound1.play()
}
//////reset all input values to 0 on clicking reset button /////////////////////
reset.onclick = function () {
    inputs.forEach(input => {
        input.value = 0
    })
}
////////on clicking start button///////////////////////////////////////////////////////////
start.onclick = function () {

    let date2 = new Date();
    let x = hour.value;
    let y = min.value;
    let z = sec.value;


if(x == 0 && y == 0 && z == 0){
    return;
}

    let x1 = date2.getHours();
    let y1 = date2.getMinutes();
    let z1 = date2.getSeconds();
    let v1 = date2.getDate();
    let v2 = date2.getMonth() + 1;
    let v3 = date2.getFullYear();

    let x2 = parseInt(x) + parseInt(x1);
    let y2 = parseInt(y) + parseInt(y1);
    let z2 = parseInt(z) + parseInt(z1);
    ////check if hours value is larger than 24////////////////////
    if (x2 > 23) {
        v1 = v1 + 1
        x2 = x2 - 23 - 1;
    }

    ////check if hours value is larger than 24////////////////////
    ////check if min value is larger than 24////////////////////
    if (y2 > 59) {
        let sub = y2 - 60;
        y2 = sub;
        x2 = x2 + 1;
    }

    ////check if min value is larger than 24////////////////////
    ////check if seconds value is larger than 24////////////////////
    if (z2 > 59) {
        let sub = z2 - 60;
        z2 = sub;
        y2 = y2 + 1;
    }

    ////check if seconds value is larger than 24////////////////////
    let date = new Date(`${v3}-${v2}-${v1} ${x2}:${y2}:${z2}  `);




     interval = setInterval(() => {
        let date2 = new Date();
        let diffMs = date.getTime() - date2.getTime();
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        var diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000);
        var diffsec = Math.floor((((diffMs % 86400000) % 3600000) % 60000) / 1000);
        if (diffHrs < 0) {
            boxtimer2.textContent = "done";
            audio2.play();
            createele(boxtimer2, "button", "ok", "class", "ok");
            document.querySelector(".ok").addEventListener("click", relading);
            clearInterval(interval);

        } else {
            spans.forEach((ele, index) => {
                if (index == 0) {
                    ele.textContent = diffHrs + " : ";
                }
                if (index == 1) {
                    ele.textContent = diffMins + " : "
                }
                if (index == 2) {
                    ele.textContent = diffsec;
                }
                boxtimer.style.display = "none";
                boxtimer2.style.display = "block";
            });
        }
      
    }, 1000);


}

///////////////////function get val less than 12/////////////////////////////////////////////////////////////////////////////////
function createele(ele, eleyouwillcreate, textofelement, attryoucreate, valofattr) {
    let main = document.createElement(eleyouwillcreate);
    let maintext = document.createTextNode(textofelement);
    main.appendChild(maintext);
    let attr = document.createAttribute(attryoucreate);
    attr.value = valofattr;
    main.setAttributeNode(attr);
    ele.appendChild(main)
}

function relading() {
    location.reload();
}
/* on clickin resume clear the interval and change textcontent of button and make input vals is the same as spans */


resume.onclick = function(){
   /*check if class exicst to change textcontent */
 
   if(this.classList.contains("excist")){
   
       this.textContent = "resume";
       this.classList.remove("excist");
       clearInterval(interval);
       spans.forEach((ele,index) => {
          
           if(index == 0){
               hour.value = parseInt(ele.textContent);
              
           }
           if(index == 1){
               min.value = parseInt(ele.textContent)
           }
           if(index == 2){
            sec.value = parseInt(ele.textContent);
        }

       });
      
      
   }else{
    this.textContent = "pause";
    this.classList.add("excist");
    start.click();
   }

}








/* on clickin resume clear the interval and change textcontent of button and make input vals is the same as spans */