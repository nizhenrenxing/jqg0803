var cupboardA = document.getElementById('cupboardA')
var cupboardB = document.getElementById('cupboardB')
var cupboardC = document.getElementById('cupboardC')
var A = 0
var B = 0
var C = 0

cupboardA.onmouseover = function() {
	cupboardA.style.transform = 'translateZ(25px)'
}

cupboardA.onmouseout = function() {
	cupboardA.style.transform = 'translateZ(0px)'
}
cupboardB.onmouseover = function() {
	cupboardB.style.transform = 'translateZ(25px)'
}

cupboardB.onmouseout = function() {
	cupboardB.style.transform = 'translateZ(0px)'
}
cupboardC.onmouseover = function() {
	cupboardC.style.transform = 'translateZ(25px)'
}

cupboardC.onmouseout = function() {
	cupboardC.style.transform = 'translateZ(0px)'
}


cupboardA.onclick = function() {
	A++
	if (A % 2 == 1) {
		cupboardA.style.transform = 'translateZ(270px)'
		cupboardA.onmouseout = function() {
			cupboardA.style.transform = 'translateZ(270px)'
		}
		cupboardA.onmouseover = function() {
			cupboardA.style.transform = 'translateZ(270px)'
		}
	} else {
		cupboardA.style.transform = 'translateZ(0px)'
		cupboardA.onmouseover = function() {
			cupboardA.style.transform = 'translateZ(25px)'
		}

		cupboardA.onmouseout = function() {
			cupboardA.style.transform = 'translateZ(0px)'
		}
	}

}

cupboardB.onclick = function() {
	B++
	if (B % 2 == 1) {
		cupboardB.style.transform = 'translateZ(270px)'
		cupboardB.onmouseout = function() {
			cupboardB.style.transform = 'translateZ(270px)'
		}
		cupboardB.onmouseover = function() {
			cupboardB.style.transform = 'translateZ(270px)'
		}
	} else {
		cupboardB.style.transform = 'translateZ(0px)'
		cupboardB.onmouseover = function() {
			cupboardB.style.transform = 'translateZ(25px)'
		}

		cupboardB.onmouseout = function() {
			cupboardB.style.transform = 'translateZ(0px)'
		}
	}

}

cupboardC.onclick = function() {
	C++
	if (C % 2 == 1) {
		cupboardC.style.transform = 'translateZ(270px)'
		cupboardC.onmouseout = function() {
			cupboardC.style.transform = 'translateZ(270px)'
		}
		cupboardC.onmouseover = function() {
			cupboardC.style.transform = 'translateZ(270px)'
		}
	} else {
		cupboardC.style.transform = 'translateZ(0px)'
		cupboardC.onmouseover = function() {
			cupboardC.style.transform = 'translateZ(25px)'
		}

		cupboardC.onmouseout = function() {
			cupboardC.style.transform = 'translateZ(0px)'
		}
	}

}
