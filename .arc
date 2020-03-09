# Warning: do not edit
# --------------------
# This is a generated file and will be overwritten

@app
begin-app

@http
get /
get /foo

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@static
folder public
fingerprint true

@events
account-signup