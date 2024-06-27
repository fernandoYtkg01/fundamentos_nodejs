import { writeFile } from "fs/promises"

async function exec() {
    const list = ['Pedro', 'lucas', 'João']
    const listtxt = list.join('\n')
    await writeFile('./teste.txt', listtxt)
}

exec()