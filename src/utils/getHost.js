export default (isServer, req) => {
  let host = null;
  if (isServer && req.headers.referer) {
    host = `${req.headers.referer.split('//')[0]}//${req.headers.host}`;
  } else if (!isServer) {
    host = `${window.location.protocol}//${window.location.host}`;
  }

  return host;
};
