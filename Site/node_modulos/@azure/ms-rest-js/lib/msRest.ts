// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

/// <reference path="../dom-shim.d.ts" />

export {
  WebResource,
  WebResourceLike,
  HttpRequestBody,
  RequestPrepareOptions,
  HttpMethods,
  ParameterValue,
  RequestOptionsBase,
  TransferProgressEvent,
  AbortSignalLike,
} from "./webResource";
export { DefaultHttpClient } from "./defaultHttpClient";
export { CommonRequestInfo, CommonRequestInit, CommonResponse } from "./fetchHttpClient";
export { HttpClient } from "./httpClient";
export { HttpHeader, HttpHeaders, HttpHeadersLike, RawHttpHeaders } from "./httpHeaders";
export { HttpOperationResponse, HttpResponse, RestResponse } from "./httpOperationResponse";
export { HttpPipelineLogger } from "./httpPipelineLogger";
export { HttpPipelineLogLevel } from "./httpPipelineLogLevel";
export { RestError } from "./restError";
export { OperationArguments } from "./operationArguments";
export {
  OperationParameter,
  OperationQueryParameter,
  OperationURLParameter,
  ParameterPath,
} from "./operationParameter";
export { OperationResponse } from "./operationResponse";
export { OperationSpec } from "./operationSpec";
export {
  AgentSettings,
  ProxySettings,
  ServiceClient,
  ServiceClientOptions,
  flattenResponse,
} from "./serviceClient";
export { QueryCollectionFormat } from "./queryCollectionFormat";
export { Constants } from "./util/constants";
export { logPolicy } from "./policies/logPolicy";
export {
  BaseRequestPolicy,
  RequestPolicy,
  RequestPolicyFactory,
  RequestPolicyOptions,
  RequestPolicyOptionsLike,
} from "./policies/requestPolicy";
export { generateClientRequestIdPolicy } from "./policies/generateClientRequestIdPolicy";
export { exponentialRetryPolicy } from "./policies/exponentialRetryPolicy";
export { systemErrorRetryPolicy } from "./policies/systemErrorRetryPolicy";
export { throttlingRetryPolicy } from "./policies/throttlingRetryPolicy";
export { agentPolicy } from "./policies/agentPolicy";
export { getDefaultProxySettings, proxyPolicy } from "./policies/proxyPolicy";
export { RedirectOptions, redirectPolicy } from "./policies/redirectPolicy";
export { signingPolicy } from "./policies/signingPolicy";
export {
  TelemetryInfo,
  userAgentPolicy,
  getDefaultUserAgentValue,
} from "./policies/userAgentPolicy";
export {
  DeserializationContentTypes,
  deserializationPolicy,
  deserializeResponseBody,
} from "./policies/deserializationPolicy";
export {
  MapperType,
  SimpleMapperType,
  CompositeMapperType,
  DictionaryMapperType,
  SequenceMapperType,
  EnumMapperType,
  Mapper,
  BaseMapper,
  CompositeMapper,
  SequenceMapper,
  DictionaryMapper,
  EnumMapper,
  MapperConstraints,
  PolymorphicDiscriminator,
  Serializer,
  UrlParameterValue,
  serializeObject,
} from "./serializer";
export {
  stripRequest,
  stripResponse,
  delay,
  executePromisesSequentially,
  generateUuid,
  encodeUri,
  ServiceCallback,
  promiseToCallback,
  promiseToServiceCallback,
  isValidUuid,
  applyMixins,
  isNode,
  isDuration,
} from "./util/utils";
export { URLBuilder, URLQuery } from "./url";

// Credentials
export { TokenCredentials } from "./credentials/tokenCredentials";
export { TokenResponse } from "./credentials/tokenResponse";
export { BasicAuthenticationCredentials } from "./credentials/basicAuthenticationCredentials";
export { ApiKeyCredentials, ApiKeyCredentialOptions } from "./credentials/apiKeyCredentials";
export { ServiceClientCredentials } from "./credentials/serviceClientCredentials";
export { TopicCredentials } from "./credentials/topicCredentials";
export { DomainCredentials } from "./credentials/domainCredentials";
export { Authenticator } from "./credentials/credentials";
export { AzureIdentityCredentialAdapter } from "./credentials/azureIdentityTokenCredentialAdapter";
