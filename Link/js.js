function urlArg () { // записуємо функцію urlArg
	var args = {}; // створюємо перемінну з назвою args та записуємо в неї пустий обєкт
	/*getqueryfromurl*/var query = location.search.substring (1); // створюємо перемінну query та специфікуємо запит (частина адреси після знаку ?) на  всі url вікна і його компонентів і записуємо всі символи із одержаної строки
	var pairs = query.split("&"); // розділяємо отриману строку query - знаками "&"

	for (var i=0; i < pairs.length; i++) { // записуємо цикл for в якому створюємо перемінну і зі значенням 0. задаємо умову, що цикл повторюється до того моменту поки і менше довжини перемінної pairs, і кожен крок буде збільшувати перемінну і на "1";
		var pos = pairs[i].indexOf('='); // ств перемінну pos та записуємо в неї позицію на якій буде знаходитись символ "="ж
		if (pos === -1) continue; // задаємо перевірку, якщо рез-т перемінної pos буде рівнятись -1, то цикл продовжує діяти.
		var name = pairs[i].substring(0,pos); // створюємо перемінну namе, в яку запишеться та частина строки в яку входить все до позиції pos
		var value = pairs[i].substring(pos+1); // створюємо перемінну value, в яку запишеться та частина строки в яку входить все до позиції pos
		value = decodeURIComponent(value); //Замінює кожну escape-послідовність в закодованому value символом, який вона представляє.
		args[name] = value; // записуємо в перемінну args з параметром name, отриманну перемінну value;
	}

	return args; // повертаємо як результат функції args;
}

urlArg();

// Відозміненний //

function urlArg () { 
	var args = {}; 
	var pairs = decodeURIComponent(window.location.search.substring(1)).split('&');
	for (var i=0; i < pairs.length; i++) { // записуємо цикл for в якому створюємо перемінну і зі значенням 0. задаємо умову, що цикл повторюється до того моменту поки і менше довжини перемінної pairs, і кожен крок буде збільшувати перемінну і на "1";
		var pos = pairs[i].indexOf('='); // ств перемінну pos та записуємо в неї позицію на якій буде знаходитись символ "="ж
		if (pos === -1) continue; // задаємо перевірку, якщо рез-т перемінної pos буде рівнятись -1, то цикл продовжує діяти.
		var name = pairs[i].substring(0,pos); // створюємо перемінну namе, в яку запишеться та частина строки в яку входить все до позиції pos
		var value = pairs[i].substring(pos+1); // створюємо перемінну value, в яку запишеться та частина строки в яку входить все до позиції pos
		value = decodeURIComponent(value); //Замінює кожну escape-послідовність в закодованому value символом, який вона представляє.
		args[name] = value; // записуємо в перемінну args з параметром name, отриманну перемінну value;
	}

	return args; // повертаємо як результат функції args;
}

urlArg();
