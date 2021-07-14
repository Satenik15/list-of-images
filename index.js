const arrOfImg = [
    {
      id: 0,
      title: "Erebuni-Yerevan",
      url: "https://media.istockphoto.com/photos/yerevan-capital-of-armenia-and-the-mount-ararat-picture-id627744150?k=6&m=627744150&s=612x612&w=0&h=6IIzYfZdjVRlP3oz7Zgxj5W8JO1a3rhpksY22XmLH_E="
    },
    {
      id: 1,
      title: "The Taj Mahal",
      url: "https://static.dw.com/image/55000481_403.jpg"
    },
    {
      id: 2,
      title: "Colosseum",
      url: "https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg"
    },
    {
      id: 3,
      title: "Christ the Redeemer",
      url: "http://1.bp.blogspot.com/-geLNT4ir-GA/U4w6DdG0-tI/AAAAAAAAA-s/8K2y51Jknu4/s1600/the.christ.the.redeemer.statue.in.brazil.via.goista.com.jpg"
    },
    {
      id: 4,
      title: "The Giza Necropolis",
      url: "https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza.png"
    },
    {
      id: 5,
      title: "Great Wall of China",
      url: "https://c4.wallpaperflare.com/wallpaper/71/48/45/4k-great-wall-of-china-wallpaper-preview.jpg"
    }, 
    {
      id: 6,
      title: "Machu Picchu",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg"
    }, 
    {
      id: 7,
      title: "Chichen Itza",
      url: "https://jonistravelling.com/wp-content/uploads/2015/04/chichen-itza-yucatan-mexico-7-wonders.jpg"
    }
  ];
  
  const leftDiv = document.getElementById("leftDiv");
  const rightDiv = document.getElementById("rightDiv");
  const main = document.getElementById("main");
  const btn = document.getElementById("btn");
 
  let i = 1;
  let Timer = setInterval (() => {
     if(i === arrOfImg.length) {
        i = 0;
     }  
    rightDiv.style.backgroundImage = `url(${arrOfImg[i].url})`;
    i++;
  }, 3000);

  main.addEventListener("click", () => {
      clearInterval(Timer);
  })

  arrOfImg.map(img => {
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.className = "little-btn";
    button.innerHTML = "Full screen"; 

    button.addEventListener("click", () => {
      main.style.backgroundImage = `url(${img.url})`;
      const span = main.appendChild(document.createElement("span"));
      span.innerHTML = "X";
      span.classList.add("close-modal-style");
          
           span.addEventListener("click", () => {
                main.style.backgroundImage = "none";
                main.classList.remove("modal-style");
                leftDiv.style.display = "block";
                main.removeChild(span);
           })
      main.classList.add("modal-style");
      leftDiv.style.display = "none";
    });
    div.appendChild(button);
    let p = document.createElement("p");
        p.innerHTML = `${img.title}`;
        div.appendChild(p);
        div.classList.add("img-style");
        div.style.backgroundImage = `url(${img.url})`;
       
        div.addEventListener("click", () => {
            rightDiv.style.backgroundImage = `url(${img.url})`;
           
            btn.addEventListener("click", () => {
              main.style.backgroundImage = `url(${img.url})`;
              const span = main.appendChild(document.createElement("span"));
              span.innerHTML = "X";
              span.classList.add("close-modal-style");
                  
                   span.addEventListener("click", () => {
                        main.style.backgroundImage = "none";
                        main.classList.remove("modal-style");
                        rightDiv.style.display = "block";
                        leftDiv.style.display = "block";
                        main.removeChild(span);
                   })
              main.classList.add("modal-style");
              rightDiv.style.display = "none";
              leftDiv.style.display = "none";
            });
    })  
    leftDiv.appendChild(div);
  });
  

  
  
  
  