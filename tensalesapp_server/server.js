const express = require('express');
const app = express();
var cors = require('cors')
const { sequelize } = require('./models/index'); 

const redirectPath = '/auth/google/callback';
const creds = {
    "clientId": "36293167140-k0qh40m2vhcl66hsdmouhnbstg23c84s.apps.googleusercontent.com",
    "clientSecret": "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",
    "redirectUri": `http://example.com${redirectPath}`
};
const googleOAuth = require('google-oauth-middleware')(creds,
    async (credentials, profile, next) => {
        // store creds in db or however you want to use them
        GoogleAccount
            .addAsync(credentials, profile)
            .then(() => next(), next);
    }
);

app.get('/addGoogleAccount', googleOAuth.authenticate({
    scope: [
        'profile',
        'email',
        'openid',
        // add your scopes here
    ]
}));

app.get(redirectPath,
    // this triggers the authenticator
    googleOAuth.authenticate(),
 
    // success
    (req, res, next) => {
        console.log('ok oauth');
        // do something on success
    },
 
    // fail (this will be triggered when error handling
    // the credentials in the googleOAuth i.e. adding to db)
    (err, req, res, next) => {
        console.log('fail oauth');
        // handle error here somehow
    }
);

// Setting
const PORT = process.env.PORT || 5000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
// Rutas
app.use('/init',require('./routes'));
app.get('/tata', function (req, res) {
    res.send('Hello World!')
  })


// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});