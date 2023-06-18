import * as fs from "fs";
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    // Write your code here
    const filePath = './files/fileToCalculateHashFor.txt';
    const fileData = fs.readFileSync(filePath);

    const hashSum = createHash('sha256');
    hashSum.update(fileData);
    const fileHex = hashSum.digest('hex');

    console.log(fileHex);
};

await calculateHash();