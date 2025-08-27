const links=document.querySelectorAll("nav a");
    const indicator=document.querySelector(".indicator");
    const mask=document.querySelector(".mask");

    function moveIndicator(el){
      const rect=el.getBoundingClientRect();
      const navRect=el.parentElement.getBoundingClientRect();
      let left=rect.left-navRect.left + rect.width/2 - 35;
      indicator.style.left=left+"px";
      // mask भी circle की position से कट होगा
      mask.style.setProperty("--x", (left+35)+"px");
    }

    links.forEach(link=>{
      link.addEventListener("click",()=>{
        links.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
        moveIndicator(link);
      });
    });

    window.onload=()=>{
      moveIndicator(document.querySelector("nav a.active"));
    }
