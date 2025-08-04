import { readFile, writeFile } from 'fs/promises';

let json = JSON.parse(
  await readFile(
    new URL('./numbers.json', import.meta.url)
  )
);

let links = [2,3,4]
let luck = Math.floor(Math.random() * links.length)
while (json.includes(luck)) {
	luck = Math.floor(Math.random() * links.length)
	if (json.length >= links.length) {
		json = []
	}
}

json.push(luck)

await writeFile("./numbers.json", JSON.stringify(json))
