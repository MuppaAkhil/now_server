var express = require('express');
import {fetchCards} from '../controllers/Cards';

var v1 = express.Router();

v1.get('/fetchCards', fetchCards);

module.exports = v1;