define(['react', 'build/class'], function(React, Class) {

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <Class />
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return App;

});