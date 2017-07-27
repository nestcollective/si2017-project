var request = require('superagent');

export default function login(email, password, callback) {
  request
    .post('http://localhost:3000/users/sign_in.json')
    .send({
        user: {
          email,
          password,
        }
      })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function(err, res){
      if(err){
        err = "You have entered an invalid username or password" 
      }else{
        if(res.statusCode === 200){
          if (res.body.error){
            err = "You have entered an invalid username or password" 
          }
        }else{
          err = "You have entered an invalid username or password" 
        }
      }
      callback(err, res);
    });
  }
