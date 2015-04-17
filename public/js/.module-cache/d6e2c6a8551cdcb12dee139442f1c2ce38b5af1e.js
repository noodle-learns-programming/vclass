
define(['react'], function(React) {

 	Class = React.createClass({displayName: "Class",
  		getInitialState: function() {
    		return {students: [{
          'name'  : 'TPPHU'
        },{
          'name'  : 'MPYEN'
        }], text: ''};
  		},
    	render: function () {
	        return (
	          React.createElement(Class, {items: this.state.students})
	        );
      	}
  	});
  	return Class;
});