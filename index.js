function getLocalStorage() {
  console.info('getting information from local stroage...')
  const data = localStorage.getItem('data'); // JSON object that JS cannot read on its own
  console.log(typeof data);
  const parsedData = JSON.parse(data); // object that JS can read
  console.log(parsedData);
  return parsedData;
}

function setLocalStorage(data = []) {
  console.info('setting information to local stroage...');
  const hasData = getLocalStorage();
  if (hasData) {
    console.log('I have data in local storage!', hasData);
    for (let i = 0; 1 < hasData.data.length; i++) {
      const element = array[i];
      if(element.id === data[i].id) {
         console.error('');
      }
    }
  }
  // localStorage.setItem('data', data);
  // console.log(save);
  
};

const dataContainer = document.querySelector('#local-storage-container');
const formElem = document.querySelector('#search');
const clearBtn = document.querySelector('#clear');

function displayData(data) {

  const dataToDisplay = {
		"id": 1,
		data
  }

  const dataList = document.createElement('ul');
  dataList.textContent = dataToDisplay.data;
  dataContainer.append(dataList);
}

const jsonData = JSON.stringify({
	"data": [
		{
			"id": 2,
			"data": "my saved data"
		}
	]
});

const objData = {
  id: 2,
  content: "this is my other data"
}

function clearData() {
  for (let i = 0; i < dataContainer.children.length; i++) {
    const element = array[i];
    console.log(element);
    element.textContent = ''
  }
}

clearBtn.onclick

formElem.addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('submitting form...', event.target.children[1].value);
  displayData(event.target.children[1].value);
})