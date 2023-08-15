import ShopifyClient from "../node_modules/shopify-buy/index.es.js";

const client = ShopifyClient.buildClient({
  domain: "ba5040-3.myshopify.com",
  apiVersion: "2023-04",
  storefrontAccessToken: "66fe229ecfe854f30b602e3552328fe0",
  
});

export default client;