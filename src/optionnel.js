/* Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:

    un fichier source, qui est le fichier à copier
    un fichier dest, qui sera la destination de la copie

Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js.*/

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