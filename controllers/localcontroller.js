const db = require('../models/database');

const getDistricts = async (req, res) => {
    const matp = req.params.matp;
    const qry = `SELECT * FROM devvn_quanhuyen WHERE matp = ${matp};`;
    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.send(result);
    });
};

const getWards = async (req, res) => {
    const maqh = req.params.maqh;
    const qry = `SELECT * FROM devvn_xaphuongthitran WHERE maqh = ${maqh};`;
    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.send(result);
    });
};

const searchLocation = async (req, res) => {
    const key = req.params.key;
    const qry = `SELECT sum AS result FROM location WHERE MATCH (sum) AGAINST ('${key}' IN NATURAL LANGUAGE MODE);`;
    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.send(result);
    });
};

module.exports = {
    getDistricts,
    getWards,
    searchLocation
}