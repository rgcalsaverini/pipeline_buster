var Request = (function () {

  var get = function (url) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function () {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        }
        else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = function () {
        reject(Error('Network error'));
      };

      req.send();
    });
  };

  var post = function (url, payload, contentType) {
    if (!contentType) contentType = 'application/json';

    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('POST', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload = function () {
        if (req.status === 200) {
          resolve(req.response);
        }
        else {
          reject(req.response);
        }
      };

      req.onerror = function () {
        reject(Error('Network error'));
      };

      req.send(JSON.stringify(payload));
    });
  };

  var update = function (url, payload, contentType) {
    if (!contentType) contentType = 'application/json';

    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('PATCH', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload = function () {
        if (req.status === 200) {
          resolve(req.response);
        }
        else {
          reject(req.response);
        }
      };

      req.onerror = function () {
        reject(Error('Network error'));
      };

      req.send(JSON.stringify(payload));
    });
  };

  var remove = function (url, payload, contentType) {
    if (!contentType) contentType = 'application/json';

    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('DELETE', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload = function () {
        if (req.status === 204) {
          resolve(req.response);
        }
        else {
          reject(req.response);
        }
      };

      req.onerror = function () {
        reject(Error('Network error'));
      };

      req.send(JSON.stringify(payload));
    });
  };

  return {
    get: get,
    post: post,
    update: update,
    remove: remove,
  };

})();

module.exports = Request;
