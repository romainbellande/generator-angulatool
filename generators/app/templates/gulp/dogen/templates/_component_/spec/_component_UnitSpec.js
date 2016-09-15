(() => {
  describe('component: _component_', () => {
    let element;
    let scope;

    beforeEach(module('app.components'));
    beforeEach(inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = angular.element('<_component_></_component_>');
      element = $compile(element)(scope);
      scope.$apply();
    }));

    it('exist', () => {
      expect(element.html().indexOf('_component_')).toBeGreaterThan(-1);
    });
  });
})();

