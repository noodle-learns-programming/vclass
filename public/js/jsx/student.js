define(['react'], function(React) {
var Student = React.createClass({
	render: function () {
		return (
			<li>
				<div className="room-table">
					<span className="label">{this.props.data.name}</span>
				</div>
			</li>
		);
	}
});
return Student;
});