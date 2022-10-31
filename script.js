let realdata;
const fetchQuote = async () => {
  const mainCont = document.querySelector(".main-container")
try {
  let data= await fetch("https://type.fit/api/quotes");
  realdata= await data.json();
  rawStr=""
  if(realdata.length){
    for(let i=0; i<51; i++){
    rawStr=rawStr+`<div  class="box-container">
         <div class="quote-box">
           <q>
             ${realdata[i].text}
           </q>
           <div class="auther">
               ~${realdata[i].author}
           </div>
         </div>
        </div>
      `
    }
    mainCont.innerHTML=rawStr
  
  }

  }
  catch(error){
console.log(error)
  }
}
fetchQuote()