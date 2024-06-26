/**
 * Azure Rest Core Client library for JavaScript
 * @packageDocumentation
 */

/// <reference types="node" />

import { AbortSignalLike } from '@azure/abort-controller';
import { HttpClient } from '@azure/core-rest-pipeline';
import { KeyCredential } from '@azure/core-auth';
import { LogPolicyOptions } from '@azure/core-rest-pipeline';
import { OperationTracingOptions } from '@azure/core-tracing';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PipelineOptions } from '@azure/core-rest-pipeline';
import { PipelinePolicy } from '@azure/core-rest-pipeline';
import { PipelineRequest } from '@azure/core-rest-pipeline';
import { PipelineResponse } from '@azure/core-rest-pipeline';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestBodyType } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';
import { TransferProgressEvent } from '@azure/core-rest-pipeline';

/**
 * Adds a credential policy to the pipeline if a credential is provided. If none is provided, no policy is added.
 */
export declare function addCredentialPipelinePolicy(pipeline: Pipeline, endpoint: string, options?: AddCredentialPipelinePolicyOptions): void;

/**
 * Optional parameters for adding a credential policy to the pipeline.
 */
export declare interface AddCredentialPipelinePolicyOptions {
    /**
     * Options related to the client.
     */
    clientOptions?: ClientOptions;
    /**
     * The credential to use.
     */
    credential?: TokenCredential | KeyCredential;
}

/**
 * Used to configure additional policies added to the pipeline at construction.
 */
export declare interface AdditionalPolicyConfig {
    /**
     * A policy to be added.
     */
    policy: PipelinePolicy;
    /**
     * Determines if this policy be applied before or after retry logic.
     * Only use `perRetry` if you need to modify the request again
     * each time the operation is retried due to retryable service
     * issues.
     */
    position: "perCall" | "perRetry";
}

/**
 * Shape of a Rest Level Client
 */
export declare interface Client {
    /**
     * The pipeline used by this client to make requests
     */
    pipeline: Pipeline;
    /**
     * This method will be used to send request that would check the path to provide
     * strong types. When used by the codegen this type gets overriden wit the generated
     * types. For example:
     * ```typescript
     * export type MyClient = Client & {
     *    path: Routes;
     * }
     * ```
     */
    path: Function;
    /**
     * This method allows arbitrary paths and doesn't provide strong types
     */
    pathUnchecked: PathUnchecked;
}

/**
 * General options that a Rest Level Client can take
 */
export declare type ClientOptions = PipelineOptions & {
    /**
     * Credentials information
     */
    credentials?: {
        /**
         * Authentication scopes for AAD
         */
        scopes?: string[];
        /**
         * Heder name for Client Secret authentication
         */
        apiKeyHeaderName?: string;
    };
    /**
     * Base url for the client
     * @deprecated This property is deprecated and will be removed soon, please use endpoint instead
     */
    baseUrl?: string;
    /**
     * Endpoint for the client
     */
    endpoint?: string;
    /**
     * Options for setting a custom apiVersion.
     */
    apiVersion?: string;
    /**
     * Option to allow calling http (insecure) endpoints
     */
    allowInsecureConnection?: boolean;
    /**
     * Additional policies to include in the HTTP pipeline.
     */
    additionalPolicies?: AdditionalPolicyConfig[];
    /**
     * Specify a custom HttpClient when making requests.
     */
    httpClient?: HttpClient;
    /**
     * Options to configure request/response logging.
     */
    loggingOptions?: LogPolicyOptions;
};

/**
 * Creates a rest error from a PathUnchecked response
 */
export declare function createRestError(response: PathUncheckedResponse): RestError;

/**
 * Creates a rest error from an error message and a PathUnchecked response
 */
export declare function createRestError(message: string, response: PathUncheckedResponse): RestError;

/** The error object. */
export declare interface ErrorModel {
    /** One of a server-defined set of error codes. */
    code: string;
    /** A human-readable representation of the error. */
    message: string;
    /** The target of the error. */
    target?: string;
    /** An array of details about specific errors that led to this reported error. */
    details: Array<ErrorModel>;
    /** An object containing more specific information than the current object about the error. */
    innererror?: InnerError;
}

/** A response containing error details. */
export declare interface ErrorResponse {
    /** The error object. */
    error: ErrorModel;
}

/**
 * Wrapper object for http request and response. Deserialized object is stored in
 * the `parsedBody` property when the response body is received in JSON.
 */
export declare interface FullOperationResponse extends PipelineResponse {
    /**
     * The raw HTTP response headers.
     */
    rawHeaders?: RawHttpHeaders;
    /**
     * The response body as parsed JSON.
     */
    parsedBody?: RequestBodyType;
    /**
     * The request that generated the response.
     */
    request: PipelineRequest;
}

/**
 * Creates a client with a default pipeline
 * @param endpoint - Base endpoint for the client
 * @param options - Client options
 */
export declare function getClient(endpoint: string, options?: ClientOptions): Client;

/**
 * Creates a client with a default pipeline
 * @param endpoint - Base endpoint for the client
 * @param credentials - Credentials to authenticate the requests
 * @param options - Client options
 */
export declare function getClient(endpoint: string, credentials?: TokenCredential | KeyCredential, options?: ClientOptions): Client;

/**
 * Http Response which body is a NodeJS stream object
 */
export declare type HttpBrowserStreamResponse = HttpResponse & {
    /**
     * Streamable body
     */
    body?: ReadableStream<Uint8Array>;
};

/**
 * Http Response which body is a NodeJS stream object
 */
export declare type HttpNodeStreamResponse = HttpResponse & {
    /**
     * Streamable body
     */
    body?: NodeJS.ReadableStream;
};

/**
 * Represents the shape of an HttpResponse
 */
export declare type HttpResponse = {
    /**
     * The request that generated this response.
     */
    request: PipelineRequest;
    /**
     * The HTTP response headers.
     */
    headers: RawHttpHeaders;
    /**
     * Parsed body
     */
    body: unknown;
    /**
     * The HTTP status code of the response.
     */
    status: string;
};

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export declare interface InnerError {
    /** One of a server-defined set of error codes. */
    code: string;
    /** Inner error. */
    innererror?: InnerError;
}

/**
 * The base options type for all operations.
 */
export declare interface OperationOptions {
    /**
     * The signal which can be used to abort requests.
     */
    abortSignal?: AbortSignalLike;
    /**
     * Options used when creating and sending HTTP requests for this operation.
     */
    requestOptions?: OperationRequestOptions;
    /**
     * Options used when tracing is enabled.
     */
    tracingOptions?: OperationTracingOptions;
    /**
     * A function to be called each time a response is received from the server
     * while performing the requested operation.
     * May be called multiple times.
     */
    onResponse?: RawResponseCallback;
}

/**
 * Helper function to convert OperationOptions to RequestParameters
 * @param options - the options that are used by Modular layer to send the request
 * @returns the result of the conversion in RequestParameters of RLC layer
 */
export declare function operationOptionsToRequestParameters(options: OperationOptions): RequestParameters;

/**
 * Options used when creating and sending HTTP requests for this operation.
 */
export declare interface OperationRequestOptions {
    /**
     * User defined custom request headers that
     * will be applied before the request is sent.
     */
    headers?: RawHttpHeadersInput;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     */
    timeout?: number;
    /**
     * Callback which fires upon upload progress.
     */
    onUploadProgress?: (progress: TransferProgressEvent) => void;
    /**
     * Callback which fires upon download progress.
     */
    onDownloadProgress?: (progress: TransferProgressEvent) => void;
    /**
     * Set to true if the request is sent over HTTP instead of HTTPS
     */
    allowInsecureConnection?: boolean;
    /**
     * Set to true if you want to skip encoding the path parameters
     */
    skipUrlEncoding?: boolean;
}

/**
 * Helper type used to detect parameters in a path template
 * text surrounded by \{\} will be considered a path parameter
 */
export declare type PathParameters<TRoute extends string> = TRoute extends `${infer _Head}/{${infer _Param}}${infer Tail}` ? [
pathParameter: string,
...pathParameters: PathParameters<Tail>
] : [
];

/**
 * Defines the signature for pathUnchecked.
 */
export declare type PathUnchecked = <TPath extends string>(path: TPath, ...args: PathParameters<TPath>) => ResourceMethods<StreamableMethod>;

/**
 * Type to use with pathUnchecked, overrides the body type to any to allow flexibility
 */
export declare type PathUncheckedResponse = HttpResponse & {
    body: any;
};

/**
 * A function to be called each time a response is received from the server
 * while performing the requested operation.
 * May be called multiple times.
 */
export declare type RawResponseCallback = (rawResponse: FullOperationResponse, error?: unknown) => void;

/**
 * Shape of the default request parameters, this may be overriden by the specific
 * request types to provide strong types
 */
export declare type RequestParameters = {
    /**
     * Headers to send along with the request
     */
    headers?: RawHttpHeadersInput;
    /**
     * Sets the accept header to send to the service
     * defaults to 'application/json'. If also a header "accept" is set
     * this property will take precedence.
     */
    accept?: string;
    /**
     * Body to send with the request
     */
    body?: unknown;
    /**
     * Query parameters to send with the request
     */
    queryParameters?: Record<string, unknown>;
    /**
     * Set an explicit content-type to send with the request. If also a header "content-type" is set
     * this property will take precedence.
     */
    contentType?: string;
    /** Set to true if the request is sent over HTTP instead of HTTPS */
    allowInsecureConnection?: boolean;
    /** Set to true if you want to skip encoding the path parameters */
    skipUrlEncoding?: boolean;
    /**
     * Path parameters for custom the base url
     */
    pathParameters?: Record<string, any>;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     */
    timeout?: number;
    /**
     * Callback which fires upon upload progress.
     */
    onUploadProgress?: (progress: TransferProgressEvent) => void;
    /**
     * Callback which fires upon download progress.
     */
    onDownloadProgress?: (progress: TransferProgressEvent) => void;
    /**
     * The signal which can be used to abort requests.
     */
    abortSignal?: AbortSignalLike;
    /**
     * Options used when tracing is enabled.
     */
    tracingOptions?: OperationTracingOptions;
    /**
     * A function to be called each time a response is received from the server
     * while performing the requested operation.
     * May be called multiple times.
     */
    onResponse?: RawResponseCallback;
};

/**
 * Defines the methods that can be called on a resource
 */
export declare interface ResourceMethods<TResponse = PromiseLike<PathUncheckedResponse>> {
    /**
     * Definition of the GET HTTP method for a resource
     */
    get: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the POST HTTP method for a resource
     */
    post: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the PUT HTTP method for a resource
     */
    put: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the PATCH HTTP method for a resource
     */
    patch: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the DELETE HTTP method for a resource
     */
    delete: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the HEAD HTTP method for a resource
     */
    head: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the OPTIONS HTTP method for a resource
     */
    options: (options?: RequestParameters) => TResponse;
    /**
     * Definition of the TRACE HTTP method for a resource
     */
    trace: (options?: RequestParameters) => TResponse;
}

/**
 * Defines the type for a method that supports getting the response body as
 * a raw stream
 */
export declare type StreamableMethod<TResponse = PathUncheckedResponse> = PromiseLike<TResponse> & {
    asNodeStream: () => Promise<HttpNodeStreamResponse>;
    asBrowserStream: () => Promise<HttpBrowserStreamResponse>;
};

export { }
