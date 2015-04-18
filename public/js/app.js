define(['react', 'build/layout', 'libs/client'], function(React, Layout, Client) {

var App = function(config){
    this.setConfig(config);
};

App.prototype.run = function()
{
    this.preDispatch();
    this.dispatch();
    this.postDispatch();
    return this;
};

App.prototype.init = function () {

};

App.prototype.bootstrapResourceClient = function()
{
    this.client = new Client(
        this.getConfig().getSocketUrl()
    );
};

App.prototype.bootstrap = function(config)
{
    this.bootstrapResourceClient();
    return this;
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
        document.body
    );
};

App.prototype.setConfig = function(config)
{
    this.config = config;
    return this;
};
App.prototype.getConfig = function()
{
    return this.config;   
};

return App;

});