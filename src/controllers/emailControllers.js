const nodemailer = require('nodemailer');

const emailController =  {}


const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "postmaster@sandboxdff14eba017b424992b4c4ef4f0e2d21.mailgun.org",
      pass: "5def97f909ed48ca0162499093091b75-3e508ae1-a09c84a7",
    },
  });


emailController.enviarEmail = async(req, res) => {


    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "lea_romero@hotmail.com", // list of receivers
          subject: "Hello ", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        //
        // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
        //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
        //       <https://github.com/forwardemail/preview-email>
        //
      }

    console.log(transporter)
    // res.json ({mensaje: 'Se enivo el mail correctamente'})
};


module.exports = emailController