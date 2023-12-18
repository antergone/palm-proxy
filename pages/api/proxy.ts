import handleRequest from "../../src/handle-request";

export const config = {
  runtime: "edge", 
  // Available languages and regions for Google AI Studio and Gemini API
  // https://ai.google.dev/available_regions
  // https://vercel.com/docs/concepts/edge-network/regions
  regions: [
    "cle1",
    "iad1",
    "pdx1",
    "sfo1",
    "sin1",
    "syd1",
    "hnd1",
    "kix1",
  ],
};

export default handleRequest;