(() => {
  'use strict';

  const express = require('express');
  let app = require('../../app');

  class Router {
    constructor(data) {
      this.controller = data.controller;
      this.plurName = data.plurName ? data.plurName : data.singName + 's';
      this.singName = data.singName;

      this.router = express.Router({mergeParams: true});
      this.one();
      this.all();

      if (data.parentRouter && data.parentName) {
        this.parentRouter = data.parentRouter;
        this.parentName = data.parentName;
        this.hasParent();
      } else {
        this.hasNoParent();
      }
    }

    hasParent() {
      this.parentRouter.use(`/:${this.parentName}_id/${this.plurName}`, this.router);
    }

    hasNoParent() {
      app.use(`/${this.plurName}`, this.router);
    }

    one() {
      this.router.route(`/:${this.singName}_id`)
      .get(this.controller.getById)
      .put(this.controller.put)
      .delete(this.controller.delete);
    }

    all() {
      this.router.route('/')
      .post(this.controller.post)
      .get(this.controller.get);
    }

    get() {
      return this.router;
    }
  }

  module.exports = Router;
})();
