let h1 = document.querySelector('h1');
	
class Cookie {
	
	constructor () {
		
	}
	
	set(name, value) {
		document.cookie = `${name}=${value}`;
	}
	
	get(name, value) {		
		let cookie = document.cookie;
		cookie = cookie.split(';');
		
		cookie = cookie.map(v => {
			v = v.trim();
			let pre = v.split('=');			
			let obj = {name: pre[0], value: pre[1]};
			return obj;
		});
		
		if (!name && !value) {
			return cookie.length ? cookie : 'not found';
		}
		
		let find = cookie;
		
		let str = 'not found ';
		
		if (name) {		
			find = find.filter(v => {
				return v.name == name;
			});
			str += ' name: ' + name;
		}
		
		if (value) {
			find = find.filter(v => {
				return v.value == value;
			});
			str += ' value: ' + value;
		}
		
		if (find.length == 1) {
			find = find[0];
		}
		
		return find.length || typeof find == 'object' ? find : str;
	}
	
	remove(name) {
		document.cookie = `${name}=""; max-age=-1`;
	}
}

let s = new Cookie();

s.set('id', '2');
s.set('user', 'John');

console.log(s.get(false, '2'));
console.log(s.get('id', '2'));
console.log(s.get('id'));

console.log(s.get());

console.log(s.get(false, '123'));
console.log(s.get('user'));
s.set('user2', '2');
console.log(s.get('user2', '2'));
		
let cookie = new Cookie();
let count = cookie.get('count').value;
console.log(count);

if (count) {
	console.log(count);
	if (count == '1') {
		cookie.set('visit', 'first');
		h1.textContent = 'First visite';
	} else if (count == '2') {
		cookie.remove('visit');
	}
	h1.textContent += ': ' + count;
} else {
	h1.textContent = 'some text';
}

let all = cookie.get();
document.write(JSON.stringify(all) + '<pre>' + '<br>' + 'length: ' + all.length);
