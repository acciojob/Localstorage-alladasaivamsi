const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
	const inputText = document.querySelector('input');
  const items = [];
	let index=0;
	function itemsAdded(event){
		event.preventDefault()
		
		items.push(inputText.value)
			let data=`<li><input type="checkbox" data-index=${index} id="item${index}" ${inputText.value.done ? 'checked' : ''} /><label for="item${index}">${inputText.value}</label></li>`
			itemsList.innerHTML+=data
			localStorage.setItem(`item${index}`,data)
			let convertor=JSON.stringify(itemsList)
			console.log(localStorage.getItem(`item${index}`))
			index++
	}
	function checkedOrNot(e) {
		e.target.setAttribute("checked",inputText.value.done ? 'checked' : '')
	}
	itemsList.addEventListener('click',checkedOrNot)