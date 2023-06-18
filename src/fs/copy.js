import { existsSync, mkdir } from 'node:fs';
import {readdir} from "node:fs/promises";
import {copyFileSync} from "fs";

const copy = async () => {
    // Write your code here
    const initialFilePath = './files';
    const filePath = './files_copy';

    if(existsSync(filePath)){
        throw new Error('FS operation failed');
    } else {
        mkdir('./files_copy', { recursive: true }, (err) => {
            if (err) throw new Error('FS operation failed');
        });

        const files = await readdir(initialFilePath);
        for (const fileNames of files)
        copyFileSync(`${initialFilePath}/${fileNames}`, `${filePath}/${fileNames}`);
    }
};

await copy();

