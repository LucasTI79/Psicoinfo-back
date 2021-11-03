import path from 'path';

import nodemailer from 'nodemailer';

import hbs from 'nodemailer-express-handlebars';

import configs from '../config/mailer';

const transport = nodemailer.createTransport({
    host: configs.host,
    port: configs.port,
    auth: { user: configs.user, pass: configs.pass }
});

// transport.use('compile', hbs({
//     viewEngine: 'handlebars',
//     viewPath: path.resolve('./src/resources/mail/'),
//     extName: '.html',
//     defaultLayout: false,
//     // layoutsDir:""
// }));

transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));

export default transport;