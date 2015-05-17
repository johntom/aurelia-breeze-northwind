System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Northwind';
            config.map([{ route: ['', 'orders'], moduleId: './orders/orders', nav: true, title: 'Orders' }, { route: 'orders/:id', moduleId: './orders/order', nav: false, title: 'Order' }, { route: 'customers', moduleId: './customers', nav: true, title: 'Customers' }, { route: 'employees', moduleId: './employees', nav: true, title: 'Employees' }]);
            this.router = router;
          }
        }, {
          key: 'attached',
          value: function attached() {
            $('.button-collapse').sideNav();
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0FBQzNCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUN0RixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUksUUFBUSxFQUFFLGdCQUFnQixFQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUNyRixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUssUUFBUSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFDbEYsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFLLFFBQVEsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQ25GLENBQUMsQ0FBQztBQUNILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2lCQUVPLG9CQUFHO0FBRVQsYUFBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDakM7OztlQWZVLEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=