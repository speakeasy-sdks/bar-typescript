/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export class Drinks extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get a drink.
     *
     * @remarks
     * Get a drink by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async getDrink(name: string, options?: RequestOptions): Promise<operations.GetDrinkResponse> {
        const input$: operations.GetDrinkRequest = {
            name: name,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDrinkRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            name: encodeSimple$("name", payload$.name, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/drink/{name}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getDrink",
            oAuth2Scopes: ["read:basic"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetDrinkResponse>()
            .json(200, operations.GetDrinkResponse$inboundSchema, { key: "Drink" })
            .fail("4XX")
            .json("5XX", errors.APIError$inboundSchema, { err: true })
            .json("default", operations.GetDrinkResponse$inboundSchema, { key: "Error" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a list of drinks.
     *
     * @remarks
     * Get a list of drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async listDrinks(
        drinkType?: shared.DrinkType | undefined,
        options?: RequestOptions
    ): Promise<operations.ListDrinksResponse> {
        const input$: operations.ListDrinksRequest = {
            drinkType: drinkType,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListDrinksRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/drinks")();

        const query$ = encodeFormQuery$({
            drinkType: payload$.drinkType,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "listDrinks",
            oAuth2Scopes: ["read:basic", "read:drinks"],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ListDrinksResponse>()
            .json(200, operations.ListDrinksResponse$inboundSchema, { key: "classes" })
            .fail("4XX")
            .json("5XX", errors.APIError$inboundSchema, { err: true })
            .json("default", operations.ListDrinksResponse$inboundSchema, { key: "Error" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
