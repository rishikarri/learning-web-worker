var i = 0; 
function timedCount() {
	i = i + 1;
    // postMessage(i);
    console.log(i)
    setTimeout("timedCount()",500)

}

timedCount();