declare module 'metadata-wrapper' {
    interface MetaBody {
        route: string,
        term: string,
        lang: string,
        country: string,
        solution: string
    }

    /**
     * Parameters for the metadataWrapper function.
     * @param html - The initial HTML string to process.
     * @param metaBody - The body data for the SEO metadata API request.
     * @param apiKey - The API key for authentication with the metadata API.
     */
    const metadataWrapper: (
        html: string,
        metaBody: MetaBody,  // Use the MetaBody interface here
        apiKey: string
    ) => Promise<string>;

    export default metadataWrapper;
}
