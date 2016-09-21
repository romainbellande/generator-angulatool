(() => {
  'use strict';

  let self;

  class Controller {
    constructor(model) {
      self = this;
      self.model = model;
    }

    _getResponse(data) {
      return {data};
    }

    _get(req, res, next) {
      self.model
      .get()
      .find((err, entity) => {
        if (err) {
          return next(err);
        }

        res.json(self._getResponse(entity));
      });
    }

    get(req, res, next) {
      self._get(req, res, next);
    }

    getById(req, res, next) {
      this.getById();
      res.send('ok');
    }

    post(req, res, next) {
      this.post();
      res.send('ok');
    }

    put(req, res, next) {
      this.put();
      res.send('ok');
    }

    delete(req, res, next) {
      this.delete();
      res.send('ok');
    }

    update(req, res, next) {
      this.update();
      res.send('ok');
    }
  }

  module.exports = Controller;
})();
