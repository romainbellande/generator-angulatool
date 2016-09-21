(() => {
  'use strict';

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  class Model {
    constructor(name, opt) {
      this.schema = new Schema(opt);
      this.name = name;
    }

    getSchema() {
      return this.schema;
    }

    get() {
      return mongoose.model(this.name, this.schema);
    }
  }

  module.exports = Model;
})();
