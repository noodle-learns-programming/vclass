define(['io', 'react', 'build/layout'], function(io, React, Layout) {

var App = function(){
    this.init();
};

App.prototype.run = function()
{
	this.preDispatch();
	this.dispatch();
	this.postDispatch();
};

App.prototype.init = function () {
	this.socket		= new io.connect('http://localhost:3000');
};

App.prototype.preDispatch = function()
{

};
App.prototype.dispatch = function()
{
	this.layout = React.createElement(Layout, null);
};
App.prototype.postDispatch = function()
{
	React.render(
	 	this.layout,
	 	document.getElementById('root')
	);
};

return App;

});