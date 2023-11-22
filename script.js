//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
		let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num < firstMax) {
            secondMax = num;
        }
    }

    return secondMax;
		}
		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				 arr[i] = prompt("Enter element " + (i+1));
			}
			 alert(secondHighest(arr));
		}
		Main();