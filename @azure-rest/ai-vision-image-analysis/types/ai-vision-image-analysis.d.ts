/// <reference types="node" />

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface AnalyzeFromImageData {
    /** Performs a single Image Analysis operation */
    post(options: AnalyzeFromImageDataParameters): StreamableMethod<AnalyzeFromImageData200Response | AnalyzeFromImageDataDefaultResponse>;
    /** Performs a single Image Analysis operation */
    post(options: AnalyzeFromUrlParameters): StreamableMethod<AnalyzeFromUrl200Response | AnalyzeFromUrlDefaultResponse>;
}

/** The request has succeeded. */
export declare interface AnalyzeFromImageData200Response extends HttpResponse {
    status: "200";
    body: ImageAnalysisResultOutput;
}

export declare interface AnalyzeFromImageDataBodyParam {
    /**
     * The image to be analyzed
     *
     * Value may contain any sequence of octets
     */
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export declare interface AnalyzeFromImageDataDefaultHeaders {
    /** String error code indicating what went wrong. */
    "x-ms-error-code"?: string;
}

export declare interface AnalyzeFromImageDataDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & AnalyzeFromImageDataDefaultHeaders;
}

export declare interface AnalyzeFromImageDataMediaTypesParam {
    /** The format of the HTTP payload. */
    contentType: "application/octet-stream";
}

export declare type AnalyzeFromImageDataParameters = AnalyzeFromImageDataQueryParam & AnalyzeFromImageDataMediaTypesParam & AnalyzeFromImageDataBodyParam & RequestParameters;

export declare interface AnalyzeFromImageDataQueryParam {
    queryParameters: AnalyzeFromImageDataQueryParamProperties;
}

export declare interface AnalyzeFromImageDataQueryParamProperties {
    /**
     * A list of visual features to analyze.
     * Seven visual features are supported: Caption, DenseCaptions, Read (OCR), Tags, Objects, SmartCrops, and People.
     * At least one visual feature must be specified.
     */
    features: string[];
    /**
     * The desired language for result generation (a two-letter language code).
     * If this option is not specified, the default value 'en' is used (English).
     * See https://aka.ms/cv-languages for a list of supported languages.
     */
    language?: string;
    /**
     * Boolean flag for enabling gender-neutral captioning for Caption and Dense Captions features.
     * By default captions may contain gender terms (for example: 'man', 'woman', or 'boy', 'girl').
     * If you set this to "true", those will be replaced with gender-neutral terms (for example: 'person' or 'child').
     */
    "gender-neutral-caption"?: boolean;
    /**
     * A list of aspect ratios to use for smart cropping.
     * Aspect ratios are calculated by dividing the target crop width in pixels by the height in pixels.
     * Supported values are between 0.75 and 1.8 (inclusive).
     * If this parameter is not specified, the service will return one crop region with an aspect
     * ratio it sees fit between 0.5 and 2.0 (inclusive).
     */
    "smartcrops-aspect-ratios"?: number[];
    /**
     * The version of cloud AI-model used for analysis.
     * The format is the following: 'latest' (default value) or 'YYYY-MM-DD' or 'YYYY-MM-DD-preview', where 'YYYY', 'MM', 'DD' are the year, month and day associated with the model.
     * This is not commonly set, as the default always gives the latest AI model with recent improvements.
     * If however you would like to make sure analysis results do not change over time, set this value to a specific model version.
     */
    "model-version"?: string;
}

/** The request has succeeded. */
export declare interface AnalyzeFromUrl200Response extends HttpResponse {
    status: "200";
    body: ImageAnalysisResultOutput;
}

export declare interface AnalyzeFromUrlBodyParam {
    /** The image to be analyzed */
    body: ImageUrl;
}

export declare interface AnalyzeFromUrlDefaultHeaders {
    /** String error code indicating what went wrong. */
    "x-ms-error-code"?: string;
}

export declare interface AnalyzeFromUrlDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & AnalyzeFromUrlDefaultHeaders;
}

export declare interface AnalyzeFromUrlMediaTypesParam {
    /** The format of the HTTP payload. */
    contentType: "application/json";
}

export declare type AnalyzeFromUrlParameters = AnalyzeFromUrlQueryParam & AnalyzeFromUrlMediaTypesParam & AnalyzeFromUrlBodyParam & RequestParameters;

export declare interface AnalyzeFromUrlQueryParam {
    queryParameters: AnalyzeFromUrlQueryParamProperties;
}

export declare interface AnalyzeFromUrlQueryParamProperties {
    /**
     * A list of visual features to analyze.
     * Seven visual features are supported: Caption, DenseCaptions, Read (OCR), Tags, Objects, SmartCrops, and People.
     * At least one visual feature must be specified.
     */
    features: string[];
    /**
     * The desired language for result generation (a two-letter language code).
     * If this option is not specified, the default value 'en' is used (English).
     * See https://aka.ms/cv-languages for a list of supported languages.
     */
    language?: string;
    /**
     * Boolean flag for enabling gender-neutral captioning for Caption and Dense Captions features.
     * By default captions may contain gender terms (for example: 'man', 'woman', or 'boy', 'girl').
     * If you set this to "true", those will be replaced with gender-neutral terms (for example: 'person' or 'child').
     */
    "gender-neutral-caption"?: boolean;
    /**
     * A list of aspect ratios to use for smart cropping.
     * Aspect ratios are calculated by dividing the target crop width in pixels by the height in pixels.
     * Supported values are between 0.75 and 1.8 (inclusive).
     * If this parameter is not specified, the service will return one crop region with an aspect
     * ratio it sees fit between 0.5 and 2.0 (inclusive).
     */
    "smartcrops-aspect-ratios"?: number[];
    /**
     * The version of cloud AI-model used for analysis.
     * The format is the following: 'latest' (default value) or 'YYYY-MM-DD' or 'YYYY-MM-DD-preview', where 'YYYY', 'MM', 'DD' are the year, month and day associated with the model.
     * This is not commonly set, as the default always gives the latest AI model with recent improvements.
     * If however you would like to make sure analysis results do not change over time, set this value to a specific model version.
     */
    "model-version"?: string;
}

/** Represents a generated phrase that describes the content of the whole image. */
export declare interface CaptionResultOutput {
    /**
     * A score, in the range of 0 to 1 (inclusive), representing the confidence that this description is accurate.
     * Higher values indicating higher confidence.
     */
    confidence: number;
    /** The text of the caption. */
    text: string;
}

/**
 * Initialize a new instance of `ImageAnalysisClient`
 * @param endpoint - Azure AI Computer Vision endpoint (protocol and hostname, for example:
 * https://<resource-name>.cognitiveservices.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
declare function createClient(endpoint: string, credentials: KeyCredential, options?: ClientOptions): ImageAnalysisClient;
export default createClient;

/**
 * A region at the desired aspect ratio that can be used as image thumbnail.
 * The region preserves as much content as possible from the analyzed image, with priority given to detected faces.
 */
export declare interface CropRegionOutput {
    /**
     * The aspect ratio of the crop region.
     * Aspect ratio is calculated by dividing the width of the region in pixels by its height in pixels.
     * The aspect ratio will be in the range 0.75 to 1.8 (inclusive) if provided by the developer during the analyze call.
     * Otherwise, it will be in the range 0.5 to 2.0 (inclusive).
     */
    aspectRatio: number;
    /** The bounding box of the region. */
    boundingBox: ImageBoundingBoxOutput;
}

/** Represents a generated phrase that describes the content of the whole image or a region in the image */
export declare interface DenseCaptionOutput {
    /**
     * A score, in the range of 0 to 1 (inclusive), representing the confidence that this description is accurate.
     * Higher values indicating higher confidence.
     */
    confidence: number;
    /** The text of the caption. */
    text: string;
    /** The image region of which this caption applies. */
    boundingBox: ImageBoundingBoxOutput;
}

/**
 * Represents a list of up to 10 image captions for different regions of the image.
 * The first caption always applies to the whole image.
 */
export declare interface DenseCaptionsResultOutput {
    /** The list of image captions. */
    values: Array<DenseCaptionOutput>;
}

/** Represents a physical object detected in an image. */
export declare interface DetectedObjectOutput {
    /** A rectangular boundary where the object was detected. */
    boundingBox: ImageBoundingBoxOutput;
    /** A single-item list containing the object information. */
    tags: Array<DetectedTagOutput>;
}

/** Represents a person detected in an image. */
export declare interface DetectedPersonOutput {
    /** A rectangular boundary where the person was detected. */
    readonly boundingBox: ImageBoundingBoxOutput;
    /**
     * A score, in the range of 0 to 1 (inclusive), representing the confidence that this detection was accurate.
     * Higher values indicating higher confidence.
     */
    readonly confidence: number;
}

/**
 * A content entity observation in the image. A tag can be a physical object, living being, scenery, or action
 * that appear in the image.
 */
export declare interface DetectedTagOutput {
    /**
     * A score, in the range of 0 to 1 (inclusive), representing the confidence that this entity was observed.
     * Higher values indicating higher confidence.
     */
    confidence: number;
    /** Name of the entity. */
    name: string;
}

/** Represents a single block of detected text in the image. */
export declare interface DetectedTextBlockOutput {
    /** A list of text lines in this block. */
    lines: Array<DetectedTextLineOutput>;
}

/** Represents a single line of text in the image. */
export declare interface DetectedTextLineOutput {
    /** Text content of the detected text line. */
    text: string;
    /** A bounding polygon around the text line. At the moment only quadrilaterals are supported (represented by 4 image points). */
    boundingPolygon: Array<ImagePointOutput>;
    /** A list of words in this line. */
    words: Array<DetectedTextWordOutput>;
}

/**
 * A word object consisting of a contiguous sequence of characters. For non-space delimited languages,
 * such as Chinese, Japanese, and Korean, each character is represented as its own word.
 */
export declare interface DetectedTextWordOutput {
    /** Text content of the word. */
    text: string;
    /** A bounding polygon around the word. At the moment only quadrilaterals are supported (represented by 4 image points). */
    boundingPolygon: Array<ImagePointOutput>;
    /** The level of confidence that the word was detected. Confidence scores span the range of 0.0 to 1.0 (inclusive), with higher values indicating a higher confidence of detection. */
    confidence: number;
}

export declare type ImageAnalysisClient = Client & {
    path: Routes;
};

/** Represents the outcome of an Image Analysis operation. */
export declare interface ImageAnalysisResultOutput {
    /** The generated phrase that describes the content of the analyzed image. */
    captionResult?: CaptionResultOutput;
    /**
     * The up to 10 generated phrases, the first describing the content of the whole image,
     * and the others describing the content of different regions of the image.
     */
    denseCaptionsResult?: DenseCaptionsResultOutput;
    /** Metadata associated with the analyzed image. */
    metadata: ImageMetadataOutput;
    /** The cloud AI model used for the analysis */
    modelVersion: string;
    /** A list of detected physical objects in the analyzed image, and their location. */
    objectsResult?: ObjectsResultOutput;
    /** A list of detected people in the analyzed image, and their location. */
    peopleResult?: PeopleResultOutput;
    /** The extracted printed and hand-written text in the analyze image. Also knows as OCR. */
    readResult?: ReadResultOutput;
    /**
     * A list of crop regions at the desired as aspect ratios (if provided) that can be used as image thumbnails.
     * These regions preserve as much content as possible from the analyzed image, with priority given to detected faces.
     */
    smartCropsResult?: SmartCropsResultOutput;
    /** A list of content tags in the analyzed image. */
    tagsResult?: TagsResultOutput;
}

/** A basic rectangle specifying a sub-region of the image. */
export declare interface ImageBoundingBoxOutput {
    /** X-coordinate of the top left point of the area, in pixels. */
    x: number;
    /** Y-coordinate of the top left point of the area, in pixels. */
    y: number;
    /** Width of the area, in pixels. */
    w: number;
    /** Height of the area, in pixels. */
    h: number;
}

/** Metadata associated with the analyzed image. */
export declare interface ImageMetadataOutput {
    /** The height of the image in pixels. */
    height: number;
    /** The width of the image in pixels. */
    width: number;
}

/** Represents the coordinates of a single pixel in the image. */
export declare interface ImagePointOutput {
    /** The horizontal x-coordinate of this point, in pixels. Zero values corresponds to the left-most pixels in the image. */
    x: number;
    /** The vertical y-coordinate of this point, in pixels. Zero values corresponds to the top-most pixels in the image. */
    y: number;
}

/** An object holding the publicly reachable URL of an image to analyze. */
export declare interface ImageUrl {
    /** Publicly reachable URL of an image to analyze. */
    url: string;
}

/** An object holding the publicly reachable URL of an image to analyze. */
export declare interface ImageUrlOutput {
    /** Publicly reachable URL of an image to analyze. */
    url: string;
}

export declare function isUnexpected(response: AnalyzeFromImageData200Response | AnalyzeFromUrl200Response | AnalyzeFromImageDataDefaultResponse): response is AnalyzeFromImageDataDefaultResponse;

/** Represents a list of physical object detected in an image and their location. */
export declare interface ObjectsResultOutput {
    /** A list of physical object detected in an image and their location. */
    values: Array<DetectedObjectOutput>;
}

/** Represents a list of people detected in an image and their location. */
export declare interface PeopleResultOutput {
    /** A list of people detected in an image and their location. */
    values: Array<DetectedPersonOutput>;
}

/** The results of a Read (OCR) operation. */
export declare interface ReadResultOutput {
    /** A list of text blocks in the image. At the moment only one block is returned, containing all the text detected in the image. */
    blocks: Array<DetectedTextBlockOutput>;
}

export declare interface Routes {
    /** Resource for '/imageanalysis:analyze' has methods for the following verbs: post */
    (path: "/imageanalysis:analyze"): AnalyzeFromImageData;
}

/**
 * Smart cropping result. A list of crop regions at the desired as aspect ratios (if provided) that can be used as image thumbnails.
 * These regions preserve as much content as possible from the analyzed image, with priority given to detected faces.
 */
export declare interface SmartCropsResultOutput {
    /** A list of crop regions. */
    values: Array<CropRegionOutput>;
}

/**
 * A list of entities observed in the image. Tags can be physical objects, living being, scenery, or actions
 * that appear in the image.
 */
export declare interface TagsResultOutput {
    /** A list of tags. */
    values: Array<DetectedTagOutput>;
}

export { }
