/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { HTTPClient } from "./http.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * The production server.
 */
export const ServerProd = "prod";
/**
 * The staging server.
 */
export const ServerStaging = "staging";
/**
 * A per-organization and per-environment API.
 */
export const ServerCustomer = "customer";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://speakeasy.bar",
    [ServerStaging]: "https://staging.speakeasy.bar",
    [ServerCustomer]: "https://{organization}.{environment}.speakeasy.bar",
} as const;

/**
 * The environment name. Defaults to the production environment.
 */
export enum ServerEnvironment {
    Prod = "prod",
    Staging = "staging",
    Dev = "dev",
}

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;
    /**
     * Allows setting the organization variable for url substitution
     */
    organization?: string;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const serverParams: Record<string, Params> = {
        prod: {},
        staging: {},
        customer: {
            environment: options.environment ?? "prod",
            organization: options.organization ?? "api",
        },
    };

    let params: Params = {};

    if (!serverURL) {
        const server = options.server ?? ServerProd;
        serverURL = ServerList[server] || "";
        params = serverParams[server] || {};
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "1.0.0-alpha",
    genVersion: "2.354.2",
    userAgent: "speakeasy-sdk/typescript 1.0.0-alpha 2.354.2 1.0.0 @speakeasy-sdks/speakeasy-bar",
} as const;
