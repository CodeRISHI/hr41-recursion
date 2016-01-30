# HR41 Recursion Problems
These are the recursion problems sent to us by Laura that have been adapted for the Mocha testing environment that HR uses. Please feel free to submit pull requests for the errors you will inevitably find. In addition, in its current form these tests allow for cheating quite frequently (especially binary search). **So...your honesty is on you :)**

##In This Repo:
* src/recursionSource.js is **where your code goes.**
* SpecRunner.html is your go-to file for running the tests.
* All tests are contained within spec/recursionSpec.js if you wish to modify them. 

##A Note About Pull Requests
Should you submit a pull request (and I appreciate it) please ensure you're pushing a non-complete version of recursionSource.js.

##All problems have been completed using recursion.
There were two errors found in the original recursion.js file that need(ed) to be updated.

1. The binarySearch function requires two arguments - the ordered list and the target (or item). _this was updated_
2. The binarySearch function should return an **index**, not a boolean. The testing suite (SpecRunner.html) checks for a boolean result instead of the index. The actual function I wrote returns the index.
