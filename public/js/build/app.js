define(function(require){

  var React = require('react');

  function App() {
    this.AppView = React.createClass({displayName: "AppView",
      render: function () {
        return (
          React.createElement("div", null, 
            React.createElement("p", null, "Hello, React!")
          )
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(React.createElement(this.AppView, null), document.body);
  };

  return App;

});