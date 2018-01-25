// ## Helpers
function log(message) {
  console.log(message)
}

// ## The Magic
const apiKey = inputData.apiKey
const intakeID = inputData.intakeID

var url = 'https://intakeq.com/api/v1/intakes/' + intakeID
var authHeaders = { 'X-Auth-Key': apiKey }
var reqOpts = { method: 'GET', headers: authHeaders }

fetch(url, reqOpts)
  .then(function(res){
    if (res.status == 200) {
      return res.json()
    } else if (res.status == 401) {
      log('Unathorized Error, verify API Key is correct: ' + apiKey)
    } else if (res.status == 404) {
      log('Cannot retrieve an intake with the ID: ' + intakeID)
    } else if (res.status == 500) {
      if (apiKey == '') {
        log('Your API Key has not been set. This makes IntakeQ go bonkers...')
      } else {
        log('IntakeQ responding with Internal Server Error, try again in a while...')
      }
    } else {
      log('Unhandled error:')
      log(res.status)
      log(res.statusText)
    }
  })
  .then(function(json){
    callback(null, json);
  })
  .catch(callback)
