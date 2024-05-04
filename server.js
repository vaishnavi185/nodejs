var mailer = require('nodemailer');
 var send = mailer.createTransport({
   service :'gmail',
   auth:{
      user:'v74830785@gmail.com',
      pass:'123tanya#'  
   }
 });

 var mailOptions = {
   from: 'v74830785@gmail.com',
   to: 'vishu032004@gmail.com',
   subject: 'Test Email',
   text: 'This is a test email.'
 };

 send.sendMail( mailOptions, function(err, info){
   if(err){
      console.log("error")
   }
   else{
      console.log(info.response)
   }
 })