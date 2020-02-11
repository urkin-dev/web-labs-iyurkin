let express = require(`express`);
let router = express.Router();

router.get(`/`, (req, res) => res.render(`index`));
router.get(`/lab3`, (req, res) => res.render(`./labs/lab3`));
router.get(`/lab4`, (req, res) => res.render(`./labs/lab4`));
router.get(`/lab5`, (req, res) => res.render(`./labs/lab5`));
router.get(`/lab6`, (req, res) => res.render(`./labs/lab6`));
router.get(`/lab7`, (req, res) => res.render(`./labs/lab7`));
router.get(`/lab8`, (req, res) => res.render(`./labs/lab8`));
router.get(`/lab9`, (req, res) => res.render(`./labs/lab9`));

module.exports = router;