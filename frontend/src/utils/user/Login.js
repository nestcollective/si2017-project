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
        err = 'Não é possível contactar o servidor.';
      }else{
        if(res.statusCode !== 200){
          err = 'Não é possível contactar o servidor.';
        }
      }
      callback(err, res);
    });
  }
