const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/contacts")

router.get('/contacts', list)

router.get('/contacts/:contactsId', show)

router.post('/contacts', create)

module.exports = router