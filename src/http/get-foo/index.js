let arc = require('@architect/functions');

exports.handler = async function handler (req) {

  let name = 'account-signup'
  let payload = {body: req}
  await arc.events.publish({name, payload})


  return {
    statusCode: 302,
    headers: {
      'location': '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}