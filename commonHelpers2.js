import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),m=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email.value=(m.email||"").trim();e.message.value=(m.message||"").trim();e.addEventListener("input",function(t){if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"){const a={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}});e.addEventListener("submit",function(t){if(t.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""){alert("Будь ласка, заповніть обидва поля цієї форми");return}const a={email:e.email.value.trim(),message:e.message.value.trim()};console.log("Form Data:",a),e.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers2.js.map