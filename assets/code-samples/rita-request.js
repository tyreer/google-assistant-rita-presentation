export const ritaRequest1 = `const functions = require('firebase-functions');
const fetch = require('node-fetch');
const crypto = require('crypto');

const URL =
  'https://blahblah/rita?hmac=';

const createHash = (jsonString) => {
  // https://firebase.google.com/docs/functions/config-env
  const hmac = crypto.createHmac('sha256', functions.config().rita.key);
  hmac.update(new Buffer(jsonString, 'utf-8'));
  return hmac.digest('hex');
};`;

export const ritaRequest2 = `const generateScene = (text, media) => {
    const scene = {
      name: '2s',
      params: {
        'Background color': {
          value: [0, 0, 0, 0],
        },
        'Text: Minimum size': {
          value: [20],
        },
        'Text: Maximum size': {
          value: [40],
        },
        'Text: Content': {
          value: [text],
        },
        'Text: Color': {
          value: [255, 255, 255, 255],
        },
        ...`;

export const ritaRequest3 = `const createVideo = async (renderInput) => {
    const body = generateRitaBody(renderInput);
    const serverHash = createHash(body);
    const URLwHMAC = URL + serverHash;
  
    const ritaResponse = await fetch(URLwHMAC, {
        body: body,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      });

    const ret = await ritaResponse.json();
    
    return ret;
}
  
  module.exports = {
    createVideo,
  };`;
