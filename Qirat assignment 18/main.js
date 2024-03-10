var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a list(Array) of places and print its original order
var placeTovisit = ["Safari Pak", "Port Grand", "Clifton Beach", "Frere Hall", "PAF Museum"];
console.log("Original Order", placeTovisit);
// print the list(array) in alphabetical order without modifying the actual/original(array) list 
console.log("Alphabetical Order", __spreadArray([], placeTovisit, true).sort());
// show that the array in still in its original order
console.log("Still in original order", placeTovisit);
// print the array in reverse order without modify the original(array) order list
console.log("Reverse Order!", __spreadArray([], placeTovisit, true).reverse());
// show that the array in still in its original order
console.log("Still in original order", placeTovisit);
// we have chanded the original (array) order Now
console.log("Original Array Reverse:", placeTovisit.reverse());
// print the array to show that its back to its original order
console.log("Back to original order", placeTovisit.reverse());
// print the array to show that order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", placeTovisit.sort());
// we have chanded the original (array) order Now in reverse order again
console.log("Original Array Reverse:", placeTovisit.reverse());
