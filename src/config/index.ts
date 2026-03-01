/**
 * This file imports configuration objects from either the config.dev.js file
 * or the config.prod.js file depending on whether we are in __DEV__ or not.
 *
 * Note that we do not gitignore these files. Unlike on web servers, just because
 * these are not checked into your repo doesn't mean that they are secure.
 * In fact, you're shipping a JavaScript bundle with every
 * config variable in plain text. Anyone who downloads your app can easily
 * extract them.
 *
 * If you doubt this, just bundle your app, and then go look at the bundle and
 * search it for one of your config variable values. You'll find it there.
 *
 * Read more here: https://reactnative.dev/docs/security#storing-sensitive-info
 */
import BaseConfig from "./config.base";
import ProdConfig from "./config.prod";
import DevConfig from "./config.dev";

let ExtraConfig = ProdConfig;

if (__DEV__) {
  console.log("Using dev config");
  ExtraConfig = DevConfig;
}

const Config = { ...BaseConfig, ...ExtraConfig };

export const SUPABASE_URL = "https://ypcbpnjxezjngpiuftnu.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwY2Jwbmp4ZXpqbmdwaXVmdG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NzA3MTksImV4cCI6MjA2OTQ0NjcxOX0.GtC3j9DWk2vFeckkRrPFxAP8iauMlCAJYJO8jrUuJZ0";

export default Config;