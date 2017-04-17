# Roman numerals

Roman numerals package - converts number from 1 to 3999 to roman numerals and back

## Installation
Run `npm install` - this will install all the necessary dependencies

## Testing
Run `npm test` - this will run unit tests for the converter as well as the shallow render integration tests for the component

## Run
Run `npm start` - this will build the files and serve them on your local machine. The address to view it will be in console, but likely to be http://localhost:3000/

## Approach
The way I approached the task was following: thought will use the TDD principles to guide me through the task.
One of the first tests was to convert just one number, moving to 10 numbers, only in one direction: arabic to roman.

Then had the conversion of the 10 done at very basic level thought it was good time to refactor to handle the subtractive notation cases.

Once was happy with that decided to write the tests followed by the code to convert from roman to arabic, which proved to be trickier to handle.

Afterwards for the UI decided to go with preact boilerplate - comes with a lot of goodies. Had to move module and use mocha to run the tests, plus needed to add the Component for converter and wanted to have integration/shallow render tests, which proved a little trickier than expected until came across preact-render-to-string.

The commit history might help with the idea of the approach I took better: https://github.com/VladDubrovskis/roman-numerals/commits/master

## Imrovements to be done
- integration test coverage is lacking - mostly cause run into issues triggering the events within preact and run out of time
- though the unit test might seem like a little but of an overkill but wanted to make sure it handles all the necessary numbers
- When rendering could use other lifecycle methods to make sure if the state has changed and if a re-render is necessary or not
- could pre-populate all digits and use a reducer to get the outcome
- Could add validation on the input, e.g. not less than 1 and not more than 3999, for roman could use a regex
- validate the roman digits, e.g. should not allow XXMII - currently it will convert to 2002
- the algorithm to convert the roman back to arabic could be better, not sure how but sure it could be easier - spent a bit of time writing the algorithm for converter
- in theory had an idea to write a game - go to a page, get 10 roman digits - have to answer correctly - possibly timed.
- could display a lot more
- could make the UI look better
- make sure of redux for maintaining the state
- make Sass code DRY - could use variables for colors, etc
- Cross browser styling - e.g. mobile webkit is taking over and making the button rounded
- In order to support the numbers above 3999 - in theory once could just add the characters and numbers to collection. Could not find those characters myself as most places seem to use either images or css to create overline effect. This of course would work only in order to convert the number from arabic to roman.
