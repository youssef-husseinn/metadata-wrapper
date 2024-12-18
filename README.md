# metadata-wrapper 
A Node.js package for dynamically updating SEO metadata in HTML content. This package allows you to generate or modify the metadata (title, description, keywords) in the HTML `<head>` based on an API request. 

## Installation Install the package using npm: 
```bash
npm install metadata-wrapper
``` 

## Usage

### Example
```javascript
import metadataWrapper from 'metadata-wrapper';
const html = `<html><head></head><body></body></html>`;
const metaBody = { 
    route: "/test",
    term: "test",
    lang: "en",
    country: "EG",
    solution: "test"
};
const apiKey = "YOUR_API_KEY";

metadataWrapper(html, metaBody, apiKey).then(updatedHtml => {
    console.dir(updatedHtml)
}).catch(err => {
    console.error("Error generating metadata:", error.message)
})
```

[You can get your API_KEY from docs HERE!](http://localhost:3030/docs/intro)

### Function Signature 
```typescript 
metadataWrapper(html: string, metaBody: MetaBody, apiKey: string): Promise<string> 
```

#### Parameters: 
- `html` (string): The initial HTML string to process. 
- `metaBody` (MetaBody): An object containing metadata fields like `url`, `type`, etc., to request SEO metadata from an API. 
- `apiKey` (string): The API key for authentication with the metadata API. 

#### Return Value: 
- A `Promise<string>`: The function returns a serialized HTML string with updated SEO metadata. 

## MetaBody Structure 
```typescript 
interface MetaBody {
    route: string,
    term: string,
    lang: string,
    country: string,
    solution: string
}
``` 

## Environment Variables 
This package relies on the following environment variable: 
- `SEO_BE`: The backend URL for the metadata API (e.g., `http://localhost:5050/api`). 
## Dependencies 
- `axios`: For making HTTP requests to the metadata API. 
- `jsdom`: For parsing and modifying HTML content. 

## License MIT License. 
See the [LICENSE](LICENSE) file for more details.