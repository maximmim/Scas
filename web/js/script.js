let dg = true
let da = false
const apiUrl = 'https://644ab0e4a8370fb32155be44.mockapi.io/Record';
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

     
 

document.addEventListener('DOMContentLoaded', () => {
let renderExecuted = false;                                              
let g = false;

render()



get("/state").then((data)=>{
  let o = data.find(h=>h.class===localStorage.class)
  
  
  if (!o) {
    get(apiUrl).then((data)=>{

  
      const n = data.find(f=>f.class==localStorage.class)
    if (n) {
      
    
      if (n.za>n.nine) {
        document.getElementById("p1").style.display = "block";
      }
      else if (n.nine>n.za) {
        document.getElementById("p2").style.display = "block";
      }
      else {
        
      }
    }
    })
  }
  
  else {
    if (o.state === true) {

    }
 
    }
})


setInterval(() => {                                              
if (document.getElementById("edi1") && document.getElementById("edi2")) {                                              
const f = document.getElementById("edi1");                                               
const f2 = document.getElementById("edi2");      



 get("/state").then((data) => {


    const gd = data.find(obj => obj.class === localStorage.class);

    if (gd && gd.state == true) {

    }
    
    else {

    }
  }); 

getips().then((ips) => {                                               
getip().then((ip) => {                                               

  let b = JSON.parse(ips)                                              
  const containsAInB = b.includes(ip);                                               

  if (containsAInB) {                                              
  g = true                                               
  f.style.display = "none"; 
  f2.style.display = "none";   
  document.getElementById('w').style.display = "block"                        
  console.log('hide choice')                                               
  }                                                

})                                               
 .catch((error) => {                                               
   console.error('Произошла ошибка при получении IP:', error);                                               
 });                                               
    
})                                               
.catch((error) => {                                              
  console.error('Произошла ошибка при получении IP:', error);                                              
});                                                    
    
                                              

get("/state").then((data)=>{

let state = false
const gd = data.find(obj => obj.class === localStorage.class);

if(gd) {


  if (gd.state== true) {
    state = true


  }
  else if (gd.state==false) {
    state = false;
    
    
    f.style.display = "none";
    f2.style.display = "none"; 
  }
}
else {
  state = false
}

        if (!renderExecuted && state === true && g !== true) {

    render().then(() => {

    f2.style.display = "block";
    f.style.display = "block"; 
    })
  .catch((error) => {
    console.error(error);
  });
          renderExecuted = true;
        }

        if (state === false) {
          f.style.display = "none";
          f2.style.display = "none"; 
          
          
        } 
})
    }
  
  }, 500);


});

async function addip(user) {
  getip().then((data)=>{


fetch('/addValue', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body:  JSON.stringify({ value: data,user: user })
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.text();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  }); 

}).catch((error)=>{
console.log(error)
  })
}

async function getips() {
  try {
    const response = await fetch('/getips');
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Произошла ошибка:', error);
    throw error; 
  }
 }

 

 async function getip() {
  try {
    const response = await fetch('/p');
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.ip; 
  } catch (error) {
    console.error('Произошла ошибка:', error);
    throw error; 
  }
}






async function updateData(updatedItem) {
  
    const response = await fetch(`${apiUrl}/${updatedItem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }


}

function awdf() {
    document.getElementById("edi1").style.display = "none";
    document.getElementById("edi2").style.display = "none";
}

async function addza() {
  awdf();
  addip(1);
  get(apiUrl).then(async (data)=>{
    const itemToUpdate = data.find(item => item.class === localStorage.class);    
    itemToUpdate.za += 1;
    await updateData(itemToUpdate);}
      
      )
  
    
}

async function addnine() {
  awdf();
  addip(2);
get(apiUrl).then(async (data)=>{
  const itemToUpdate = data.find(item => item.class === localStorage.class);    
  itemToUpdate.nine += 1;
  await updateData(itemToUpdate);}
    
    )

      

    }
    
    async function render() {
      return await fetch(apiUrl)
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
    
