
let dg = true
let da = false

let renderExecuted = false;
  let g = false;




function chek() {

document.getElementById("p1").style.backgroundColor = "rgba(0, 153, 255, 0.144)";
document.getElementById("p2").style.backgroundColor = "rgba(0, 153, 255, 0.144)";
document.getElementById("edi1").style.backgroundColor = "rgba(0, 153, 255, 0.144)";
document.getElementById("edi2").style.backgroundColor = "rgba(0, 153, 255, 0.144)";





    if (document.getElementById("edi1") && document.getElementById("edi2")) {
      const f =  document.getElementById("edi1");
      const f2 = document.getElementById("edi2");


 
      getips().then((ips) => {
        getip().then((ip) => {
          let b = JSON.parse(ips);
          const c = b.includes(ip);

          if (c) {
            
    
    
    
            g = true;
            f.style.display = "none";
            f2.style.display = "none";
            document.getElementById('w').style.display = "block";
            
          
            document.getElementById("p1").style.display = "none";
            document.getElementById("p2").style.display = "none";
            console.log('hide choice');
          }
        }).catch((error) => {
          console.error('Произошла ошибка при получении IP:', error);
        });
      }).catch((error) => {
        console.error('Произошла ошибка при получении IP:', error);
      });


      get("/state").then((data) => {
        let state = false;
        const gd = data.find(o => o.class === localStorage.class);

        if (gd) {
          if (gd.state == true) {
            
            state = true;
          } else if (gd.state == false) {
            state = false;
            f.style.display = "none";
            f2.style.display = "none";
          }
        } else {
          state = false;
        }

        if (!renderExecuted && state == true && g !== true) {
          render().then(() => {
            f2.style.display = "block";
            f.style.display = "block";
          }).catch((error) => {
            console.error(error);
          });
          renderExecuted = true;
        }

        if (state === false) {
          f.style.display = "none";
          f2.style.display = "none";
        }
      });
    }


}

async function get(url) {                                              
  try {                                              
    const response = await fetch(url);                                               
    if (!response.ok) {                                              
    console.log(response.status)       
    throw new Error(response.status)                                       
    }                                              
    const data = await response.json();                                              
    return data;                                               
  } catch (error) {                                              
    console.error(error);                                               
    throw new Error(error);                                               
  }                                              
 } 




 window.addEventListener('load', () => {



  render().then(()=>{
chek()
setInterval(chek,450)
  

  get("/state").then((data) => {
    let o = data.find(h => h.class === localStorage.class);

    if (!o) {
      get('/get_db').then((data) => {
        const n = data.find(f => f.class === localStorage.class);

        if (n) {
          if (n.za > n.nine) {
            const p1 = document.getElementById("p1");
            if (p1) {
              p1.style.display = "block";
            }
          } else if (n.nine > n.za) {
            const p2 = document.getElementById("p2");
            if (p2) {
              p2.style.display = "block";
            }
          } else {

    document.getElementById("w").style.display = "block";
    document.getElementById("w").innerHTML = "<p>Порцій однаково</p>";




          }
        }
      });
    } else {
      if (o.state === true) {
      }
    }
  });


})
});



async function addip(user) {
  getip().then((data)=>{
get('/get_db').then(clas => {
  const n = clas.find(g=>localStorage.class==g.class)

  if (n) {


fetch('/addValue', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body:  JSON.stringify({ value: data,user: user, nick: localStorage.nick, tgid: n.tg })
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.text();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });   }
  else {
    alert("Помилка 404")
  }
})


}).catch((error)=>{
console.log(error)
  })
}

async function getips() {
  try {
    const response = await fetch('/getips');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
 }

 

 async function getip() {
  try {
    const response = await fetch('/p');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data.ip; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
}



async function updateData(upd) {
  try {
    const response = await fetch(`/put_db/${upd._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upd),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}





async function addza() {
  document.getElementById("edi1").style.display = "none";
  document.getElementById("edi2").style.display = "none";

  addip(1);
  get('/get_db').then(async (data)=>{
    const itu = data.find(item => item.class == localStorage.class);    
    itu.za += 1;

    await updateData(itu);}
      
      )
  
    
}

async function addnine() {
  document.getElementById("edi1").style.display = "none";
  document.getElementById("edi2").style.display = "none";
  addip(2);
get('/get_db').then(async (data)=>{
  const itu = data.find(item => item.class === localStorage.class);    
  itu.nine += 1;
  await updateData(itu);}
    
    )

      

    }
    
    async function render() {
      return await fetch('/get_db')
        .then((response) => response.json())
        .then((res) => {

       
          const filteredData = res.filter((item) => item.class === localStorage.class);

          const htmlMarkup = filteredData.map((item) => {
            return `
            
            <div id="d">
            <div id='edi1' onclick="addza()"><p>${item.eat1}</p></div>
            <div id='edi2' onclick="addnine()"><p>${item.eat2}</p></div>



                <div id="w"><p>Ви вже проголусували</p></div>
                <div class="j" id='p1'><p>${item.eat1}</p></div>
                <div class="j" id='p2'><p>${item.eat2}</p></div>

            </div>

        `;
          }).join('');
    
          document.getElementById('content').innerHTML = htmlMarkup;
        });
    }
    