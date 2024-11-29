
console.log("hii");
let result=
    {
    "tag": "",
    "free": true,
    "role": false,
    "user": "sweta893pandey",
    "email": "sweta893pandey@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }


submitbtn.addEventListener("click",async()=>{
    console.log("scriptstarts");
    let key="ema_live_7w3BCwzNcnAy7bRwnl7OJTuCqOxxenvaVVLxVSmw"
    let email=document.getElementById("emails").value

let url=`https://api.emailvalidation.io/v1/info?apikey=${key}email={email}`
let resp= await fetch(url)
let result=await resp.json()


let str=''
for (key of Object.keys(result)){
 str=str+`<div>${key}:${result[key]}</div>`
}
resultCont.innerHTML=str;
})




