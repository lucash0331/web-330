
/*
============================================
;  Title:  http-client.js
;  Author: Lucas Hoffman
;  Date: October 5, 2021
;  Description: JS file for whatabook2 
;===========================================
*/

export class HttpClient {
  constructor() {}

  async get(url, params = "") {
    url = new URL(url);
    url.search = new URLSearchParams(params);
    let res = await fetch(url.toString(), { method: "GET" });
    return res.json();
  }
}
