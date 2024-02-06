import * as path from 'path';
import fs from 'fs';

export default async function handler(req,res){
    if(req.method!=='GET'){
        return res.status(405).end();
    }

    res.setHeader('Content-Disposition', 'attachment; filename=Vinit_Gupta_Resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    const filePath = path.join(process.cwd(), 'src/content','Vinit_Gupta_Resume.pdf');
    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(res);

    res.on('finish',()=>{
        fileStream.close();
    })
}