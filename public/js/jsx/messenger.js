define(['react', 'build/message-list'], function(React, MessageList) {
var Messenger = React.createClass({
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
            <div>
                <MessageList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="large-12 columns">
                            <input type="text" onChange={this.onChangeHanlder} value={this.state.text}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns text-right">
                            <a href="#" className="button small">Send</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});
return Messenger;
});