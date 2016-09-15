(() => {
  describe('component: root', () => {
    let element;
    let scope;

    beforeEach(module('app.components'));
    beforeEach(inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = angular.element('<root></root>');
      element = $compile(element)(scope);
      scope.$apply();
    }));

    it('exist', () => {
      expect(element.html().indexOf('root')).toBeGreaterThan(-1);
    });
  });
})();

