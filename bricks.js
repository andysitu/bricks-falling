var map = [];

var controller = {
	clicked(y, x) {
		console.log(y, x);
	}
};

function init() {
	var cols = Math.floor((window.innerWidth / 9) );
	var rows = Math.floor(window.innerHeight / 9 - 2);

	makeTable(rows, cols);

	function clicky(event) {
		var target = event.target;

		var str = /(\d*)_(\d*)/.exec(target.id);
		if (str) {
			var y = Number(str[1]); 
			var x = Number(str[2]);

			controller.clicked(y, x);
		}
	}

	table.addEventListener("click", clicky, false)
}

window.onload = init;