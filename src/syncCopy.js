/*Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant 
les api synchrones du module fs de node.js*/


import fs from 'fs'
import { COPYFILE_EXCL } from 'constants'

fs.copyFileSync('../file1.txt', '../file2.txt', COPYFILE_EXCL);

console.log('../file1.txt was copied to ../file2.txt')