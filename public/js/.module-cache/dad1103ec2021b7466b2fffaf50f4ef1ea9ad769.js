define(['react'], function(React) {
	Class = React.createClass({
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
				<h1>Welcome to vClass</h1>
			);
		}
	});
	return Class;
});