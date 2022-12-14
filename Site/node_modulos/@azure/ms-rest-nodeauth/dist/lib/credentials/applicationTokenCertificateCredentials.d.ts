import { ApplicationTokenCredentialsBase } from "./applicationTokenCredentialsBase";
import { Environment } from "@azure/ms-rest-azure-env";
import { TokenAudience } from "../util/authConstants";
import { TokenResponse, TokenCache } from "adal-node";
import { AzureTokenCredentialsOptions } from "../login";
export declare class ApplicationTokenCertificateCredentials extends ApplicationTokenCredentialsBase {
    readonly certificate: string;
    readonly thumbprint: string;
    /**
     * Creates a new ApplicationTokenCredentials object.
     * See {@link https://azure.microsoft.com/en-us/documentation/articles/active-directory-devquickstarts-dotnet/ Active Directory Quickstart for .Net}
     * for detailed instructions on creating an Azure Active Directory application.
     *
     * @param clientId - The active directory application client id.
     * @param domain - The domain or tenant id containing this application.
     * @param certificate - A PEM encoded certificate private key.
     * @param thumbprint - A hex encoded thumbprint of the certificate.
     * @param tokenAudience - The audience for which the token is requested. Valid values are 'graph', 'batch', or any other resource like 'https://vault.azure.net/'.
     * If tokenAudience is 'graph' then domain should also be provided and its value should not be the default 'common' tenant. It must be a string (preferrably in a guid format).
     * @param environment - The azure environment to authenticate with.
     * @param tokenCache - The token cache. Default value is the MemoryCache object from adal.
     */
    constructor(clientId: string, domain: string, certificate: string, thumbprint: string, tokenAudience?: TokenAudience, environment?: Environment, tokenCache?: TokenCache);
    /**
     * Tries to get the token from cache initially. If that is unsuccessfull then it tries to get the token from ADAL.
     * @returns A promise that resolves to TokenResponse and rejects with an Error.
     */
    getToken(): Promise<TokenResponse>;
    /**
     * Creates a new instance of ApplicationTokenCertificateCredentials.
     *
     * @param clientId  The active directory application client id also known as the SPN (ServicePrincipal Name).
     * See {@link https://azure.microsoft.com/en-us/documentation/articles/active-directory-devquickstarts-dotnet/ Active Directory Quickstart for .Net}
     * for an example.
     * @param certificateStringOrFilePath - A PEM encoded certificate and private key OR an absolute filepath to the .pem file containing that information. For example:
     * - CertificateString: "-----BEGIN PRIVATE KEY-----\n<xxxxx>\n-----END PRIVATE KEY-----\n-----BEGIN CERTIFICATE-----\n<yyyyy>\n-----END CERTIFICATE-----\n"
     * - CertificateFilePath: **Absolute** file path of the .pem file.
     * @param domain The domain or tenant id containing this application.
     * @param options AzureTokenCredentialsOptions - Object representing optional parameters.
     *
     * @returns ApplicationTokenCertificateCredentials
     */
    static create(clientId: string, certificateStringOrFilePath: string, domain: string, options: AzureTokenCredentialsOptions): ApplicationTokenCertificateCredentials;
}
//# sourceMappingURL=applicationTokenCertificateCredentials.d.ts.map