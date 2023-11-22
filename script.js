//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
		 if (arr.length < 2) {
        return "Array should have at least two elements.";
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Return the second element (second-highest)
    return arr[1];
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