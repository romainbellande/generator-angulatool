(() => {
  'use strict';

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  let self;

  class Model {
    constructor(name, opt) {
      self = this;
      self.schema = new Schema(opt);
      self.name = name;
    }

    getSchema() {
      return self.schema;
    }

    get() {
      return mongoose.model(self.name, self.schema);
    }

    name() {
      return self.name;
    }
  }

  module.exports = Model;
})();
