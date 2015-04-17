define(['react', 'build/class'], function(React, Class) {
Class = React.createClass({displayName: "Class",
	getInitialState: function() {
		return {students: [{
			'name'  : 'TPPHU'
			},{
		  		'name'  : 'MPYEN'
			}], text: ''
		};
	},
	render: function () {
		return (
			React.createElement("h1", null, "Welcome to vClass")
		);
	}
});
return Class;
});