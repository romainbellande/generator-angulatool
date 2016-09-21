(() => {
  const Controller = require('../../classes/controller');
  const _serverEntity_Model = require('../model/_serverEntity_Model');

  const _serverEntity_Controller = new Controller(_serverEntity_Model);

  module.exports = _serverEntity_Controller;
})();
