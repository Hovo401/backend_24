import path from 'path';

const this_dirname = path.dirname(new URL(import.meta.url).pathname);

export const __appDirName  = path.join(this_dirname, '..');

export const __publicDirName  = path.join(this_dirname, '..', '..', 'public' );