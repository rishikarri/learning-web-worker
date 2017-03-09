// import timer.js;

console.log('hi');

var w;

function startWorker() {
	// before creating a web worker, check whether user's browser supports it

	if (typeof(Worker)!=="undefined"){
		// Yes! Web worker support
		// console.log('lehri')
		w = new Worker('timer.js')
		console.log(w)
	}else {
		console.log('no webworker support - she said she never had a migo night, yeah yeah ')
	}
}

//asdf


function stopWorker() {
	w.terminate();
	w = undefined
}