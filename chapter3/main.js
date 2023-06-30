var select = document.getElementById("select");
const root = document.querySelector(":root");

select.addEventListener("change", (e)=>{
    root.style.setProperty("--pseduo-display-style", e.target.value);
})

//JS

