var request = require('superagent');

export default function logout(email, authentication_token, callback) {
  request
    .delete('http://localhost:3000/users/sign_out.json')
    .send({
      user: {
        email,
        authentication_token,
      }
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function(err, res){
      if(err){
        err = 'Something went wrong';
      }else{
        if(res.statusCode === 200){
          if (res.body.error){
            err = 'Something went wrong';
          }
      }else{
          err = 'Something went wrong';
        }
      }
      callback(err, res);
    });
} 
