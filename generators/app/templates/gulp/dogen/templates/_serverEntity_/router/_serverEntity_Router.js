(() => {
  const Router = require('../../classes/router');
  const _serverEntity_Controller = require('../controller/_serverEntity_Controller');

  class =serverEntity=Router extends Router {
    constructor(data) {
      super(data);
    }
  }

  module.exports = new =serverEntity=Router({
    controller: _serverEntity_Controller,
    singName: '_serverEntity_'
  });
})();
