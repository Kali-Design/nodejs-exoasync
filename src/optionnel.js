import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

const src = process.argv[2]
const dest = process.argv[3]

fsPromises
    .copyFile('../file1.txt', '../file2.txt', COPYFILE_EXCL)
    
    .then(() => console.log('file1.txt was copied to file2.txt'))
    .catch(() => console.log('The file could not be copied'))

    if (process.argv.length!== 4) {
        console.log('USAGE: node optionnel.js src dest')
    }
    if (!isNaN(src) || (!isNaN(dest))) {
        console.log('Error : src <string> dest <string>')
    }