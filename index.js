const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })

module.exports = function stillworksthere(username, password, linkedinPageOfPerson, nameOfOldPlace) {
    nightmare
        .goto('https://www.linkedin.com/')
        .type('.login-email', username)
        .type('.login-password', password)
        .click('#login-submit')
        .wait('.nav-search-bar')
        .goto(linkedinPageOfPerson)
        .scrollTo(500, 500)
        .wait('.pv-entity__secondary-title')
        .evaluate(() => document.querySelector('.pv-entity__secondary-title').textContent)
        .end()
        .then(comp => {
            let answ = comp === nameOfOldPlace ? `Still at ${nameOfOldPlace}` : `Moved to ${comp}`;
            console.log(answ);
            return answ
        })
        .catch(err => {
            return `Search failed: ${err}`
        })
};