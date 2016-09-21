(() => {
  const glob = require('glob');

  const entities = () => {
    glob('./**/*Entity.js', {
      cwd: __dirname,
      nodir: true
    }, (err, paths) => {
      for (let item of Object.keys(paths)) {
        const entity = require(paths[item]);
        entity.router.get();
      }
    });
  };

  module.exports = entities;
})();
