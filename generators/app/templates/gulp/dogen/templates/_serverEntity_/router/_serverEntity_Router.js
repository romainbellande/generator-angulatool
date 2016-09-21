(() => {
  const Router = require('../../classes/router');
  const _serverEntity_Controller = require('../controller/_serverEntity_Controller');

  const _serverEntity_Router = new Router({
    controller: _serverEntity_Controller,
    singName: '_serverEntity_'
  });

  module.exports = _serverEntity_Router;
})();
