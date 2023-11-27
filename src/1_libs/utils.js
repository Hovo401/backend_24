import path from 'path';
import { fileURLToPath } from 'url'

const __dirname = path.dirname( fileURLToPath(import.meta.url) );

export const getDirName = function (moduleUrl) {
    const filename = fileURLToPath(moduleUrl)
    return path.dirname(filename)
}

export const __appDirName  = path.resolve(__dirname, '..');
export const __publicDirName  = path.resolve(__appDirName, '..', 'public' );

console.log(__appDirName)
