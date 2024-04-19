// const express = require('express');
// const i18n = require('i18n');

// const app = express();

// // Configure i18n
// i18n.configure({
//     locales: ['en', 'ar'],
//     directory: __dirname + '/locales', 
//     defaultLocale: 'en',
//     objectNotation: true, 
// });

// app.use(i18n.init);

// app.get('/data', (req, res) => {
//     const lang = req.query.lang || i18n.getLocale();

//     req.setLocale(lang);

//     const hello = req.__('Hello');
//     const welcome = req.__('Welcome');

//     res.json({ hello, welcome });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

class APIResponse {
    constructor(success, code, data, message) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.code = code;
    }

    static success(data, message = 'Success', code = 200) {
        return new APIResponse(true, code, data, message);
    }

    static rserror(code, message = 'Error', data = null) {
        return new APIResponse(false, code, data, message);
    }

    toJSON() {
        let response = {
            success: this.success,
            code: this.code,
            data: this.data,
            message: this.message
        };
        return response;
    }
}

module.exports = APIResponse;
