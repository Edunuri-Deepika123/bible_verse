let url="https://bible-api.com/data/web/random";


let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
    
     getfacts();

});

async function getfacts(){
    try{
        btn.innerText="loading...";
      let res=await axios.get(url);
      //let data=res.data.random_verse.text;
      let data=res.data.random_verse

      let p=document.querySelector("p");

      p.innerText=`
         ${data.book}  ${data.chapter}:${data.verse} 
         
         ${data.text}

      `;




      console.log(res);
      btn.innerText="Get Verse";
      
}catch(error)
{
    console.log("error",error.message);
}
}

let h1=document.querySelector("h1");
h1.style.color="red";