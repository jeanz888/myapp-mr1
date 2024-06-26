/// <reference types="node" />
import * as msRest from "@azure/ms-rest-js";
/**
 * An object describing face rectangle.
 */
export interface FaceRectangle {
    /**
     * X-coordinate of the top left point of the face, in pixels.
     */
    left?: number;
    /**
     * Y-coordinate of the top left point of the face, in pixels.
     */
    top?: number;
    /**
     * Width measured from the top-left point of the face, in pixels.
     */
    width?: number;
    /**
     * Height measured from the top-left point of the face, in pixels.
     */
    height?: number;
}
/**
 * An object describing possible celebrity identification.
 */
export interface CelebritiesModel {
    /**
     * Name of the celebrity.
     */
    name?: string;
    /**
     * Confidence level for the celebrity recognition as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * Location of the identified face in the image.
     */
    faceRectangle?: FaceRectangle;
}
/**
 * A landmark recognized in the image.
 */
export interface LandmarksModel {
    /**
     * Name of the landmark.
     */
    name?: string;
    /**
     * Confidence level for the landmark recognition as a value ranging from 0 to 1.
     */
    confidence?: number;
}
/**
 * An object describing additional category details.
 */
export interface CategoryDetail {
    /**
     * An array of celebrities if any identified.
     */
    celebrities?: CelebritiesModel[];
    /**
     * An array of landmarks if any identified.
     */
    landmarks?: LandmarksModel[];
}
/**
 * An object describing identified category.
 */
export interface Category {
    /**
     * Name of the category.
     */
    name?: string;
    /**
     * Scoring of the category.
     */
    score?: number;
    /**
     * Details of the identified category.
     */
    detail?: CategoryDetail;
}
/**
 * An object describing whether the image contains adult-oriented content and/or is racy.
 */
export interface AdultInfo {
    /**
     * A value indicating if the image contains adult-oriented content.
     */
    isAdultContent?: boolean;
    /**
     * A value indicating if the image is racy.
     */
    isRacyContent?: boolean;
    /**
     * A value indicating if the image is gory.
     */
    isGoryContent?: boolean;
    /**
     * Score from 0 to 1 that indicates how much the content is considered adult-oriented within the
     * image.
     */
    adultScore?: number;
    /**
     * Score from 0 to 1 that indicates how suggestive is the image.
     */
    racyScore?: number;
    /**
     * Score from 0 to 1 that indicates how gory is the image.
     */
    goreScore?: number;
}
/**
 * An object providing additional metadata describing color attributes.
 */
export interface ColorInfo {
    /**
     * Possible dominant foreground color.
     */
    dominantColorForeground?: string;
    /**
     * Possible dominant background color.
     */
    dominantColorBackground?: string;
    /**
     * An array of possible dominant colors.
     */
    dominantColors?: string[];
    /**
     * Possible accent color.
     */
    accentColor?: string;
    /**
     * A value indicating if the image is black and white.
     */
    isBWImg?: boolean;
}
/**
 * An object providing possible image types and matching confidence levels.
 */
export interface ImageType {
    /**
     * Confidence level that the image is a clip art.
     */
    clipArtType?: number;
    /**
     * Confidence level that the image is a line drawing.
     */
    lineDrawingType?: number;
}
/**
 * An entity observation in the image, along with the confidence score.
 */
export interface ImageTag {
    /**
     * Name of the entity.
     */
    name?: string;
    /**
     * The level of confidence that the entity was observed.
     */
    confidence?: number;
    /**
     * Optional hint/details for this tag.
     */
    hint?: string;
}
/**
 * An image caption, i.e. a brief description of what the image depicts.
 */
export interface ImageCaption {
    /**
     * The text of the caption.
     */
    text?: string;
    /**
     * The level of confidence the service has in the caption.
     */
    confidence?: number;
}
/**
 * A collection of content tags, along with a list of captions sorted by confidence level, and
 * image metadata.
 */
export interface ImageDescriptionDetails {
    /**
     * A collection of image tags.
     */
    tags?: string[];
    /**
     * A list of captions, sorted by confidence level.
     */
    captions?: ImageCaption[];
}
/**
 * An object describing a face identified in the image.
 */
export interface FaceDescription {
    /**
     * Possible age of the face.
     */
    age?: number;
    /**
     * Possible gender of the face. Possible values include: 'Male', 'Female'
     */
    gender?: Gender;
    /**
     * Rectangle in the image containing the identified face.
     */
    faceRectangle?: FaceRectangle;
}
/**
 * A bounding box for an area inside an image.
 */
export interface BoundingRect {
    /**
     * X-coordinate of the top left point of the area, in pixels.
     */
    x?: number;
    /**
     * Y-coordinate of the top left point of the area, in pixels.
     */
    y?: number;
    /**
     * Width measured from the top-left point of the area, in pixels.
     */
    w?: number;
    /**
     * Height measured from the top-left point of the area, in pixels.
     */
    h?: number;
}
/**
 * An object detected inside an image.
 */
export interface ObjectHierarchy {
    /**
     * Label for the object.
     */
    object?: string;
    /**
     * Confidence score of having observed the object in the image, as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * The parent object, from a taxonomy perspective.
     * The parent object is a more generic form of this object.  For example, a 'bulldog' would have
     * a parent of 'dog'.
     */
    parent?: ObjectHierarchy;
}
/**
 * An object detected in an image.
 */
export interface DetectedObject {
    /**
     * Approximate location of the detected object.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly rectangle?: BoundingRect;
    /**
     * Label for the object.
     */
    object?: string;
    /**
     * Confidence score of having observed the object in the image, as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * The parent object, from a taxonomy perspective.
     * The parent object is a more generic form of this object.  For example, a 'bulldog' would have
     * a parent of 'dog'.
     */
    parent?: ObjectHierarchy;
}
/**
 * A brand detected in an image.
 */
export interface DetectedBrand {
    /**
     * Label for the brand.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly name?: string;
    /**
     * Confidence score of having observed the brand in the image, as a value ranging from 0 to 1.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly confidence?: number;
    /**
     * Approximate location of the detected brand.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly rectangle?: BoundingRect;
}
/**
 * Image metadata.
 */
export interface ImageMetadata {
    /**
     * Image width, in pixels.
     */
    width?: number;
    /**
     * Image height, in pixels.
     */
    height?: number;
    /**
     * Image format.
     */
    format?: string;
}
/**
 * Result of AnalyzeImage operation.
 */
export interface ImageAnalysis {
    /**
     * An array indicating identified categories.
     */
    categories?: Category[];
    /**
     * An object describing whether the image contains adult-oriented content and/or is racy.
     */
    adult?: AdultInfo;
    /**
     * An object providing additional metadata describing color attributes.
     */
    color?: ColorInfo;
    /**
     * An object providing possible image types and matching confidence levels.
     */
    imageType?: ImageType;
    /**
     * A list of tags with confidence level.
     */
    tags?: ImageTag[];
    /**
     * A collection of content tags, along with a list of captions sorted by confidence level, and
     * image metadata.
     */
    description?: ImageDescriptionDetails;
    /**
     * An array of possible faces within the image.
     */
    faces?: FaceDescription[];
    /**
     * Array of objects describing what was detected in the image.
     */
    objects?: DetectedObject[];
    /**
     * Array of brands detected in the image.
     */
    brands?: DetectedBrand[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * A collection of content tags, along with a list of captions sorted by confidence level, and
 * image metadata.
 */
export interface ImageDescription {
    /**
     * A collection of image tags.
     */
    tags?: string[];
    /**
     * A list of captions, sorted by confidence level.
     */
    captions?: ImageCaption[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * Result of a DetectImage call.
 */
export interface DetectResult {
    /**
     * An array of detected objects.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly objects?: DetectedObject[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * An object describing supported model by name and categories.
 */
export interface ModelDescription {
    /**
     * The name of the model.
     */
    name?: string;
    /**
     * Categories of the model.
     */
    categories?: string[];
}
/**
 * Result of the List Domain Models operation.
 */
export interface ListModelsResult {
    /**
     * An array of supported models.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly modelsProperty?: ModelDescription[];
}
/**
 * Result of image analysis using a specific domain model including additional metadata.
 */
export interface DomainModelResults {
    /**
     * Model-specific response.
     */
    result?: any;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * Information on a recognized word.
 */
export interface OcrWord {
    /**
     * Bounding box of a recognized word. The four integers represent the x-coordinate of the left
     * edge, the y-coordinate of the top edge, width, and height of the bounding box, in the
     * coordinate system of the input image, after it has been rotated around its center according to
     * the detected text angle (see textAngle property), with the origin at the top-left corner, and
     * the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * String value of a recognized word.
     */
    text?: string;
}
/**
 * An object describing a single recognized line of text.
 */
export interface OcrLine {
    /**
     * Bounding box of a recognized line. The four integers represent the x-coordinate of the left
     * edge, the y-coordinate of the top edge, width, and height of the bounding box, in the
     * coordinate system of the input image, after it has been rotated around its center according to
     * the detected text angle (see textAngle property), with the origin at the top-left corner, and
     * the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * An array of objects, where each object represents a recognized word.
     */
    words?: OcrWord[];
}
/**
 * A region consists of multiple lines (e.g. a column of text in a multi-column document).
 */
export interface OcrRegion {
    /**
     * Bounding box of a recognized region. The four integers represent the x-coordinate of the left
     * edge, the y-coordinate of the top edge, width, and height of the bounding box, in the
     * coordinate system of the input image, after it has been rotated around its center according to
     * the detected text angle (see textAngle property), with the origin at the top-left corner, and
     * the y-axis pointing down.
     */
    boundingBox?: string;
    /**
     * An array of recognized lines of text.
     */
    lines?: OcrLine[];
}
/**
 * An interface representing OcrResult.
 */
export interface OcrResult {
    /**
     * The BCP-47 language code of the text in the image.
     */
    language?: string;
    /**
     * The angle, in radians, of the detected text with respect to the closest horizontal or vertical
     * direction. After rotating the input image clockwise by this angle, the recognized text lines
     * become horizontal or vertical. In combination with the orientation property it can be used to
     * overlay recognition results correctly on the original image, by rotating either the original
     * image or recognition results by a suitable angle around the center of the original image. If
     * the angle cannot be confidently detected, this property is not present. If the image contains
     * text at different angles, only part of the text will be recognized correctly.
     */
    textAngle?: number;
    /**
     * Orientation of the text recognized in the image, if requested. The value (up, down, left, or
     * right) refers to the direction that the top of the recognized text is facing, after the image
     * has been rotated around its center according to the detected text angle (see textAngle
     * property).
     * If detection of the orientation was not requested, or no text is detected, the value is
     * 'NotDetected'.
     */
    orientation?: string;
    /**
     * An array of objects, where each object represents a region of recognized text.
     */
    regions?: OcrRegion[];
    modelVersion?: string;
}
/**
 * The results of a image tag operation, including any tags and image metadata.
 */
export interface TagResult {
    /**
     * A list of tags with confidence level.
     */
    tags?: ImageTag[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * Result of AreaOfInterest operation.
 */
export interface AreaOfInterestResult {
    /**
     * A bounding box for an area of interest inside an image.
     * **NOTE: This property will not be serialized. It can only be populated by the server.**
     */
    readonly areaOfInterest?: BoundingRect;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    metadata?: ImageMetadata;
    modelVersion?: string;
}
/**
 * An interface representing ImageUrl.
 */
export interface ImageUrl {
    /**
     * Publicly reachable URL of an image.
     */
    url: string;
}
/**
 * Details about the API request error.
 */
export interface ComputerVisionInnerError {
    /**
     * The error code. Possible values include: 'InvalidImageFormat', 'UnsupportedMediaType',
     * 'InvalidImageUrl', 'NotSupportedFeature', 'NotSupportedImage', 'Timeout',
     * 'InternalServerError', 'InvalidImageSize', 'BadArgument', 'DetectFaceError',
     * 'NotSupportedLanguage', 'InvalidThumbnailSize', 'InvalidDetails', 'InvalidModel',
     * 'CancelledRequest', 'NotSupportedVisualFeature', 'FailedToProcess', 'Unspecified',
     * 'StorageException'
     */
    code: ComputerVisionInnerErrorCodeValue;
    /**
     * Error message.
     */
    message: string;
}
/**
 * The API request error.
 */
export interface ComputerVisionError {
    /**
     * The error code. Possible values include: 'InvalidRequest', 'InvalidArgument',
     * 'InternalServerError', 'ServiceUnavailable'
     */
    code: ComputerVisionErrorCodes;
    /**
     * A message explaining the error reported by the service.
     */
    message: string;
    /**
     * Inner error contains more specific information.
     */
    innererror?: ComputerVisionInnerError;
}
/**
 * The API error response.
 */
export interface ComputerVisionErrorResponse {
    /**
     * Error contents.
     */
    error: ComputerVisionError;
}
/**
 * An object representing the style of the text line.
 */
export interface Style {
    /**
     * The text line style name, including handwriting and other. Possible values include: 'other',
     * 'handwriting'
     */
    name: TextStyle;
    /**
     * The confidence of text line style.
     */
    confidence: number;
}
/**
 * An object representing the appearance of the text line.
 */
export interface Appearance {
    /**
     * An object representing the style of the text line.
     */
    style: Style;
}
/**
 * An object representing a recognized word.
 */
export interface Word {
    /**
     * Bounding box of a recognized word.
     */
    boundingBox: number[];
    /**
     * The text content of the word.
     */
    text: string;
    /**
     * Qualitative confidence measure.
     */
    confidence: number;
}
/**
 * An object representing a recognized text line.
 */
export interface Line {
    /**
     * The BCP-47 language code of the recognized text line. Only provided where the language of the
     * line differs from the page's.
     */
    language?: string;
    /**
     * Bounding box of a recognized line.
     */
    boundingBox: number[];
    /**
     * Appearance of the text line.
     */
    appearance?: Appearance;
    /**
     * The text content of the line.
     */
    text: string;
    /**
     * List of words in the text line.
     */
    words: Word[];
}
/**
 * Text extracted from a page in the input document.
 */
export interface ReadResult {
    /**
     * The 1-based page number of the recognition result.
     */
    page: number;
    /**
     * The BCP-47 language code of the recognized text page.
     */
    language?: string;
    /**
     * The orientation of the image in degrees in the clockwise direction. Range between [-180, 180).
     */
    angle: number;
    /**
     * The width of the image in pixels or the PDF in inches.
     */
    width: number;
    /**
     * The height of the image in pixels or the PDF in inches.
     */
    height: number;
    /**
     * The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF,
     * the unit is 'inch'. Possible values include: 'pixel', 'inch'
     */
    unit: TextRecognitionResultDimensionUnit;
    /**
     * A list of recognized text lines.
     */
    lines: Line[];
}
/**
 * Analyze batch operation result.
 */
export interface AnalyzeResults {
    /**
     * Version of schema used for this result.
     */
    version: string;
    /**
     * Version of the OCR model used for text extraction.
     */
    modelVersion: string;
    /**
     * Text extracted from the input.
     */
    readResults: ReadResult[];
}
/**
 * OCR result of the read operation.
 */
export interface ReadOperationResult {
    /**
     * Status of the read operation. Possible values include: 'notStarted', 'running', 'failed',
     * 'succeeded'
     */
    status?: OperationStatusCodes;
    /**
     * Get UTC date time the batch operation was submitted.
     */
    createdDateTime?: string;
    /**
     * Get last updated UTC date time of this batch operation.
     */
    lastUpdatedDateTime?: string;
    /**
     * Analyze batch operation result.
     */
    analyzeResult?: AnalyzeResults;
}
/**
 * Details about the API request error.
 */
export interface ComputerVisionOcrError {
    /**
     * The error code.
     */
    code: any;
    /**
     * A message explaining the error reported by the service.
     */
    message: string;
    /**
     * A unique request identifier.
     */
    requestId?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientAnalyzeImageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * A string indicating what visual feature types to return. Multiple values should be
     * comma-separated. Valid visual feature types include: Categories - categorizes image content
     * according to a taxonomy defined in documentation. Tags - tags the image with a detailed list
     * of words related to the image content. Description - describes the image content with a
     * complete English sentence. Faces - detects if faces are present. If present, generate
     * coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color
     * - determines the accent color, dominant color, and whether an image is black&white. Adult -
     * detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory
     * (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also
     * detected. Objects - detects various objects within an image, including the approximate
     * location. The Objects argument is only available in English. Brands - detects various brands
     * within an image, including the approximate location. The Brands argument is only available in
     * English.
     */
    visualFeatures?: VisualFeatureTypes[];
    /**
     * A string indicating which domain-specific details to return. Multiple values should be
     * comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if
     * detected in the image, Landmarks - identifies notable landmarks in the image.
     */
    details?: Details[];
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language;
    /**
     * Turn off specified domain models when generating the description.
     */
    descriptionExclude?: DescriptionExclude[];
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientDescribeImageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Maximum number of candidate descriptions to be returned.  The default is 1. Default value: 1.
     */
    maxCandidates?: number;
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language1;
    /**
     * Turn off specified domain models when generating the description.
     */
    descriptionExclude?: DescriptionExclude[];
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientDetectObjectsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientAnalyzeImageByDomainOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language2;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientRecognizePrintedTextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.
     * Possible values include: 'unk', 'zh-Hans', 'zh-Hant', 'cs', 'da', 'nl', 'en', 'fi', 'fr',
     * 'de', 'el', 'hu', 'it', 'ja', 'ko', 'nb', 'pl', 'pt', 'ru', 'es', 'sv', 'tr', 'ar', 'ro',
     * 'sr-Cyrl', 'sr-Latn', 'sk'. Default value: 'unk'.
     */
    language?: OcrLanguages;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientTagImageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language3;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientGenerateThumbnailOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Boolean flag for enabling smart cropping. Default value: false.
     */
    smartCropping?: boolean;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientGetAreaOfInterestOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientReadOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The BCP-47 language code of the text in the document. Read supports auto language
     * identification and multi-language documents, so only provide a language code if you would like
     * to force the document to be processed in that specific language. See
     * https://aka.ms/ocr-languages for list of supported languages. Possible values include: 'af',
     * 'ast', 'bi', 'br', 'ca', 'ceb', 'ch', 'co', 'crh', 'cs', 'csb', 'da', 'de', 'en', 'es', 'et',
     * 'eu', 'fi', 'fil', 'fj', 'fr', 'fur', 'fy', 'ga', 'gd', 'gil', 'gl', 'gv', 'hni', 'hsb', 'ht',
     * 'hu', 'ia', 'id', 'it', 'iu', 'ja', 'jv', 'kaa', 'kac', 'kea', 'kha', 'kl', 'ko', 'ku', 'kw',
     * 'lb', 'ms', 'mww', 'nap', 'nl', 'no', 'oc', 'pl', 'pt', 'quc', 'rm', 'sco', 'sl', 'sq', 'sv',
     * 'sw', 'tet', 'tr', 'tt', 'uz', 'vo', 'wae', 'yua', 'za', 'zh-Hans', 'zh-Hant', 'zu'
     */
    language?: OcrDetectionLanguage;
    /**
     * Custom page numbers for multi-page documents(PDF/TIFF), input the number of the pages you want
     * to get OCR result. For a range of pages, use a hyphen. Separate each page or range with a
     * comma.
     */
    pages?: string[];
    /**
     * Optional parameter to specify the version of the OCR model used for text extraction. Accepted
     * values are: "latest", "latest-preview", "2021-04-12". Defaults to "latest". Default value:
     * 'latest'.
     */
    modelVersion?: string;
    /**
     * Optional parameter to specify which reading order algorithm should be applied when ordering
     * the extract text elements. Can be either 'basic' or 'natural'. Will default to 'basic' if not
     * specified. Default value: 'basic'.
     */
    readingOrder?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientAnalyzeImageInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * A string indicating what visual feature types to return. Multiple values should be
     * comma-separated. Valid visual feature types include: Categories - categorizes image content
     * according to a taxonomy defined in documentation. Tags - tags the image with a detailed list
     * of words related to the image content. Description - describes the image content with a
     * complete English sentence. Faces - detects if faces are present. If present, generate
     * coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color
     * - determines the accent color, dominant color, and whether an image is black&white. Adult -
     * detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory
     * (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also
     * detected. Objects - detects various objects within an image, including the approximate
     * location. The Objects argument is only available in English. Brands - detects various brands
     * within an image, including the approximate location. The Brands argument is only available in
     * English.
     */
    visualFeatures?: VisualFeatureTypes[];
    /**
     * A string indicating which domain-specific details to return. Multiple values should be
     * comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if
     * detected in the image, Landmarks - identifies notable landmarks in the image.
     */
    details?: Details[];
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language4;
    /**
     * Turn off specified domain models when generating the description.
     */
    descriptionExclude?: DescriptionExclude[];
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientGetAreaOfInterestInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientDescribeImageInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Maximum number of candidate descriptions to be returned.  The default is 1. Default value: 1.
     */
    maxCandidates?: number;
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language5;
    /**
     * Turn off specified domain models when generating the description.
     */
    descriptionExclude?: DescriptionExclude[];
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientDetectObjectsInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientGenerateThumbnailInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * Boolean flag for enabling smart cropping. Default value: false.
     */
    smartCropping?: boolean;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientAnalyzeImageByDomainInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language6;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientRecognizePrintedTextInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.
     * Possible values include: 'unk', 'zh-Hans', 'zh-Hant', 'cs', 'da', 'nl', 'en', 'fi', 'fr',
     * 'de', 'el', 'hu', 'it', 'ja', 'ko', 'nb', 'pl', 'pt', 'ru', 'es', 'sv', 'tr', 'ar', 'ro',
     * 'sr-Cyrl', 'sr-Latn', 'sk'. Default value: 'unk'.
     */
    language?: OcrLanguages;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientTagImageInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The desired language for output generation. If this parameter is not specified, the default
     * value is "en". See https://aka.ms/cv-languages for list of supported languages. Possible
     * values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es', 'et',
     * 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
     * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
     * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'. Default value:
     * 'en'.
     */
    language?: Language7;
    /**
     * Optional parameter to specify the version of the AI model. Accepted values are: "latest",
     * "2021-04-01", "2021-05-01". Defaults to "latest". Default value: 'latest'.
     */
    modelVersion?: string;
}
/**
 * Optional Parameters.
 */
export interface ComputerVisionClientReadInStreamOptionalParams extends msRest.RequestOptionsBase {
    /**
     * The BCP-47 language code of the text in the document. Read supports auto language
     * identification and multi-language documents, so only provide a language code if you would like
     * to force the document to be processed in that specific language. See
     * https://aka.ms/ocr-languages for list of supported languages. Possible values include: 'af',
     * 'ast', 'bi', 'br', 'ca', 'ceb', 'ch', 'co', 'crh', 'cs', 'csb', 'da', 'de', 'en', 'es', 'et',
     * 'eu', 'fi', 'fil', 'fj', 'fr', 'fur', 'fy', 'ga', 'gd', 'gil', 'gl', 'gv', 'hni', 'hsb', 'ht',
     * 'hu', 'ia', 'id', 'it', 'iu', 'ja', 'jv', 'kaa', 'kac', 'kea', 'kha', 'kl', 'ko', 'ku', 'kw',
     * 'lb', 'ms', 'mww', 'nap', 'nl', 'no', 'oc', 'pl', 'pt', 'quc', 'rm', 'sco', 'sl', 'sq', 'sv',
     * 'sw', 'tet', 'tr', 'tt', 'uz', 'vo', 'wae', 'yua', 'za', 'zh-Hans', 'zh-Hant', 'zu'
     */
    language?: OcrDetectionLanguage;
    /**
     * Custom page numbers for multi-page documents(PDF/TIFF), input the number of the pages you want
     * to get OCR result. For a range of pages, use a hyphen. Separate each page or range with a
     * comma.
     */
    pages?: string[];
    /**
     * Optional parameter to specify the version of the OCR model used for text extraction. Accepted
     * values are: "latest", "latest-preview", "2021-04-12". Defaults to "latest". Default value:
     * 'latest'.
     */
    modelVersion?: string;
    /**
     * Optional parameter to specify which reading order algorithm should be applied when ordering
     * the extract text elements. Can be either 'basic' or 'natural'. Will default to 'basic' if not
     * specified. Default value: 'basic'.
     */
    readingOrder?: string;
}
/**
 * Defines headers for Read operation.
 */
export interface ReadHeaders {
    /**
     * URL to query for status of the operation. The operation ID will expire in 48 hours.
     */
    operationLocation: string;
}
/**
 * Defines headers for ReadInStream operation.
 */
export interface ReadInStreamHeaders {
    /**
     * URL to query for status of the operation. The operation ID will expire in 48 hours.
     */
    operationLocation: string;
}
/**
 * Defines values for Gender.
 * Possible values include: 'Male', 'Female'
 * @readonly
 * @enum {string}
 */
export declare type Gender = 'Male' | 'Female';
/**
 * Defines values for ComputerVisionErrorCodes.
 * Possible values include: 'InvalidRequest', 'InvalidArgument', 'InternalServerError',
 * 'ServiceUnavailable'
 * @readonly
 * @enum {string}
 */
export declare type ComputerVisionErrorCodes = 'InvalidRequest' | 'InvalidArgument' | 'InternalServerError' | 'ServiceUnavailable';
/**
 * Defines values for ComputerVisionInnerErrorCodeValue.
 * Possible values include: 'InvalidImageFormat', 'UnsupportedMediaType', 'InvalidImageUrl',
 * 'NotSupportedFeature', 'NotSupportedImage', 'Timeout', 'InternalServerError',
 * 'InvalidImageSize', 'BadArgument', 'DetectFaceError', 'NotSupportedLanguage',
 * 'InvalidThumbnailSize', 'InvalidDetails', 'InvalidModel', 'CancelledRequest',
 * 'NotSupportedVisualFeature', 'FailedToProcess', 'Unspecified', 'StorageException'
 * @readonly
 * @enum {string}
 */
export declare type ComputerVisionInnerErrorCodeValue = 'InvalidImageFormat' | 'UnsupportedMediaType' | 'InvalidImageUrl' | 'NotSupportedFeature' | 'NotSupportedImage' | 'Timeout' | 'InternalServerError' | 'InvalidImageSize' | 'BadArgument' | 'DetectFaceError' | 'NotSupportedLanguage' | 'InvalidThumbnailSize' | 'InvalidDetails' | 'InvalidModel' | 'CancelledRequest' | 'NotSupportedVisualFeature' | 'FailedToProcess' | 'Unspecified' | 'StorageException';
/**
 * Defines values for OperationStatusCodes.
 * Possible values include: 'notStarted', 'running', 'failed', 'succeeded'
 * @readonly
 * @enum {string}
 */
export declare type OperationStatusCodes = 'notStarted' | 'running' | 'failed' | 'succeeded';
/**
 * Defines values for TextRecognitionResultDimensionUnit.
 * Possible values include: 'pixel', 'inch'
 * @readonly
 * @enum {string}
 */
export declare type TextRecognitionResultDimensionUnit = 'pixel' | 'inch';
/**
 * Defines values for TextStyle.
 * Possible values include: 'other', 'handwriting'
 * @readonly
 * @enum {string}
 */
export declare type TextStyle = 'other' | 'handwriting';
/**
 * Defines values for DescriptionExclude.
 * Possible values include: 'Celebrities', 'Landmarks'
 * @readonly
 * @enum {string}
 */
export declare type DescriptionExclude = 'Celebrities' | 'Landmarks';
/**
 * Defines values for OcrLanguages.
 * Possible values include: 'unk', 'zh-Hans', 'zh-Hant', 'cs', 'da', 'nl', 'en', 'fi', 'fr', 'de',
 * 'el', 'hu', 'it', 'ja', 'ko', 'nb', 'pl', 'pt', 'ru', 'es', 'sv', 'tr', 'ar', 'ro', 'sr-Cyrl',
 * 'sr-Latn', 'sk'
 * @readonly
 * @enum {string}
 */
export declare type OcrLanguages = 'unk' | 'zh-Hans' | 'zh-Hant' | 'cs' | 'da' | 'nl' | 'en' | 'fi' | 'fr' | 'de' | 'el' | 'hu' | 'it' | 'ja' | 'ko' | 'nb' | 'pl' | 'pt' | 'ru' | 'es' | 'sv' | 'tr' | 'ar' | 'ro' | 'sr-Cyrl' | 'sr-Latn' | 'sk';
/**
 * Defines values for VisualFeatureTypes.
 * Possible values include: 'ImageType', 'Faces', 'Adult', 'Categories', 'Color', 'Tags',
 * 'Description', 'Objects', 'Brands'
 * @readonly
 * @enum {string}
 */
export declare type VisualFeatureTypes = 'ImageType' | 'Faces' | 'Adult' | 'Categories' | 'Color' | 'Tags' | 'Description' | 'Objects' | 'Brands';
/**
 * Defines values for OcrDetectionLanguage.
 * Possible values include: 'af', 'ast', 'bi', 'br', 'ca', 'ceb', 'ch', 'co', 'crh', 'cs', 'csb',
 * 'da', 'de', 'en', 'es', 'et', 'eu', 'fi', 'fil', 'fj', 'fr', 'fur', 'fy', 'ga', 'gd', 'gil',
 * 'gl', 'gv', 'hni', 'hsb', 'ht', 'hu', 'ia', 'id', 'it', 'iu', 'ja', 'jv', 'kaa', 'kac', 'kea',
 * 'kha', 'kl', 'ko', 'ku', 'kw', 'lb', 'ms', 'mww', 'nap', 'nl', 'no', 'oc', 'pl', 'pt', 'quc',
 * 'rm', 'sco', 'sl', 'sq', 'sv', 'sw', 'tet', 'tr', 'tt', 'uz', 'vo', 'wae', 'yua', 'za',
 * 'zh-Hans', 'zh-Hant', 'zu'
 * @readonly
 * @enum {string}
 */
export declare type OcrDetectionLanguage = 'af' | 'ast' | 'bi' | 'br' | 'ca' | 'ceb' | 'ch' | 'co' | 'crh' | 'cs' | 'csb' | 'da' | 'de' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fil' | 'fj' | 'fr' | 'fur' | 'fy' | 'ga' | 'gd' | 'gil' | 'gl' | 'gv' | 'hni' | 'hsb' | 'ht' | 'hu' | 'ia' | 'id' | 'it' | 'iu' | 'ja' | 'jv' | 'kaa' | 'kac' | 'kea' | 'kha' | 'kl' | 'ko' | 'ku' | 'kw' | 'lb' | 'ms' | 'mww' | 'nap' | 'nl' | 'no' | 'oc' | 'pl' | 'pt' | 'quc' | 'rm' | 'sco' | 'sl' | 'sq' | 'sv' | 'sw' | 'tet' | 'tr' | 'tt' | 'uz' | 'vo' | 'wae' | 'yua' | 'za' | 'zh-Hans' | 'zh-Hant' | 'zu';
/**
 * Defines values for Details.
 * Possible values include: 'Celebrities', 'Landmarks'
 * @readonly
 * @enum {string}
 */
export declare type Details = 'Celebrities' | 'Landmarks';
/**
 * Defines values for Language.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language1.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language1 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language2.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language2 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language3.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language3 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language4.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language4 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language5.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language5 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language6.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language6 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Defines values for Language7.
 * Possible values include: 'ar', 'az', 'bg', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'es',
 * 'et', 'eu', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'lt',
 * 'lv', 'mk', 'ms', 'nb', 'nl', 'pl', 'prs', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sl',
 * 'sr-Cyrl', 'sr-Latn', 'sv', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-Hans', 'zh-Hant'
 * @readonly
 * @enum {string}
 */
export declare type Language7 = 'ar' | 'az' | 'bg' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'ga' | 'gl' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'kk' | 'ko' | 'lt' | 'lv' | 'mk' | 'ms' | 'nb' | 'nl' | 'pl' | 'prs' | 'pt' | 'pt-BR' | 'pt-PT' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr-Cyrl' | 'sr-Latn' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-Hans' | 'zh-Hant';
/**
 * Contains response data for the analyzeImage operation.
 */
export declare type AnalyzeImageResponse = ImageAnalysis & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ImageAnalysis;
    };
};
/**
 * Contains response data for the describeImage operation.
 */
export declare type DescribeImageResponse = ImageDescription & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ImageDescription;
    };
};
/**
 * Contains response data for the detectObjects operation.
 */
export declare type DetectObjectsResponse = DetectResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DetectResult;
    };
};
/**
 * Contains response data for the listModels operation.
 */
export declare type ListModelsResponse = ListModelsResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ListModelsResult;
    };
};
/**
 * Contains response data for the analyzeImageByDomain operation.
 */
export declare type AnalyzeImageByDomainResponse = DomainModelResults & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DomainModelResults;
    };
};
/**
 * Contains response data for the recognizePrintedText operation.
 */
export declare type RecognizePrintedTextResponse = OcrResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OcrResult;
    };
};
/**
 * Contains response data for the tagImage operation.
 */
export declare type TagImageResponse = TagResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: TagResult;
    };
};
/**
 * Contains response data for the generateThumbnail operation.
 */
export declare type GenerateThumbnailResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always undefined in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always undefined in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse;
};
/**
 * Contains response data for the getAreaOfInterest operation.
 */
export declare type GetAreaOfInterestResponse = AreaOfInterestResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: AreaOfInterestResult;
    };
};
/**
 * Contains response data for the read operation.
 */
export declare type ReadResponse = ReadHeaders & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The parsed HTTP response headers.
         */
        parsedHeaders: ReadHeaders;
    };
};
/**
 * Contains response data for the getReadResult operation.
 */
export declare type GetReadResultResponse = ReadOperationResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ReadOperationResult;
    };
};
/**
 * Contains response data for the analyzeImageInStream operation.
 */
export declare type AnalyzeImageInStreamResponse = ImageAnalysis & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ImageAnalysis;
    };
};
/**
 * Contains response data for the getAreaOfInterestInStream operation.
 */
export declare type GetAreaOfInterestInStreamResponse = AreaOfInterestResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: AreaOfInterestResult;
    };
};
/**
 * Contains response data for the describeImageInStream operation.
 */
export declare type DescribeImageInStreamResponse = ImageDescription & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ImageDescription;
    };
};
/**
 * Contains response data for the detectObjectsInStream operation.
 */
export declare type DetectObjectsInStreamResponse = DetectResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DetectResult;
    };
};
/**
 * Contains response data for the generateThumbnailInStream operation.
 */
export declare type GenerateThumbnailInStreamResponse = {
    /**
     * BROWSER ONLY
     *
     * The response body as a browser Blob.
     * Always undefined in node.js.
     */
    blobBody?: Promise<Blob>;
    /**
     * NODEJS ONLY
     *
     * The response body as a node.js Readable stream.
     * Always undefined in the browser.
     */
    readableStreamBody?: NodeJS.ReadableStream;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse;
};
/**
 * Contains response data for the analyzeImageByDomainInStream operation.
 */
export declare type AnalyzeImageByDomainInStreamResponse = DomainModelResults & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DomainModelResults;
    };
};
/**
 * Contains response data for the recognizePrintedTextInStream operation.
 */
export declare type RecognizePrintedTextInStreamResponse = OcrResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OcrResult;
    };
};
/**
 * Contains response data for the tagImageInStream operation.
 */
export declare type TagImageInStreamResponse = TagResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: TagResult;
    };
};
/**
 * Contains response data for the readInStream operation.
 */
export declare type ReadInStreamResponse = ReadInStreamHeaders & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The parsed HTTP response headers.
         */
        parsedHeaders: ReadInStreamHeaders;
    };
};
//# sourceMappingURL=index.d.ts.map