const cont = document.getElementById("joke");
const btn = document.getElementById("btn");
const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



let getJoke = () =>{
    cont.classList.remove("fade");
    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then((item)=>{
       cont.textContent=`${item.joke}`;
       console.log(item.joke);
       cont.classList.add("fade");
    })
}
btn.addEventListener("click",getJoke)