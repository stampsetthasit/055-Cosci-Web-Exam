var store = require('store');

exports.send = (req, res) => {
    const { nameX, topicX, emailX, messageX } = req.body;

    if (!nameX && !topicX && !emailX && !messageX) return res.redirect('/error');

    store.set('contact', {
        name: nameX,
        topic: topicX,
        email: emailX,
        message: messageX
    })

    res.redirect('/contactus/success');
};