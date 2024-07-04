import { readFile, writeFile } from "fs/promises"

// excrenvendo em um arquivo
// async function exec() {
//     const list = ['Pedro', 'lucas', 'João']
//     const listtxt = list.join('\n')
//     await writeFile('./teste.txt', listtxt)
// }

// exec()

// lendo um arquivo é gravando 
async function exec() {
    const fileName = './teste.txt'
    const fileContent = await readFile(fileName, { encoding: 'utf8' })

    const list = fileContent.split('\n')
    list.push('Fulano')

    const fileTxt = list.join('\n')
    console.log(fileTxt)

    await writeFile(fileName, fileTxt)
}

exec()