const form=document.getElementById("uploadForm");
const input=document.getElementById("imageInput");
const fileName=document.getElementById("fileName");
const result=document.getElementById("result");

input.addEventListener("change",()=>{fileName.textContent=input.files[0]?.name||"No file selected";});

form.addEventListener("submit",async(e)=>{
  e.preventDefault();
  if(!input.files.length){show("Please select a retinal image first.");return;}
  const data=new FormData(); data.append("image",input.files[0]);
  show("Checking model configuration...");
  try{
    const res=await fetch("/predict",{method:"POST",body:data});
    const json=await res.json();
    show(json.message||json.error||"No result returned.");
  }catch(err){show("Server error. Make sure Flask is running on 127.0.0.1:5000.");}
});
function show(msg){result.textContent=msg;result.classList.add("show");}
