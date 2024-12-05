/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { ClosedEnum } from "../sdk/types/enums.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
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
export const ServerEnvironment = {
  Prod: "prod",
  Staging: "staging",
  Dev: "dev",
} as const;
/**
 * The environment name. Defaults to the production environment.
 */
export type ServerEnvironment = ClosedEnum<typeof ServerEnvironment>;

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
   * Sets the environment variable for url substitution
   */
  environment?: ServerEnvironment;
  /**
   * Sets the organization variable for url substitution
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
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const serverParams: Record<string, Params> = {
    "prod": {},
    "staging": {},
    "customer": {
      "environment": options.environment ?? "prod",
      "organization": options.organization ?? "api",
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
  sdkVersion: "4.0.1",
  genVersion: "2.471.2",
  userAgent:
    "speakeasy-sdk/typescript 4.0.1 2.471.2 1.0.0 @speakeasy-sdks/speakeasy-bar",
} as const;
