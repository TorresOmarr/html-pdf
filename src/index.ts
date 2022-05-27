
import pdf, { CreateOptions } from 'html-pdf';
import fs from 'fs'
var html = fs.readFileSync('./tpl/reporte en pdf.html', 'utf8');

const options: CreateOptions = {
    "format": "Letter",
    "orientation": "portrait",

}



pdf.create(html,options ).toFile('./pdf/reporte.pdf', function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});