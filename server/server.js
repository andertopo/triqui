const express = require('express');
const helmet = require('helmet');

const app = express();

const port = process.env.PORT || 3000;

// app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        "default-src": ["'self'"],
        "frame-src": ['https://www.google.com'],
        "script-src": ["'self'", 'https://www.google.com', 'https://www.gstatic.com', "'unsafe-inline'", "'unsafe-eval'"],
        "style-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "'data:'"],
        "connect-src": ["'self'", 'https://mimovistar-api-notifications.azurewebsites.net']
    }
}));

app.use(helmet.hsts({
    maxAge: 31536000,
}));

app.use(
    helmet.frameguard({
        action: "sameorigin",
    })
);

app.use(
    helmet.referrerPolicy({
        policy: "no-referrer",
    })
);

app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

app.use('/', express.static('./public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '../platforms/browser/www/index.html');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});