// export default `https://vega.mirea.ru/sandbox`;

export const basePath = `/sandbox`;
export const host = window.location.host;
export const protocolHttp = window.location.protocol;
export const protocolWs = window.location.protocol === `https:` ? `wss:` : `ws:`;

export const httpApiUrl = `${protocolHttp}//${host}`;
export const wsApiUrl = `${protocolWs}//${host}`;

console.log({httpApiUrl, wsApiUrl})
