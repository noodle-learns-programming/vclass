define(['react', 'build/message-list'], function(React, MessageList) {
var Messenger = React.createClass({displayName: "Messenger",
    getInitialState: function() {
        return {
            text    : '',
            items   : []
        };
    },
    onChangeHanlder : function(e)
    {
        this.setState({
            text    : e.target.value
        });
    },
    handleSubmit: function(e)
    {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        this.setState({items: nextItems, text: ''});
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(MessageList, {items: this.state.items}), 
                React.createElement("form", {onSubmit: this.handleSubmit}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "large-12 columns"}, 
                            React.createElement("input", {type: "text", onChange: this.onChangeHanlder, value: this.state.text})
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "large-12 columns text-right"}, 
                            React.createElement("a", {href: "#", className: "button small"}, "Send")
                        )
                    )
                )
            )
        );
    }
});
return Messenger;
});