var request = require('superagent');

export default function signup(firstName, lastName, email, password, newsletter,callback) {
  request
    .post('http://localhost:3000/users.json')
    .send({
      user: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        notify_newsletter: newsletter,
      }
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function(err, res){
      console.log(res);
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
 
