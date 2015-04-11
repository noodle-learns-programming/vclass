define(['react'], function(React) {

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Welcome to Virtual Class!</p>
          </div>
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return App;

});