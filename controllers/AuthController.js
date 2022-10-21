const username = 'commu';
const password = 'Cosci7749'

exports.login = (req, res) => {
    const { usernameX, passwordX } = req.body;
    if (!usernameX || !passwordX)  return res.redirect('/error');
    if (usernameX == username && passwordX == password) {
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
};

exports.loginStrategicPlanning = (req, res) => {
    const { usernameX, passwordX } = req.body;
    if (!usernameX || !passwordX)  return res.redirect('/error');
    if (usernameX == username && passwordX == password) {
        req.session.isLoggedIn = true;
        res.redirect('/strategicplanning');
    }
}

exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.redirect('/error');
        }
        else {
            res.redirect('/')
        }
    })
}