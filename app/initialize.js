function generateNum (min, max) {
	let randNumber = Math.floor(Math.random()*(max - min + 1)) + min;
	if (randNumber == max) {
		randNumber += generateNum(min, max);
	}
	return randNumber;
}
  

document.addEventListener('DOMContentLoaded', () => {
	// do your setup here
	console.log('Initialized app');
  
	const randArray = Array.from({length: 10}, () => generateNum(1, 50));

	const evenArray = [];
	const oddArray = [];

	let evenHtml = document.createElement('ul');
	let oddHtml = document.createElement('ul');
	randArray.forEach((number) => {
		const isEven = (number % 2);

		isEven ? evenArray.push(number) : oddArray.push(number);

		const li = document.createElement('li');
		li.appendChild(document.createTextNode(number.toString()));

		isEven ? evenHtml.appendChild(li) : oddHtml.appendChild(li);
    
	});
	document.getElementById('left').appendChild(evenHtml);
	document.getElementById('right').appendChild(oddHtml);

	console.log(evenArray, oddArray);


	// Last part
	const rand2Repeats = generateNum(1, 50);
	const rand3Repeats = generateNum(1, 50);
	let randArray2 = [];
	randArray2.push(rand2Repeats, rand2Repeats, rand3Repeats, rand3Repeats, rand3Repeats);

	// Genetate array withou repeating existing numbers
	while(randArray2.length < 10){
		var randomnumber = generateNum(1, 50);
		// If the number generated alrady exists on array continue and generate another one
		if(randArray2.indexOf(randomnumber) > -1) continue;
		randArray2.push(randomnumber);
	}

	// Sort generated array to put all duplicate numbers together
	const sorted_arr = randArray2.sort();

	const repeatedValues = [];
	for (var i = 0; i < randArray2.length - 1; i++) {
		if (sorted_arr[i + 1] == sorted_arr[i]) {

			const objIndex = repeatedValues.findIndex(obj => {
				return obj.number === sorted_arr[i];
			});
			
			// If exists in repeatedValues increment times option and continue to next value of randArray2
			if(objIndex !== -1)
			{
				repeatedValues[objIndex].times++;
				continue;
			}

			// If doesn't exists in repeatedValues create object and inject on them, the times start in 2 because when we found one repeated value we have 2 equal numbers
			repeatedValues.push({
				number: sorted_arr[i],
				times: 2, 
			});
		}
	}

	repeatedValues.forEach((obj) => {
		const h = document.createElement('H1');
		const t = document.createTextNode(`We found the number "${obj.number}" repeated "${obj.times}" time(s)`);
		h.appendChild(t);
		document.getElementById('second_part').appendChild(h);
	});
});

