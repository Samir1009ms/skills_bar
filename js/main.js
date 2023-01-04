let loads = document.querySelectorAll(".load")
let span =document.querySelectorAll(".csstext")

// const cart= document.querySelector(".container")

loads.forEach((slide) => {
    setTimeout(() => {
        if (slide.classList.contains("html")) {
            slide.setAttribute("style", "width:35%")
            span.forEach((index)=>{
                // let sx=parseInt(slide.outerWidth)
                let counter=0 
                // console.log("q",typeof(parseInt(slide.outerWidth)));
                if(index.classList.contains("html2")){
                    console.log("ss",(loads.cssWidth))
                    setInterval(()=>{
                    if(counter===35){
                        clearInterval()
                    }else{
                    counter++
                    // console.log(counter)
                    index.innerHTML=counter + "%"
                    }

                    },50)
                }
            })
            
        }

    }, 1000)
    setTimeout(() => {
        if (slide.classList.contains("css")) {
            slide.setAttribute("style", "width:66%")
            span.forEach((index)=>{
                let counter=0
                if(index.classList.contains("css2")){
                    
                    setInterval(()=>{
                    if(counter===66){
                        clearInterval()
                    }else{
                    counter++
                    // console.log(counter)
                    index.innerHTML=counter + "%"
                    }

                    },30)
                }
            })
        }
    }, 2000)
    setTimeout(() => {
        if (slide.classList.contains("js")) {
            slide.setAttribute("style", "width:46%")
            span.forEach((index)=>{
                let counter=0
                if(index.classList.contains("js2")){
                    
                    setInterval(()=>{
                    if(counter===46){
                        clearInterval()
                    }else{
                    counter++
                    // console.log(counter)
                    index.innerHTML=counter + "%"
                    }

                    },36)
                }
            })
        }
    }, 3000)
    setTimeout(() => {
        if (slide.classList.contains("php")) {
            slide.setAttribute("style", "width:98%")
            span.forEach((index)=>{
                let counter=0
                if(index.classList.contains("php2")){
                    
                    setInterval(()=>{
                    if(counter===98){
                        clearInterval()
                    }else{
                    counter++
                    // console.log(counter)
                    index.innerHTML=counter + "%"
                    }

                    },21)
                }
            })
        }
    }, 4000)
});