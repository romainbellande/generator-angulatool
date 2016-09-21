(() => {
  'use strict';

  let self;

  class Controller {
    constructor(model) {
      self = this;
      self.model = model;
    }

    response(data) {
      return {data};
    }

    get(req, res, next) {
      self.model
      .get()
      .find((err, entity) => {
        if (err) {
          return next(err);
        }

        res.json(self.response(entity));
      });
    }

    getById(req, res, next) {
      self.model
      .get()
      .findById(req.params[`${self.model.name()}_id`], null, (err, entity) => {
        if (err) {
          return next(err);
        }

        res.json(self.response(entity));
      });
    }

    post(req, res, next) {
      let entity = new self.model.get();
      for (let key of Object.keys(req.body)) {
        entity[key] = req.body[key];
      }
      entity.save((err, entity) => {
        if (err) {
          return next(err);
        }

        res.json(self.response(entity));
      });
    }

    put(req, res, next) {
      self.model
      .get()
      .findById(req.body[`${self.model.name()}_id`], (err, entity) => {
        for (let key of Object.keys(req.body)) {
          entity[key] = req.body[key];
        }
        entity.save((err, entity) => {
          if (err) {
            return next(err);
          }

          res.json(self.response(entity));
        });
      });
    }

    delete(req, res, next) {
      self.model
      .get()
      .remove({
        _id: req.body[`${self.model.name()}_id`]
      }, err => {
        if (err) {
          return next(err);
        }
        res.status(200).end();
      });
    }
  }

  module.exports = Controller;
})();
