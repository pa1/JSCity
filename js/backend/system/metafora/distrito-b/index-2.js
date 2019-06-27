function C(x, y, z) {
	if(x>y) {
		for(var i=0; i<10; ++i) {
			if(z>i) {
				if(i>z) {
					z = x+y+i;
				}
			}
		}
	}
	return z;
}

function B(v1, v2) {
	if(v1 > v2) {
		function A(n, m) {
			return [m, n];
		}
		var tmp = A(v1, v2);
		v1 = tmp[0];
		v2 = tmp[1];
	}
	return [v1, v2];
}

if(C(1, 2, 3)>10) {
	console.log(B(1, 2));
} else {
	console.log(B(8, 9));
}

D = function (x, y, z) {
	if(x>y) {
		for(var i=0; i<10; ++i) {
			if(z>i) {
				if(i>z) {
					z = x+y+i;
				}
			}
		}
	}
	return z;
}

E = function (v1, v2) {
	if(v1 > v2) {
		F = function (n, m) {
			return [m, n];
		}
		var tmp = A(v1, v2);
		v1 = tmp[0];
		v2 = tmp[1];
	}
	return [v1, v2];
}


