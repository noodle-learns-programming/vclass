define(['react', 'build/room', 'build/messenger'], function(React, Room, Messenger) {

var students = [{
    'id'    : 1,
    'name'  : 'TPPHU'
},{
    'id'    : 2,
    'name'  : 'MPYEN'
}];

var Layout    = React.createClass({displayName: "Layout",
    render: function () {
        return (
        	React.createElement("div", null, 
	        	React.createElement("div", {className: "row"}, 
	        		React.createElement("div", {className: "large-12 columns"}, 
						React.createElement("div", {className: "panel"}, 
							React.createElement("h1", null, "Welcome to vClass version @0.1")
						)
					)
				), 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "large-9 columns"}, 
						React.createElement(Room, {students: students})
					), 
					React.createElement("div", {className: "large-3 columns"}, 
						React.createElement("div", {className: "panel"}, "Messenger"), 
						React.createElement(Messenger, null)
					)
				)
			)
        );
    }
});
return Layout;

});