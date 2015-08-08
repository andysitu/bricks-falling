var map = [];

var controller = {
	timerID: 0,
	clicked(y, x) {
		this.makeBrick(y, x);
	},

	makeBrick(y, x) {
		var ele = this.getCell(0, x);

		map[0][x] = 1;
		ele.className = "brick";
	},

	getCell(y, x) {
		return document.getElementById(y + "_" + x);
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

	function timerFunc() {
		console.log("HI");
	}

	controller.timerID = setInterval(timerFunc, 1000)

}

window.onload = init;