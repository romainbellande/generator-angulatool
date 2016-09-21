(() => {
  const Model = require('../../classes/model');

  class =serverEntity=Model extends Model {
    constructor (name, opt) {
      super(name, opt);
    }
  }

  module.exports = new =serverEntity=Model('_serverEntity_', {});
})();
