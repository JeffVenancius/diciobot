let text = "    inócuo   dass"
text = text.split(" ").map(e => {
	// console.log(e.replace(/\b\w/, s => /\w/.toUppercase()))
	// console.log(e.replace(e[0], e[0].toUpperCase()))
	if (e.length) return e[0].toUpperCase() + e.substring(1)
	return ''
}).join(' ').match(/[a-z].*[a-z]/g)[0]
console.log(text)
