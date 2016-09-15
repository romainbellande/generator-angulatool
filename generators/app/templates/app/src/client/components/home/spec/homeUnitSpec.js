(() => {
  describe('component: home', () => {
    let element;
    let scope;

    beforeEach(module('app.components'));
    beforeEach(inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = angular.element('<home></home>');
      element = $compile(element)(scope);
      scope.$apply();
    }));

    it('exist', () => {
      expect(element.html().indexOf('home')).toBeGreaterThan(-1);
    });
  });
})();

