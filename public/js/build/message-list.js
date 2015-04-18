define(['react'], function(React) {
var MessageList = React.createClass({displayName: "MessageList",
	render: function() {
		var createItem = function(itemText, index) {
			return React.createElement("li", {key: index + itemText}, itemText);
		};
		return React.createElement("ul", null, this.props.items.map(createItem));
	}
});
return MessageList;
});