define(['io'], function(io) {

var Client = function(url)
{
	this.init(url);
};

Client.prototype.init = function(url)
{
	this.socket = new io.connect(url);
    this.socket.on('connect', this.onConnected.bind(this));
    this.socket.on('disconnect', this.onDisconnected.bind(this));
};

Client.prototype.onConnected = function()
{
    console.log('connected');
};

Client.prototype.onDisconnected = function()
{
    console.log('disconnected');
};

return Client;
});