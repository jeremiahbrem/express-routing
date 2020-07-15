const express = require('express');
const { mean, median, mode } = require('./math');
const { checkInput } = require('./checkInput');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ExpressError = require('./expressError');
const { response } = require('express');

// route for returning mean value from query of numbers
app.get('/mean', function(req, res, next){
  try {
    const { nums } = req.query;
    const numbers = checkInput(nums);
    const value = mean(numbers);
    return res.json({ response: {
                      operation: 'mean',
                      value: value,
                       }
    });
  } catch (err) {
    return next(err);
  }
})

// route for returning median value from query of numbers
app.get('/median', function(req, res, next){
  try {
    const { nums } = req.query;
    const numbers = checkInput(nums);
    const value = median(numbers);
    return res.json({ response: {
                      operation: 'median',
                      value: value,
                       }
    });
  } catch (err) {
    return next(err);
  }
})

// route for returning mode value(s) from query of numbers
app.get('/mode', function(req, res, next){
  try {
    const { nums } = req.query;
    const numbers = checkInput(nums);
    const value = mode(numbers);
    return res.json({ response: {
                      operation: 'mode',
                      value: value,
                       }
    });
  } catch (err) {
    return next(err);
  }
})

// route for returning all method value(s) from query of numbers, with options for accept header
app.get('/all', function(req, res, next){
  try {
    const { nums } = req.query;
    const accept = req.headers['accept'];
    const numbers = checkInput(nums);
    const getMean = mean(numbers);
    const getMedian = median(numbers);
    const getMode = mode(numbers);
    if (accept == 'application/json') {
      return res.json({ response: {
        operation: 'all',
        mean: getMean,
        median: getMedian,
        mode: getMode
        }
      });
    }
    else if (accept == 'text/html') {
      return res.send(`<p>operation: all</p>
              <p>mean: ${getMean}</p>
              <p>median: ${getMedian}</p>
              <p>mode: ${getMode}</p>`)
    }
    
  } catch (err) {
    return next(err);
  }
})



// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError('Not Found', 404);
    return next(notFoundError);
  });
  
// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

module.exports = { checkInput };

// end generic handler
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});