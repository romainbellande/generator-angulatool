(function () {
  angular
    .module('app.services')
    .factory('ResourceService', ResourceService);

  /* @ngInject */
  var ResourceService = function ($cookies) {
    let self = this;

    this.baseInterceptor = function (response) {
      let result = response.resource;
      result.status = response.status;
      return result;
    };

    this.itemHandler = function (item, def) {
      return angular.isDefined(item) ? item : def;
    };

    this.createMethod = function (obj) {
      if (angular.isUndefined(obj) || typeof obj !== 'object') {
        obj = {};
      }

      const method = self.itemHandler(obj.method, 'GET');
      const isArray = self.itemHandler(obj.isArray, false);
      const url = self.itemHandler(obj.url, false);
      const auth = self.itemHandler(obj.auth, true);
      const interceptor = self.itemHandler(obj.interceptor, true);
      const contentType = self.itemHandler(obj.contentType, 'application/json');
      const hasHeaders = self.itemHandler(obj.hasHeaders, true);
      const params = self.itemHandler(obj.params, undefined);

      let data = {
        method: method,
        isArray: isArray
      };

      if (url) {
        data.url = url;
      }

      if (params) {
        data.params = params;
      }

      if (interceptor) {
        data.interceptor = {response: self.baseInterceptor};
      }

      if (hasHeaders) {
        data.headers = auth ? {
          'Authorization': function () {
            return 'Bearer ' + $cookies.get('auth_token');
          },
          'Content-Type': contentType
        } : {
          'Content-Type': contentType
        };
      }

      return data;
    };
  };
})();
