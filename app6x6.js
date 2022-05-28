

let buttons=[];

let map={};

var hov=':hover{ background-color: "aqua" }';

const score_obj=document.querySelector('#score');

let score=0;

let click_counter=0;

let flashing_mode=false;



for (let i=0;i<36;i++){
    buttons[i]=i+1;
}

function generateRandom(maxLimit = 15){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}

for(let i=0;i<36;i++){
    let ra=generateRandom();
    [buttons[i],buttons[ra]]=[buttons[ra],buttons[i]];
}

function phase(phase_no){
    unhover_them();
    for(let i=0;i<phase_no;i++){
        map[String(buttons[i])]=0;
    }
    finally_flashed(buttons.slice(0,phase_no));
}

let divs = document.querySelectorAll(".pi");
let tp

divs.forEach(div => {

   div.addEventListener('click', (event)=> {
        clicked_id = event.target.attributes.id.value;
        // console.log(clicked_id);
        // console.log(map);
        if(flashing_mode==false){
            if(clicked_id in map){
                if(map[clicked_id]==1){
                    var ad = document.getElementById("over");
                    ad.play(); 
                    var el = document.getElementById(clicked_id);
                    el.style.backgroundColor='red';
                    localStorage.setItem(localStorage.name,[String(score),'6']);
                    swal({
                        title: "Game Over",
                        text: `Total Score : ${score}`, 
                        icon: "error",
                        button: "Go Back!!",
                    }).then((result)=>{
                        window.location.href = "index.html";
                    })
                }
                else if(clicked_id!=String(buttons[click_counter])){
                    var ad = document.getElementById("over");
                    ad.play(); 
                    var el = document.getElementById(clicked_id);
                    el.style.backgroundColor='red';
                    localStorage.setItem(localStorage.name,[String(score),'6']);
                    swal({
                        title: "Game Over",
                        text: `Total Score : ${score}`, 
                        icon: "error",
                        button: "Go Back!!",
                    }).then((result)=>{
                        window.location.href = "index.html";
                    })
                }
                else{
                    var ad = document.getElementById("aud");
                    ad.play(); 
                    map[clicked_id]=1;
                    click_counter+=1;
                    score+=10;
                    score_obj.textContent=String(score);
                    var el = document.getElementById(clicked_id);
                    el.style.backgroundColor='green';
                }

                if(click_counter==Object.keys(map).length){
                    for(i in map){
                        var el = document.getElementById(i);
                        el.style=hov;
                    }
                    click_counter=0;
                    var celeb_sound = document.getElementById("celeb");
                    celeb_sound.play();
                    swal({
                        title: "Good job!",
                        text: "You passed level "+String(Object.keys(map).length),
                        icon: "success",
                        button: "Continue!!",
                    }).then((result)=>{
                        score+=100;
                        score_obj.textContent=String(score);
                        phase(Object.keys(map).length+1);
                    })
                }
            }
            else{
                var ad = document.getElementById("over");
                ad.play(); 
                var el = document.getElementById(clicked_id);
                el.style.backgroundColor='red';
                localStorage.setItem(localStorage.name,[String(score),'6']);
                swal({
                    title: "Game Over",
                    text: `Total Score : ${score}`, 
                    icon: "error",
                    button: "Go Back!!",
                }).then((result)=>{
                    window.location.href = "index.html";
                })
            }
        }
        
   });

});

function flash(k){
    var ofs = 0;
    var el = document.getElementById(k);

    let welp1 = setInterval(function(){
        el.style.background = 'rgba(138,66,245,'+ofs+')';
        ofs+=0.1
        if(ofs>1){
            clearInterval(welp1)
        }
    }, 20);

    setTimeout(()=> {
        let welp2 = setInterval(()=>{
            el.style.background = 'rgba(138,66,245,'+ofs+')';
            ofs-=0.1
            if(ofs<0){
                el.style="";
                clearInterval(welp2)
            }
        }, 20);
    },220);
}

function finally_flashed(l){
    let i=0;
    flashing_mode=true;
    well=setInterval(() => {
        flash(String(l[i]));
        i+=1;
        if(i==l.length){
            flashing_mode=false;
            hover_them();
            clearInterval(well)
        }
    }, 440);
}

function hover_them(){
    for(let i=1;i<=36;i++){
        el = document.getElementById(String(i));
        el.classList.add('gg');
    }
}

function unhover_them(){
    for(let i=1;i<=36;i++){
        el = document.getElementById(String(i));
        el.classList.remove('gg');
    }
}


phase(1);




