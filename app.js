const tabel = document.getElementById("grid");
const button = document.getElementById("generatebutton");

button.onclick =()=>{
    let input = document.getElementById("textBox").value;
    let i;
    for(i=1;i<=input;i++)
    {
        let giftu = document.createElement("div");
        tabel.append(giftu);
        giftu.innerHTML=i;
        giftu.style.height="3vh";
        giftu.style.width="3vw";
        giftu.style.border="2.5px solid black";
        giftu.style.fontSize="2em";
    }
}