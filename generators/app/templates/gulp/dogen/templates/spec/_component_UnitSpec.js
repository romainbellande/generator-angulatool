describe('component: _component_', function () {

  beforeEach(module('app.components'));

  beforeEach(inject(function ($rootScope, _$componentController_) {
    var scope = $rootScope.$new()
    var $componentController = _$componentController_;
  }));

  it('should be tested', function () {
    expect(true).toBe(true);
  });
});
