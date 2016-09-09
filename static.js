var fs = require('fs');

module.exports = function(request, response) {
    var file_ext = request.url.split('.')[1];
    var content_type;

    // create content_type
    if (file_ext == 'html') { content_type = 'text/html'; }
    else if (file_ext == 'css') { content_type = 'text/css'; }
    else if (file_ext == 'js') { content_type = 'text/javascript'; }
    else if (file_ext == 'png') { content_type = 'image/' + file_ext; }
    else if (file_ext == 'jpg') { content_type = 'image/' + file_ext; }
    else if (file_ext == 'gif') { content_type = 'image/' + file_ext; }

    // remove leading backslash from request url to get filepath
    var filepath = request.url.slice(1);
    console.log(filepath)

    // attempt to get file and create response
    // if no file of that name, return 404
    fs.readFile(filepath, 'utf8', function(errors, contents){
        if (errors) {
            response.writeHead(404, {'Content-type': 'text/html'});
            response.end("no file of that name!");
        }
        response.writeHead(200, {'Content-type': file_ext});
        response.write(contents);
        response.end();

    return { response }

    });
 }