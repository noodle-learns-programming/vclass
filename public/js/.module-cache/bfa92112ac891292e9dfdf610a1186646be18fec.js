define(['react'], function(React) {

  function App() {
    this.AppView = React.createClass({displayName: "AppView",
      render: function () {
        return (
          React.createElement(Class, null)
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(React.createElement(this.AppView, null), document.body);
  };

  return App;

});