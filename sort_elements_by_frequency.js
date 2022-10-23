<script>

//	 JavaScript program for the above approach


// Used for sorting by frequency. And if frequency is same,
// then by appearance
function sortByVal(a,b)
{

// If frequency is same then sort by index
if (a[1] == b[1])
	return a[0] - b[0];

return b[1] - a[1];
}

// function to sort elements by frequency
function sortByFreq(a, n)
{

let res = [];

let m = new Map();

let v = [];

for (let i = 0; i < n; ++i) {

	// Map m is used to keep track of count
	// of elements in array
	if(m.has(a[i]))
		m.set(a[i],m.get(a[i])+1);
	else
		m.set(a[i],1);
}

for(let [key,value] of m){
	v.push([key,value]);
}

// Sort the element of array by frequency
v.sort(sortByVal)

for (let i = 0; i < v.length; ++i)
	while(v[i][1]--)
	{
		res.push(v[i][0]);
	}

	return res;
}

// Driver program

let a = [ 2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8 ];
let n = a.length;
let res = [];
res = sortByFreq(a, n);

for(let i = 0;i < res.length; i++)
	document.write(res[i]," ");




</script>
