import { promises as fs } from 'fs';

const txt = await fs.readFile('./resources/census-us.json', 'utf-8')

