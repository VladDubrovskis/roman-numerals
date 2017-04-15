# Roman numerals

Roman numerals package - converts number from 1 to 3999 to roman numerals and back

## Installation
Run `npm install` - this will install all the necessary dependencies

## Testing
Run `npm test` - this will run unit tests for the converter as well as the shallow render integration tests for the component

## Run
Run `npm start` - this will build the files and serve them on your local machine. The address to view it will be in console, but likely to be http://localhost:3000/

### Imrovements to be done
- integration test coverage is lacking - mostly cause run into issues triggering the events withing preact and run out of time 
- though the unit test might seem like a little but of an overkill but wanted to make sure it handles all the necessary numbers
- When rendering could use other lifecycle methids to make sure if the state has changed and if a re-render is necessary or not
- could prepopulate all digits and use a reducer to get the outcome
- Could add validation on the input, e.g. not less than 1 and not more than 3999, for roman could use a regex - also if you are actually reading all this ping me a tweet [at] centas
- the algorithm to convert the roman back to arabic could be better, not sure how but sure it could be easier - spent a bit of time writing the algorithm for converter
- in theory had an idea to write a game - go to a page, get 10 roman digits - have to answer corretly - possbily timed.
- could display a lot more
- could make the UI look better
- could use one testing framework rather than few, this occured when decided to go for a preact boilerplate
- make sure of redux for maintaining the state