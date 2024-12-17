import path from "path";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers"; // Required for modern Node.js
import metadataWrapper from "../src/index.js";

// Parse command-line arguments
const argv = yargs(hideBin(process.argv))
    .option("key", {
        alias: "k",
        type: "string",
        description: "API key for SEO metadata",
        demandOption: true, // Ensures the key is required
    })
    .help()
    .argv;

const apiKey = argv.key;

// initialize root path
const root = path.resolve()

// get html body from lorem file
const html = fs.readFileSync(path.join(root, 'test', 'lorem.html'), "utf-8");

// call html wrapper
metadataWrapper(
    html,
    {
        route: "/lorem",
        term: "lorem",
        lang: "en",
        country: "EG",
        solution: "test"
    },
    apiKey
).then(htmlWithMetadata => {
    console.dir(htmlWithMetadata)
}).catch(err => {
    console.error(err.message)
})