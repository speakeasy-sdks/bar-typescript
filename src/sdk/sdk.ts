/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Authentication } from "./authentication.js";
import { Config } from "./config.js";
import { Drinks } from "./drinks.js";
import { Ingredients } from "./ingredients.js";
import { Orders } from "./orders.js";

export class BarSDK extends ClientSDK {
  private _authentication?: Authentication;
  get authentication(): Authentication {
    return (this._authentication ??= new Authentication(this._options));
  }

  private _drinks?: Drinks;
  get drinks(): Drinks {
    return (this._drinks ??= new Drinks(this._options));
  }

  private _ingredients?: Ingredients;
  get ingredients(): Ingredients {
    return (this._ingredients ??= new Ingredients(this._options));
  }

  private _orders?: Orders;
  get orders(): Orders {
    return (this._orders ??= new Orders(this._options));
  }

  private _config?: Config;
  get config(): Config {
    return (this._config ??= new Config(this._options));
  }
}
