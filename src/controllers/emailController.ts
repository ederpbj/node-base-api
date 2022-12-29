import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    //Passo 1: Configurar o transporter
    //para envio real, troca as informações do passo 1
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "663556d770c91c",
          pass: "b923f7ed2b54e1"
        }
      });

    //Passo 2: Configurar a mensagem
    let message = {
        from: 'nao-responda@zeroumcursos.com',
        to: 'ederpbj@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email

        // from: 'Éder PB <ederpbj@gmail.com>',
        // to: 'ederpbj2@gmail.com',
        // subject: 'Assunto lega',
        // html: 'Opa <strong>Test</strong>, como vai?',
        // text: 'Opa Teste, tudo bem'
    }
    //Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({success: true});
}