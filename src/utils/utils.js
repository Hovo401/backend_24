import path from 'path';

export const __appDirName  = path.resolve();

export const __publicDirName  = path.resolve(__appDirName, 'public' );

console.log(__appDirName)
