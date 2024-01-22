// const tree = {
// 	value: 1,
// 	children: [
// 		{
// 			value: 2,
// 			children: [{value: 3}],
// 		},
// 		{
// 			value: 4,
// 			children: [{value: 5}, {value: 6}],
// 		},
// 	],
// };
// function getValues(tree) {
// 	const stack = [tree];
// 	const result = [];
// 	while (stack.length > 0) {
// 		const node = stack.pop();
// 		if (node.value !== undefined) {
// 			result.push(node.value);
// 		}
// 		if (node.children?.length) {
// 			stack.push(...node.children);
// 		}
// 	}
// 	return result;
// }

// console.log(getValues(tree));

// value[1,4,6,5,2,3]
// stack[
// ];

// function openOrSenior(data) {
// 	const result = [];
// 	for (const arr of data) {
// 		if (arr[0] >= 55 && arr[1] > 7) {
// 			result.push("Senior");
// 		} else {
// 			result.push("Open");
// 		}
// 	}
// 	return result;
// }

// console.log(
// 	openOrSenior([
// 		[45, 12],
// 		[55, 21],
// 		[19, -2],
// 		[104, 20],
// 	]),
// );

// const a = {
// 	a: {b: 10},
// 	c: {d: 16},
// };

// a.map(a => a.a);

// console.log("i".repeat(10));

// function pow(x, n) {
// 	let result = 1;

// 	// множимо result на x n разів в циклі
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }

// console.log(pow(2, 2));

// function pow(x, n) {
// 	if (n == 1) {
// 		return x;
// 	} else {
// 		console.log(x * pow(x, n - 1));
// 		return x * pow(x, n - 1);
// 	}
// }

// console.log(pow(2, 3));

// function gcd(a, b) {
// 	if (b !== 0) {
// 		const c = a % b;
// 		return gcd(b, c);
// 	}
// 	return a;
// }
// console.log(gcd(75, 40));

// function num(a, b) {
// 	let c = [];
// 	for (let i = a + 1; i < b; i += 1) {
// 		c.push(i);
// 	}

// 	return c;
// }
// console.log(num(10, 18));

// function num(a, b) {
// 	if (b === a) {
// 		return a;
// 	}

// 	return 1 + num(a, b - 1);
// }

// console.log(num(10, 18));

// const tree = [{value: 1}, {children: [{value: 2}, {value: 3, children: [{value: 4}]}]}];

// function getValues(tree) {
// 	const result = [];
// 	let stack = tree;
// 	while (stack.length > 0) {
// 		const slice = stack.pop();
// 		console.log(slice);
// 		if (slice.value !== undefined) {
// 			result.push(slice.value);
// 		}
// 		if (slice.children?.length > 0) {
// 			stack.push(...slice.children);
// 		}
// 	}
// 	return result;
// }

// console.log(getValues(tree));

// const tree = [
// 	{value: 1, children: [{value: 2}, {value: 3, children: [{value: 4}]}]},
// 	{value: 5, children: [{value: 6, children: [{value: 7}, {value: 8}, {value: 9, children: [{value: 10}]}]}]},
// ];
// function getValues(tree) {
// 	const result = [];
// 	const stack = tree;

// 	while (stack.length > 0) {
// 		const chunk = stack.pop();
// 		if (chunk.value !== undefined) {
// 			result.push(chunk.value);
// 		}
// 		if (chunk.children?.length > 0) {
// 			stack.push(...chunk.children);
// 		}
// 	}
// 	return result;
// 	// body
// }
// console.log(getValues(tree));

// function countPositivesSumNegatives(input) {
// 	if (input === null || input.length === 0) {
// 		return [];
// 	}
// 	const value = input.reduce(
// 		(acc, item) => {
// 			if (item > 0) {
// 				acc.value += 1;
// 			} else if (item < 0) {
// 				acc.sum += item;
// 			}
// 			return acc;
// 		},
// 		{sum: 0, value: 0},
// 	);
// 	return [value.value, value.sum];
// }

// console.log(countPositivesSumNegatives([]));
// function a(x) {
// 	const y = String(x);
// }
// a(52);

// var mergeTwoLists = function (list1, list2) {
// 	const list3 = list1.concat(list2);
// 	let list = new ListNode();
// 	console.log(list);
// 	return list3.sort();
// };
// console.log(mergeTwoLists([], []));

// var findMedianSortedArrays = function (nums1, nums2) {
// 	const merge = [...nums1, ...nums2];
// 	const sum = merge.reduce(
// 		(acc, number) => {
// 			acc.sum += number;
// 			acc.items += 1;
// 			return acc;
// 		},
// 		{sum: 0, items: 0},
// 	);
// 	return sum.sum / sum.items;
// };
// console.log(findMedianSortedArrays([1, 3], [2, 7]));

// function squareSum(numbers) {
// 	const powedNumbers = numbers.reduce((acc, number) => {
// 		// const pow = Math.pow(number, 2);
// 		acc += Math.pow(number, 2);
// 		return acc;
// 	}, 0);
// 	console.log(powedNumbers);
// }

// console.log(squareSum([1, 2, 2]));

// function getCount(str) {
// 	const vovels = ["a", "e", "i", "o", "u"];
// 	const wordArr = str.split("");
// 	const length = wordArr.reduce((acc, letter) => {
// 		vovels.includes(letter) ? (acc += 1) : 0;
// 		return acc;
// 	}, 0);
// 	return length;
// }

// getCount("abracadabra");

// function highAndLow(numbers) {
// 	const numArr = numbers.split(" ").map(num => Number(num));
// 	return [String(Math.max(...numArr)), String(Math.min(...numArr))].join(" ");
// }

// console.log(highAndLow("1 2 3 4 5"));

// function digitize(n) {
// 	const reversStr = String(n).split("").reverse();
// 	return reversStr.map(num => Number(num));
// }

// console.log(digitize(35231));

// const isPalindrome = word => word.split("").reverse().join("") === word;
// console.log(isPalindrome("анона"));
// console.log(isPalindrome("шалаш"));

// function minMax(arr) {
// 	const value = arr.reduce(
// 		(acc, n) => {
// 			if (acc.min < n) {
// 				acc.max = n;
// 			} else if (acc.max > n) {
// 				acc.min = n;
// 			}
// 			return acc;
// 		},
// 		{min: arr[0], max: arr[0]},
// 	);
// 	return [value.min, value.max];
// }

// console.log(minMax([2334454, 5]));

// function getMiddle(s) {
// 	const length = s.split("").length;
// 	if (length % 2 === 0) {
// 		return s[length / 2 - 1] + s[length / 2];
// 	} else if (length % 2 !== 0) {
// 		return s[Math.floor(length / 2)];
// 	}
// }

// console.log(getMiddle("testing"));

// function positiveSum(arr) {
// 	return arr.reduce((a, n) => {
// 		if (n > 0) {
// 			a += n;
// 		}
// 		return a;
// 	}, 0);
// }

// console.log(positiveSum([1, -2, 3, 4, 5]));

// function high(x) {
// 	const arr = x.split(" ");
// }

// console.log(high("man i cc need a taxi up to ubud"));

// const shortestWord = text => {
// 	return text.split(" ").sort((a, b) => b.length - a.length)[0];
// };

// console.log(shortestWord("the smallest word in sentence"));

// const init = text => {
// 	// const arr = text.split(" ");
// 	// return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
// 	// const wArr = arr.map(w => w.split("").splice(0, 1).join("").toUpperCase());
// 	// return wArr.join(".");
// 	return text
// 		.split(" ")
// 		.map(a => a.slice(0, 1).toUpperCase() + ".")
// 		.join("");
// };

// console.log(init("eelon mask"));

// const sum = n =>
// 	Math.abs(n)
// 		.toString()
// 		.split("")
// 		.reduce((acc, cur) => {
// 			return +acc + +cur;
// 		}, 0);
// console.log(sum(-18));

// function high(x) {
// 	const a = 1;
// 	const b = 1;
// 	const c = 1;
// 	const arr = x.split(" ");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].includes("a")) {
// 		}
// 	}
// }

// console.log(high("manb i need a taxi up to ubud"));

// function feast(beast, dish) {
// 	const a = beast.split("");
// 	const b = dish.split("");
// 	if (a[0] === b[0] && a[a.length - 1] === b[b.length - 1]) {
// 		return true;
// 	}
// 	return false;
// }

// console.log(feast("great blue heron", "garlic naan"));

// function printerError(s) {
// 	const issues = s.split("").reduce(
// 		(a, l) => {
// 			a.q += 1;
// 			l.charCodeAt() > "m".charCodeAt() ? (a.e += 1) : (a.e += 0);
// 			return a;
// 		},
// 		{e: 0, q: 0},
// 	);
// 	return `${issues.e}/${issues.q}`;
// }

// console.log(printerError("aaabbbbhaijjjm"));

// function splitToDigits(number) {
// 	const digits = [];
// 	while (number) {
// 		digits.push(number % 10);
// 		console.log(digits.push(number % 10));
// 		number = Math.floor(number / 10);
// 	}

// 	return digits;
// }
// console.log(splitToDigits(261));

// const expandedForm = a => {
// 	const arr = a
// 		.toString()
// 		.split("")
// 		.reverse()
// 		.reduce(
// 			(acc, number) => {
// 				if (number != 0) {
// 					acc.newArr.push(number * acc.n);
// 					acc.n *= 10;
// 				} else {
// 					acc.n *= 10;
// 				}

// 				return acc;
// 			},
// 			{
// 				n: 1,
// 				newArr: [],
// 			},
// 		);

// 	return arr.newArr.reverse().join(" + ");
// 	// let n = 1;
// 	// const newArr = [];
// 	// for (let i = 0; i < arr.length; i++) {
// 	// 	newArr.push(arr[i] * n);
// 	// 	n *= 10;
// 	// }
// 	// const sum = newArr.reverse().filter(number => {
// 	// 	if (number !== 0) {
// 	// 		return number;
// 	// 	}
// 	// });
// 	// console.log(sum.join("+"));
// };

// console.log(expandedForm(70304));

// function updateLight(current) {
// 	switch (current) {
// 		case "green":
// 			return "yellow";
// 		case "yellow":
// 			return "red";
// 		case "red":
// 			return "green";
// 		default:
// 			return;
// 	}
// }

// console.log(updateLight("green"));
// const number = array => {
// 	return array.map((el, i) => `${i + 1}: ${el}`);
// };

// console.log(number([]));

// function isIsogram(str) {
// 	const idx = str.toLowerCase().split("");

// 	for (let i = 0; i < idx.length; i++) {
// 		for (let j = i + 1; j < idx.length; j++) {
// 			if (idx[i] === idx[j]) {
// 				return false;
// 			}
// 			return true;
// 		}
// 	}
// }

// console.log(isIsogram("abc"));

// function removeEveryOther(arr) {
// 	return arr.filter((el, i) => {
// 		if (i % 2 === 0) {
// 			return el;
// 		}
// 		return;
// 	});
// }

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

// function getAge(inputString) {
// 	return Number(inputString[0]);
// }
// console.log(getAge("4 years old"));

// function cockroachSpeed(s) {
// 	return Math.round(((s * 1000) / 3600) * 100);
// }

// console.log(cockroachSpeed(3.913106244934787));

// function findEvenIndex(arr) {
// 	let ls = 0;
// 	let rs = arr.reduce((a, n) => (a += n), 0);
// 	console.log(rs);

// 	for (let i = 0; i < arr.length; i++) {
// 		rs -= arr[i];
// 		console.log("rs", rs);
// 		if (rs === ls) return i;
// 		ls += arr[i];
// 		console.log("ls", ls);
// 		console.log("--------------------------------");
// 	}
// 	return -1;
// }

// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));

// console.log(doubleChar("Abcd"));

// console.log(basicOp("-", 4, 7));

// function likes(names) {
// 	let restUsers = names.slice(2);
// 	if (names.length === 0) {
// 		return "no one likes this";
// 	}
// 	if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	}
// 	if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`;
// 	}
// 	if (names.length === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	}
// 	if (names.length > 3) {
// 		return `${names[0]}, ${names[1]} and ${restUsers.length} others like this`;
// 	}
// }

// console.log(likes(["peter", "peter", "peter", "peter", "peter", "peter"]));

// console.log(parseInt("0110", 2));
// console.log(Number);

// function solution(string) {
// 	const arr = string.split("");
// 	let a = [...arr];
// 	console.log(a);
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i] === a[i].toUpperCase()) {
// 			a.splice(i, 0, " ");
// 			i += 1;
// 			console.log(i);
// 		}
// 	}
// 	return a.join("");
// }

// function solution(string) {
// 	const a = string.split("");
// 	console.log(a.length);
// 	return a
// 		.map(l => {
// 			if (l === l.toUpperCase()) {
// 				return (l = " " + l);
// 			}
// 			return l;
// 		})
// 		.join("");
// }

// function solution(string) {
// 	return string
// 		.split("")
// 		.map(l => {
// 			return l === l.toUpperCase() ? ` ${l}` : l;
// 		})
// 		.join("");
// }

// console.log(solution("camelCasingE"));

// const path = require("path");

// console.log(path.resolve("../../Sekiro Shadows Die Twice by xatab/autorun.inf"));

// const fs = require("fs");
// const path = require("path");

// fs.readFile(path.resolve("./index.html"), "utf-8")
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

// console.log(1231321);

// let factorial = function calcFactorial(n) {
// 	if (n !== 1) {
// 		return calcFactorial(n - 1) * n;
// 	}
// 	return n;
// };

// function logResultDecorator(f, funcName) {
// 	return function () {
// 		const result = f.apply(this, arguments);
// 		console.log(`Результата функції ${funcName}: ${result}`);
// 		return result;
// 	};
// }

// function callCountDecorator(f, funcName) {
// 	let count = 0;
// 	return function () {
// 		count += 1;
// 		console.log(`Функція ${funcName} була викликана ${count} разів`);
// 		return f.apply(this, arguments);
// 	};
// }

// factorial = logResultDecorator(factorial, "factorial");
// factorial = callCountDecorator(factorial, "factorial");

// factorial(6);
// factorial(7);

// "Задачі для Інтерв'ю"

// --------------------------------------------------------------------------------------
// 1. Перевірка на паліндром

// const isPalindrome = word => {
// 	return word === word.split("").reverse().join("").toLowerCase();
// };

// isPalindrome("шалаш");
// --------------------------------------------------------------------------------------
// 2. Пошук найкоротшого слова

// const shortestWord = sentence => {
// 	const word = sentence.split(" ").sort((a, b) => a.length - b.length)[0];
// 	console.log(word);
// };

// shortestWord("I'am not a student");
// --------------------------------------------------------------------------------------
// 3. Створення ініціалів

// const toInitials = name => {
// 	console.log(
// 		name
// 			.split(" ")
// 			.map(el => `${el.slice(0, 1).toUpperCase()}.`)
// 			.join(""),
// 	);
// };

// toInitials("Тунків Роман Олександрович");
// --------------------------------------------------------------------------------------
// 4. Сумма всіх цифер числа

// const summ = number => {
// 	console.log(
// 		Math.abs(number)
// 			.toString()
// 			.split("")
// 			.reduce((acc, n) => {
// 				const w = parseInt(n);
// 				acc += +w;
// 				return acc;
// 			}, 0),
// 	);
// };

// summ(10442);
// --------------------------------------------------------------------------------------
// 5. Пошук мінімального і максимального значення в масиві

// const minMax = arr => {
// 	const value = arr.sort((a, b) => a - b);
// 	console.log([value[0], value[value.length - 1]]);
// };

// const minMax = arr => {
// 	console.log([Math.min(...arr), Math.max(...arr)]);
// };

// minMax([14, 12, 1, 2, 3]);
// --------------------------------------------------------------------------------------
// 6. Створення дублікатів символів строки

// const accum = str => {
// 	console.log(
// 		str
// 			.toUpperCase()
// 			.split("")
// 			.map((el, index) => {
// 				return (el += el.repeat(index).toLowerCase());
// 			})
// 			.join("-"),
// 	);
// };

// accum("abcdefg");
// --------------------------------------------------------------------------------------
// 7. Повернення індексів великих букв строки
// const capitals = str => {
// 	let letters = [];
// 	str.split("").forEach((el, index) => {
// 		if (el === el.toUpperCase()) {
// 			letters.push(index);
// 		}
// 	});
// 	console.log(letters);
// };

// const capitals = str => {
// 	const letters = str.split("").reduce((result, el, index) => {
// 		if (el === el.toUpperCase()) {
// 			result.push(index);
// 		}
// 		return result;
// 	}, []);
// 	console.log(letters);
// };

// capitals("CodEWaRs");
// --------------------------------------------------------------------------------------
// 8. Функція виводу чисел і слів замість чисел з певною кратністю
// const fooBar = num => {
// 	for (let i = 1; i <= num; i++) {
// 		if (i % 5 === 0 && i % 3 === 0) {
// 			console.log("fooBar");
// 		} else if (i % 3 === 0) {
// 			console.log("foo");
// 		} else if (i % 5 === 0) {
// 			console.log("bar");
// 		} else {
// 			console.log(i);
// 		}
// 	}
// };

// fooBar(15);
// --------------------------------------------------------------------------------------
// 9. Повернення унікальних значень з декількох масивів
// function unitUnique() {
// 	const arr = [...arguments];
// 	const newArr = arr.reduce((acc, el) => {
// 		acc.push(...el);
// 		return acc;
// 	}, []);

// 	const unique = newArr.reduce((acc, el) => {
// 		if (!acc.includes(el)) {
// 			acc.push(el);
// 		}
// 		return acc;
// 	}, []);

// 	console.log(unique);
// }

// function unitUnique() {
// 	const arr = [...arguments];
// 	const newArr = arr.reduce((acc, el) => {
// 		acc.push(...el);
// 		return acc;
// 	}, []);

// 	const result = new Set(newArr);

// 	console.log([...result]);
// }

// const unitUnique = (...arr) => {
// 	const newArr = arr.reduce((acc, el) => {
// 		acc.push(...el);
// 		return acc;
// 	}, []);

// 	const result = new Set(newArr);

// 	console.log([...result]);
// };

// const unitUnique = (...arr) => {
// 	console.log([...new Set(arr.flat())]);
// };

// unitUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5], [14]);
// --------------------------------------------------------------------------------------
// 10. Функція форматування чисел в телефонний номер

// const createPhoneNumber = num => {
// 	const n = num.toString();
// 	console.log(`(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}`);
// };

// const createPhoneNumber = num => {
// 	const n = num.toString();
// 	console.log(`(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 9)}`);
// };

// createPhoneNumber(555095611);
// --------------------------------------------------------------------------------------
// 11. Функція пошуку голосних букв в строці
// const findVovels = str => {
// 	const englishVowels = ["a", "o", "u", "e", "i", "y"];
// 	const ukrainianVowels = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"];

// 	const result = str
// 		.toLowerCase()
// 		.split("")
// 		.reduce((acc, el) => {
// 			if (englishVowels.includes(el)) {
// 				acc++;
// 			} else if (ukrainianVowels.includes(el)) {
// 				acc++;
// 			}

// 			return acc;
// 		}, 0);

// 	console.log(result);
// };

// const findVovels = str => {
// 	const matches = str.match(/[aeiouyаеєиіїоуюя]/gi);
// 	console.log(matches ? matches.length : 0);
// };

// findVovels("Hello WOrld");
// --------------------------------------------------------------------------------------
// 12. Трансформція кожної першої букви строки в UpperCase
// const toCapitalizeString = str => {
// 	const result = str.split(" ").map(el => {
// 		return el.charAt(0).toUpperCase() + el.slice(1);
// 	});

// 	console.log(result.join(" "));
// };

// toCapitalizeString("My name is roman");
// --------------------------------------------------------------------------------------
// 13. Порахувати скільки разів елемент зустрічається в масиві
// const fruits = ["orange", "kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

// const countFruits = () => {
// 	return fruits.reduce((acc, el) => {
// 		if (acc[el]) {
// 			acc[el]++;
// 		} else {
// 			acc[el] = 1;
// 		}
// 		return acc;
// 	}, {});
// };

// console.log(countFruits());
// --------------------------------------------------------------------------------------
// 14. Створити масив з унікальними значеннями
// const fruits = ["orange", "kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

// const unique = () => {
// 	return [...new Set(fruits)];
// };

// const unique = () => {
// 	return fruits.reduce((acc, el) => {
// 		if (!acc.includes(el)) {
// 			acc.push(el);
// 		}
// 		return acc;
// 	}, []);
// };

// const unique = () => {
// 	return Object.keys(
// 		fruits.reduce((acc, el) => {
// 			acc[el] = 1;
// 			return acc;
// 		}, {}),
// 	);
// };

// console.log(unique());
// --------------------------------------------------------------------------------------
// 15. Функція групування студентів по віку
// const students = [
// 	{name: "Roman", age: 29},
// 	{name: "Misha", age: 28},
// 	{name: "Volodja", age: 59},
// 	{name: "Sasha", age: 29},
// ];

// const group = arr => {
// 	return arr.reduce((acc, el) => {
// 		if (acc[el.age]) {
// 			acc[el.age].push(el);
// 		} else {
// 			acc[el.age] = [el];
// 		}
// 		return acc;
// 	}, {});
// };

// console.log(group(students));
// --------------------------------------------------------------------------------------
// 16. Сума чисел з масиву
// const numbers = [4, 5, 5, -4, 8, 11, 1, -1, 6];
// const sum = 10;

// const count = (arr, s) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === s) {
// 				return [arr[i], arr[j]];
// 			}
// 		}
// 	}

// 	return [];
// };

// console.log(count(numbers, sum));
// --------------------------------------------------------------------------------------
// 17. Отримати єдиний масив з масиву об'єктів
// const friends = [
// 	{name: "alex", pizzas: ["cheese", ["papperoni"]]},
// 	{name: "mike", pizzas: ["salami", "margarita"]},
// 	{name: "alex", pizzas: ["meat"]},
// 	{name: "alex", pizzas: ["fish"]},
// ];

// const pizzaList = arr => {
// const list = [];

// arr.forEach(i => list.push(i.pizzas));

// return list.flat(Infinity);
// };

// const pizzaList = arr => {
// 	return arr.flatMap(i => i.pizzas).flat();
// };

// const pizzaList = arr => {
// 	return arr
// 		.reduce((acc, i) => {
// return [...acc, ...i.pizzas];

// acc.push(...i.pizzas);
// return acc;
// 		}, [])
// 		.flat();
// };

// console.log(pizzaList(friends));
// --------------------------------------------------------------------------------------
// 17. Записати символи строки навпаки
// const reverseString = str => {
// 	return str.split("").reverse().join("");
// };

// const reverseString = str => {
// 	const reverse = [];

// 	for (let i = 0; i < str.length; i++) {
// 		reverse.unshift(str[i]);
// 	}
// 	return reverse.join("");
// };
// console.log(reverseString("pizza"));
// --------------------------------------------------------------------------------------
// Відняти один масив від іншого
// const arrayDiff = (a, b) => {
// 	return a.filter(item => !b.includes(item));
// };

// console.log(arrayDiff([1, 2, 2], [2]));
// --------------------------------------------------------------------------------------
// Знайти наступний ідеальний квадрат числа
// const sqrt = n => (Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1);
// console.log(sqrt(121));
// --------------------------------------------------------------------------------------
// Витягаємо унікальне число з масива з усіма однаковими числами крім одного
// const stray = numbers => {
// 	const a = numbers.filter(i => {
// 		if (numbers.indexOf(i) === numbers.lastIndexOf(i)) {
// 			return i;
// 		}
// 	});

// 	return a[0];
// };

// console.log(stray([3, 1, 1]));
// --------------------------------------------------------------------------------------
// Підраховуємо кількість букв в строці
// const count = string => {
// 	if (!string) {
// 		return {};
// 	}
// 	return string.split("").reduce((acc, el) => {
// 		if (acc[el]) {
// 			acc[el] += 1;
// 		} else {
// 			acc[el] = 1;
// 		}
// 		return acc;
// 	}, {});
// };

// console.log(count(""));
// --------------------------------------------------------------------------------------
// Підраховуємо кількість символів що повторюються

// const duplicateCount = text => {
// 	const arr = text.toLowerCase().split("");
// 	const counted = arr.reduce((acc, el) => {
// 		if (acc[el]) {
// 			acc[el] += 1;
// 		} else {
// 			acc[el] = 1;
// 		}
// 		return acc;
// 	}, {});
// 	return Object.values(counted).filter(i => i > 1).length;
// };

// console.log(duplicateCount("aabbcde"));
// --------------------------------------------------------------------------------------
// Послідовність фібоначчі
// const fibonacci = n => {
// 	const result = [0, 1];

// 	for (let i = 2; i <= n; i++) {
// 		result.push(result[i - 1] + result[i - 2]);
// 	}

// 	return result;
// };

// console.log(fibonacci(7));
// --------------------------------------------------------------------------------------
// Послідовність трібоначчі
// const tribonacci = (signature, n) => {
// 	if (n === 0) {
// 		return [];
// 	}

// 	if (n < 3) {
// 		return [signature[n - 1]];
// 	}

// 	for (let i = 3; i < n; i++) {
// 		signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
// 	}

// 	return signature;
// };

// console.log(tribonacci([6, 5, 1], 3));
// --------------------------------------------------------------------------------------
// Відсортувуємо непарні числа в масиві. Парні мають залишитися на своїх місцях
// const sortArray = arr => {
// 	const odd = arr.filter(x => x % 2 !== 0).sort((a, b) => a - b); [3,5]
// 	return arr.map(x => (x % 2 ? odd.shift() : x));
// };

// const sortArray = arr => {
// 	const odd = arr.filter(el => el % 2 !== 0).sort((a, b) => b - a);
// 	return arr.map(el => {
// 		if (el % 2 === 0) {
// 			return el;
// 		} else {
// 			return odd.pop();
// 		}
// 	});
// };

// console.log(sortArray([5, 8, 6, 3, 4]));
// --------------------------------------------------------------------------------------
// Виводимо перші букви слів в upperCase крім слів що знаходяться в масиві винятків
// function titleCase(title, minorWords) {
// 	const lowerWords = minorWords ? minorWords.toLowerCase().split(" ") : [];

// 	const result = title
// 		.toLowerCase()
// 		.split(" ")
// 		.map(el => {
// 			return lowerWords.includes(el) ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1);
// 		})
// 		.join(" ");

// 	return !result.length ? "" : result.charAt(0).toUpperCase() + result.slice(1);
// }

// console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
// --------------------------------------------------------------------------------------
// Повертаємо індекс середнього числа
// function gimme(triplet) {
// 	return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
// }

// console.log(gimme([247, 3, 195]));
// --------------------------------------------------------------------------------------
// function longest(s1, s2) {
// 	return [...new Set([...s1, ...s2])].sort().join("");
// }

// console.log(longest("aretheyhere", "yestheyarehere"));
// --------------------------------------------------------------------------------------
// Сортування методом бульбашки
// const array = ["pyton", "asembler", "java", "c++", "haskel", "ruby"];

// for (let i = 0; i < array.length; i++) {
// 	for (let j = i + 1; j < array.length; j++) {
// 		if (array[i] > array[j]) {
// 			const temp = array[i];

// 			array[i] = array[j];
// 			array[j] = temp;
// 		}
// 	}
// }

// console.log(array);
// --------------------------------------------------------------------------------------
"Перемноження чисел до того моменту доки їхній добуток не буде номером. Потрібно вивести скільки разів перемножилося число";
"Моє розв'язання";
// function persistence(num) {
// 	const integers = num.toString().split("");
// 	let count = 0;
// 	let sum;

// 	if (integers.length === 1) {
// 		return 0;
// 	} else {
// 		const value = integers.reduce((acc, i) => {
// 			acc = acc * Number(i);
// 			return acc;
// 		}, 1);

// 		count += 1;
// 		sum = value.toString();

// 		while (sum.length !== 1) {
// 			const nextTimeValue = sum.split("").reduce((acc, i) => {
// 				acc = acc * Number(i);
// 				return acc;
// 			}, 1);

// 			count += 1;
// 			sum = nextTimeValue.toString();
// 		}
// 	}

// 	return count;
// }
"Розв'язання з codewars 1";
// function persistence(num) {
// 	var times = 0;
// 	num = num.toString();
// 	while (num.length > 1) {
// 		times++;
// 		num = num
// 			.split("")
// 			.map(Number)
// 			.reduce((a, b) => a * b)
// 			.toString();
// 	}
// 	return times;
// }

// console.log(persistence(999));
"Розв'язання з codewars 2";
// function persistence(num) {
// 	for (var i = 0; num > 9; i++) {
// 		num = num
// 			.toString()
// 			.split("")
// 			.reduce((t, c) => c * t);
// 	}
// 	return i;
// }

// console.log(persistence(999));

"--------------------------------------------------------------------------------------";
"Повертає наступне число кратне 5";
"Моє розв'язання";
// function roundToNext5(n) {
// 	for (let i = 0; n % 5; i++) {
// 		n = n + 1;
// 	}
// 	return n;
// }
"Розв'язання з codewars 1 (Рекурсія)";
// function roundToNext5(n) {
// 	if (!(n % 5)) {
// 		return n;
// 	}
// 	return roundToNext5(n + 1);
// }
"Розв'язання з codewars 2";
// function roundToNext5(n) {
// 	return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(1));

"--------------------------------------------------------------------------------------";
"Створює масив від 1 до заданого числа";
"Моє розв'язання";
// const reverseSeq = n => {
// 	const result = [];

// 	while (n) {
// 		result.push(n);
// 		n--;
// 	}
// 	return result;
// };

("Моє розв'язання (Рекурсія)");
// const reverseSeq = (n, result = []) => {
// 	if (n) {
// 		result.push(n);
// 		return reverseSeq(n - 1, result);
// 	} else {
// 		return result;
// 	}
// };

("Розв'язання з codewars 1 ");
// const reverseSeq = n => {
// 	return Array(n)
// 		.fill(0)
// 		.map((e, i) => n - i);
// };

// console.log(reverseSeq(5));
("--------------------------------------------------------------------------------------");
("Множення функціями за допомогою замикання");
("Розв'язання з codewars 1 ");
// const zero = a => (a ? a(0) : 0);
// const one = a => (a ? a(1) : 1);
// const two = a => (a ? a(2) : 2);
// const three = a => (a ? a(3) : 3);
// const four = a => (a ? a(4) : 4);
// const five = a => (a ? a(5) : 5);
// const six = a => (a ? a(6) : 6);
// const seven = a => (a ? a(7) : 7);
// const eight = a => (a ? a(8) : 8);
// const nine = a => (a ? a(9) : 9);

// const plus = a => b => a + b;
// const minus = a => b => b - a;
// const dividedBy = a => b => Math.floor(b / a);
// const times = a => b => a * b;

// console.log(two(times(eight())));
("--------------------------------------------------------------------------------------");
("Повертає з масиву тільки веселі смайли");
("Моє розв'язання");
// function countSmileys(arr) {
// 	const regExp = /^(?!.*(.).*\1)[:;~\)D-]+$/;
// 	const eyes = [":", ";"];
// 	const nose = ["-", "~"];
// 	const mouth = [")", "D"];

// 	return arr.length
// 		? arr.filter(e => {
// 				if (regExp.test(e) && e.length <= 3) {
// 					if (e.length > 2 && eyes.includes(e[0]) && nose.includes(e[1]) && mouth.includes(e[2])) {
// 						return e;
// 					} else if (eyes.includes(e[0]) && mouth.includes(e[1])) {
// 						return e;
// 					}
// 				}
// 		  })
// 		: 0;
// }
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
("Моє розв'язання (Рекурсія)");
// function countSmileys(arr, i = 0, result = []) {
// 	const regExp = /^[:;][-~]?[)D]$/;

// 	if (i >= arr.length) {
// 		return result;
// 	}

// 	if (regExp.test(arr[i])) {
// 		result.push(arr[i]);
// 		return countSmileys(arr, i + 1, result);
// 	}

// 	return countSmileys(arr, i + 1, result);
// }
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
("Моє розв'язання (Цикл з мутуванням оригінального масиву)");
// function countSmileys(arr) {
// 	const regExp = /^[:;][-~]?[)D]$/;

// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		if (!regExp.test(arr[i])) {
// 			arr.splice(i, 1);
// 		}
// 	}

// 	return arr;
// }
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
"--------------------------------------------------------------------------------------",
	"Шифровка строки за допомогою ROT13";
("Моє розв'язання");
// function rot13(message) {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz";
// 	const middle = alphabet.indexOf("m");

// 	return message
// 		.split("")
// 		.map(e => {
// 			if (e === " " || !/^[a-zA-Z]$/.test(e)) {
// 				return e;
// 			}
// 			const elIdx = alphabet.indexOf(e.toLowerCase());

// 			if (e === e.toLowerCase()) {
// 				return elIdx > middle ? alphabet[elIdx - 13] : alphabet[elIdx + 13];
// 			} else {
// 				return elIdx > middle ? alphabet[elIdx - 13].toUpperCase() : alphabet[elIdx + 13].toUpperCase();
// 			}
// 		})
// 		.join("");
// }

// console.log(rot13("Ruby is cool!"));
"--------------------------------------------------------------------------------------", "";
("Повертаємо порядковий номер в алфавіті замість символа");
("Моє розв'язання");
// function alphabetPosition(text) {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 	return text
// 		.toLowerCase()
// 		.split("")
// 		.map(e => {
// 			if (/^[a-zA-Z]$/.test(e)) {
// 				return alphabet.indexOf(e) + 1;
// 			}
// 		})
// 		.filter(e => e)
// 		.join(",");
// }
("Розв'язання з codewars(вираховуєм номер букви з юнікоду)");
// function alphabetPosition(text) {
// 	return text
// 		.toLowerCase()
// 		.split("")
// 		.map(a => a.charCodeAt(0) - 96)
// 		.filter(a => a > 0 && a < 27)
// 		.join(" ");
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
"--------------------------------------------------------------------------------------", "";
("Шифрування і розшифрування повідомлення [...парні індекси, ...непарні індекси]");
("Моє розв'язання");

// function encrypt(text, n) {
// 	let textArr = text.split("");
// 	let odd = [];
// 	let even = [];

// 	if (!n) return text;

// 	while (n--) {
// 		textArr.forEach((e, idx) => {
// 			if (idx % 2 === 0) {
// 				odd.push(e);
// 				return;
// 			}
// 			return even.push(e);
// 		});
// 		textArr = [...even, ...odd];
// 		odd = [];
// 		even = [];
// 	}

// 	return textArr.join("");
// }

function decrypt(encryptedText, n) {
	while (n--) {
		const encryptedArray = encryptedText.split("");
		const result = Array(encryptedArray.length);
		const odd = [];
		const even = [];
		let j = 0;

		encryptedArray.forEach((e, i) => {
			if (i < Math.ceil(encryptedArray.length / 2)) {
				odd.push(e);
			} else {
				even.push(e);
			}
		});

		for (let i = 1; i < result.length; i += 2) {
			result[i] = odd[j++];
		}

		j = 0;

		for (let i = 0; i < result.length; i += 2) {
			result[i] = even[j++];
		}
		encryptedText = result.join("");
	}

	return encryptedText;
}

const e = encrypt("012345", 2);
console.log(decrypt(e, 2));

("Розв'язання з codewars");
// function encrypt(text, n) {
// 	if (!text || n <= 0) return text;
// 	while (n--) {
// 		let ans = "";
// 		for (let i = 1; i < text.length; i += 2) {
// 			ans += text[i];
// 		}
// 		for (let i = 0; i < text.length; i += 2) {
// 			ans += text[i];
// 		}
// 		text = ans;
// 	}
// 	return text;
// }

// console.log(encrypt("012345", 1));

// function decrypt(encryptedText, n) {
// 	if (!encryptedText || n <= 0) return encryptedText;
// 	const ans = new Array(encryptedText.length);
// 	while (n--) {
// 		let j = 0;
// 		for (let i = 1; i < ans.length; i += 2) {
// 			ans[i] = encryptedText[j++];
// 		}
// 		for (let i = 0; i < ans.length; i += 2) {
// 			ans[i] = encryptedText[j++];
// 		}
// 		encryptedText = ans.join("");
// 	}
// 	return encryptedText;
// }

// const a = encrypt("012345", 2);
// console.log(decrypt(a, 2));
