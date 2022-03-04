import Parser from 'tree-sitter';
import Javascript from 'tree-sitter-javascript';
import { argv, exit } from 'process';
import { readFile } from 'fs/promises';


console.log("HI");

const parser = new Parser();
parser.setLanguage(Javascript);
const filePath = argv[1];

const contents = await readFile(filePath, 'utf-8');
const tree = parser.parse(contents);
console.log(tree.rootNode.toString());