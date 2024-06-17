import { ComputerVisionClient, ApiKeyCredentials } from '@azure/cognitiveservices-computervision';
const endpoint = 'https://mr1-test.cognitiveservices.azure.com/'; 
const key = '4863f1bb43cd4823832abe9bd8bc2b42';

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Subscription-Key': key } }, endpoint)
);

function computerVision() {
    try {
        // Your code here
    } catch (error) {
        console.error('Error:', error);
    }
}

computerVision();

  /**
   * DETECT TAGS  
   * Detects tags for an image, which returns:
   *     all objects in image and confidence score.
   */
  console.log('-------------------------------------------------');
  console.log('DETECT TAGS');
  console.log();

  // Image of different kind of Car.
  const tagsURL = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png';

  // Analyze URL image
  console.log('Analyzing tags in image...', tagsURL.split('/').pop());
  const tags = (await computerVisionClient.analyzeImage(tagsURL, { visualFeatures: ['Tags'] })).tags;
  console.log(`Tags: ${formatTags(tags)}`);

  // Format tags for display
  function formatTags(tags) {
    return tags.map(tag => (`${tag.name} (${tag.confidence.toFixed(2)})`)).join(', ');
  }
  /**
   * END - Detect Tags
   */
  console.log();
  console.log('-------------------------------------------------');
  console.log('End of quickstart.');

function  computerVision() {
  return new Promise((resolve) => {
    resolve();
  });
}
(err) => {
  throw err;
};

computerVision();

