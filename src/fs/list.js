import { readdir } from 'node:fs/promises';
import { existsSync } from "node:fs";

const list = async () => {
    // Write your code here
    const dirPath = './files';

    if(existsSync(dirPath)) {
        const files = await readdir(dirPath);
        for (const fileNames of files)
            console.log(fileNames);
    } else{
        throw new Error('FS operation failed');
    }
};

await list();