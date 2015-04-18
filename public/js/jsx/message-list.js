define(['react'], function(React) {
var MessageList = React.createClass({
	render: function() {
		var createItem = function(itemText, index) {
			return <li key={index + itemText}>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});
return MessageList;
});