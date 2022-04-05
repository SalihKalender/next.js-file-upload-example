import formidable from 'formidable'
import {resolve, join} from 'path'

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function Upload(req, res) {
    const options = {
        uploadDir: join(resolve(), '/uploads'),
        keepExtensions: true,
        filename: function (name, ext, part, form) {
            return name + ext
        }
    }
    console.log(options)
    const form = new formidable.IncomingForm(options)

    form.parse(req, async function(err, fields, files) {
        console.log(fields)
    })
    return res.redirect('/')
}
