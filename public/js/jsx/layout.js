define(['react', 'build/room'], function(React, Room) {

var students = [{
    'id'    : 1,
    'name'  : 'TPPHU'
},{
    'id'    : 2,
    'name'  : 'MPYEN'
}];

var Layout    = React.createClass({
    render: function () {
        return (
        	<div>
	        	<div className="row">
	        		<div className="large-12 columns">
						<div className="panel">
							<h1>Welcome to vClass version @0.1</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="large-9 columns">
						<Room students={students} />
					</div>
					<div className="large-3 columns">
						<div className="panel">Messenger</div>
					</div>
				</div>
			</div>
        );
    }
});
return Layout;

});