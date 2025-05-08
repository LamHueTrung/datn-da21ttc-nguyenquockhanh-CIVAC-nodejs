const jwt = require('jsonwebtoken');

class SitesQuery {
    
    BookVaccine(req, res) {
        res.status(200).render('pages/book_vaccine', { layout: 'main_user'});
    }

    async HomeVacxin(req, res) {
        res.status(200).render('pages/home_vacxin', { layout: 'main_user'});
    }

    async PriceList(req, res) {
        res.status(200).render('pages/price_list', { layout: 'main_user'});
    }

    async Overview(req, res) {
        res.status(200).render('pages/overview', { layout: 'main_user'});
    }

    async DetailsVacxin(req, res) {
        res.status(200).render('pages/details_vacxin', { layout: 'main_user'});
    }

    async HomeTinTuc(req, res) {
        res.status(200).render('pages/home_tintuc', { layout: 'main_user'});
    }

    async DetailsTinTuc(req, res) {
        res.status(200).render('pages/details_tintuc', { layout: 'main_user'});
    }

    async Home(req, res) {
        res.status(200).render('pages/home', { layout: 'main_user'});
    }

    Authention(req, res) {
        res.status(200).render('pages/authention', { layout: 'Login'});
    }

    Profile(req, res) {
        res.status(200).render('pages/profile', { layout: 'main_user'});
    }

    async Index(req, res, next) {
        res.status(200).render("pages/main", {
            layout: "main",
        });
    }

};

module.exports = new SitesQuery;