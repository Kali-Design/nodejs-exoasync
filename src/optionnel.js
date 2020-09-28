import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

const input = 

fsPromises
    .copyFile('../file1.txt', '../file2.txt', COPYFILE_EXCL)
    
    .then(() => console.log('file1.txt was copied to file2.txt'))
    .catch(() => console.log('The file could not be copied'))