import { config } from "dotenv"
import axios from "axios"
import { JSDOM } from "jsdom"

config()

const metadataWrapper = async (html, metaBody, apiKey) => {
    // get or generate metadata for given route
    const metadata = await axios.post(`${process.env.SEO_BE}/google/getORgenerateSEOMetadata`,
        metaBody, {
        headers: {
            API_KEY: apiKey
        }
    }).then(res => res.data)

    // Create a new JSDOM instance with the given html content
    const dom = new JSDOM(html)

    // Access the document object
    const { document } = dom.window

    // Check if title exists, set it if missing
    let title = document.querySelector("title")
    if (!title) {
        title = document.createElement("title")
        document.head.appendChild(title)
    }

    // update with seo title
    title.textContent = metadata.title

    // Check if meta description exists, set it if missing
    let metaDescription = document.querySelector("meta[name='description']")
    if (!metaDescription) {
        metaDescription = document.createElement("meta")
        metaDescription.setAttribute("name", "description")
        document.head.appendChild(metaDescription)
    }

    // update with seo description
    metaDescription.setAttribute("content", metadata.description)

    // Check if meta keywords exists, set it if missing
    let metaKeywords = document.querySelector("meta[name='keywords']")
    if (!metaKeywords) {
        metaKeywords = document.createElement("meta")
        metaKeywords.setAttribute("name", "keywords")
        document.head.appendChild(metaKeywords)
    }

    // update with seo keywords
    metaKeywords.setAttribute("content", metadata.keywords.join(", "))

    // Serialize the modified DOM back to a string
    return dom.serialize()
}

export default metadataWrapper