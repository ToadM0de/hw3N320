const path = require("path");

class Webfile {
    filename = "";

    static mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
    };

    constructor(filename) {
        this.filename = filename;
    }

    getExtension() {
        return path.extname(this.filename);
    }

    getExtension() {
        return path.extname(this.filename);
    }

    getMimeType() {
        const fileExtension = this.getExtension();
        return Webfile.mimeTypes[fileExtension] || "text/plain";
    }
    
}