/* Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api asynchrones 
basées sur des callbacks du module fs de node.js.*/

import fs from 'fs'
import { COPYFILE_EXCL } from 'constants'

const callback = (err) => { 
  if (err) throw err;
  console.log('../file1.txt was copied to ../file2.txt')
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile('../file1.txt', '../file2.txt', COPYFILE_EXCL, callback);