function A(n, m) {
	var a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l;
	var a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l;
	return [m, n];
}

(function () {
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
})();
