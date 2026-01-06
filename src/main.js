// Use querySelectorAll to select all links.

const linksEl = document.querySelectorAll(".nav-link");

console.log(linksEl);
//loop

linksEl.forEach(link =>{
  link.addEventListener('click',()=>{

    linksEl.forEach(item =>{
      item.classList.remove("active");
    })


    link.classList.add("active");
  })

  console.log(link.innerText);
})

