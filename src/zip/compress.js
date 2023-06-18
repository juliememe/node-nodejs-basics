import * as fs from 'fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    // Write your code here
    const filePath = './files/fileToCompress.txt';
    const archiveFilePath ='./files/archive.gz';
        const sourceFile = fs.createReadStream(filePath)
        sourceFile
            .pipe(createGzip())
            .pipe(fs.createWriteStream(archiveFilePath));
};

await compress();