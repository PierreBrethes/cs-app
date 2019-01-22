const request = async (_endpoint, _token = null, _body = null, _method = 'GET') => {
  console.log('https://graph.facebook.com/v3.2/'+_endpoint);
  const response = await fetch('https://graph.facebook.com/v3.2/'+_endpoint, {
    method: _method,
    // headers: {
    //   'Authorization': _token
    // },
    body: _body
  })
  const json = await response.json();
  return json;
};

export default request;
