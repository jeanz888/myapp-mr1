const { ImageAnalysisClient } = require('@azure-rest/ai-vision-image-analysis');
const createClient = require('@azure-rest/ai-vision-image-analysis').default;
const { AzureKeyCredential } = require('@azure/core-auth');

// Load the .env file if it exists
require("dotenv").config();

const endpoint = 'https://mr1-test.cognitiveservices.azure.com/';
const key = 'f078a9fc0f0045dc8b5726ed0b6cd0f8';

const credential = new AzureKeyCredential(key);
const client = createClient(endpoint, credential);

const features = [
    'Caption',
    'Read'
];

const imageUrl = 'https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png';

async function analyzeImageFromUrl() {
    const result = await client.path('/imageanalysis:analyze').post({
        body: {
            url: imageUrl
        },
        queryParameters: {
            features: features
        },
        contentType: 'application/json'
    });

    const iaResult = result.body;

    if (iaResult.captionResult) {
        console.log(`Caption: ${iaResult.captionResult.text} (confidence: ${iaResult.captionResult.confidence})`);
    }
    if (iaResult.readResult) {
        iaResult.readResult.blocks.forEach(block => console.log(`Text Block: ${JSON.stringify(block)}`));
    }
}

// The error is that the variables `imageUrl` and `features` are not defined in the scope of this function. They need to be passed as arguments or defined elsewhere in the code.

analyzeImageFromUrl();