(() => {
  const Controller = require('../../classes/controller');
  const _serverEntity_Model = require('../model/_serverEntity_Model');

  class =serverEntity=Controller extends Controller {
    constructor (name, model) {
      super(name, model);
    }
  }

  module.exports = new =serverEntity=Controller(_serverEntity_Model);
})();
