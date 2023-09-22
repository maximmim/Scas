


document.addEventListener('DOMContentLoaded', () => {
  let renderExecuted = false;
  let g = false
      
setInterval(() => {
if (document.getElementById("edi1") && document.getElementById("edi2")) {
const f = document.getElementById("edi1");
const f2 = document.getElementById("edi2");
getips().then((ips) => {
getip().then((ip) => {

  let b = JSON.parse(ips)
  const containsAInB = b.includes(ip);

  if (containsAInB) {
  g = true
  f.style.display = "none";
  f2.style.display = "none"; 
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
     
async function get(url) {
  try {
    const response = await fetch(url);
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


get("/state").then((data)=>{

let state = false
const gd = data.find(obj => obj.class === localStorage.class);

if(gd) {
  if (gd.state== true) {
    state = true
  }
  else if (gd.state==false) {
    state = false
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
    return response.text(); // Вернет текст, который можете использовать для подтверждения
  })
  .then((message) => {
    console.log(message); // Это сообщение будет "Значение успешно добавлено в массив."
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






const queryParams = new URLSearchParams(window.location.search);

if (queryParams.get("encodedData") == null) {

} else {
  const decodedData = JSON.parse(decodeURIComponent(queryParams.get("encodedData")));
  localStorage.class = decodedData.class;

}

const dataToEncode = { "class": '7-М' };
const encodedData = encodeURIComponent(JSON.stringify(dataToEncode));

const currentUrl = window.location.href;
const urlWithEncodedData = `${currentUrl}?encodedData=${encodedData}`;

console.log(urlWithEncodedData);


const apiUrl = 'https://644ab0e4a8370fb32155be44.mockapi.io/Record';


async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Помилка ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка ', error);
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
      throw new Error(`Помилка запроса ${response.status}`);
    }


}

async function addza() {
  const data = await fetchData();
  addip(1)
  const itemToUpdate = data.find(item => item.class === localStorage.class);
  
    itemToUpdate.za += 1;
    await updateData(itemToUpdate);
    await render()
}

async function addnine() {
    const data = await fetchData();
    addip(2)
    const itemToUpdate = data.find(item => item.class === localStorage.class);
  
      itemToUpdate.nine += 1;
      await updateData(itemToUpdate);
      await render() 
    }
    async function render() {
      return await fetch(apiUrl)
        .then((response) => response.json())
        .then((res) => {

    
          const filteredData = res.filter((item) => item.class === localStorage.class);
    
          const htmlMarkup = filteredData.map((item) => {
            return `

            <div id="d">
                <p>Виберіть їжу</p>
                <p id='edi1' onclick="addza()">-${item.eat1}</p>
                <p id='edi2' onclick="addnine()">-${item.eat2}</p>
                <p>За перше ${item.za}</p>
                <p>За друге ${item.nine}</p>
                <p>${item.class}</p>
            </div>

        `;
          }).join('');
    
          document.getElementById('content').innerHTML = htmlMarkup;
        });
    }
    
render()
