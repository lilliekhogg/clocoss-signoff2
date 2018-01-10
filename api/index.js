const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();


const db = require(`./db-datastore`);



api.get('/', async (req, res) => {
    res.sendStatus(200);

});

api.get('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.get(req.params.id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});


app.post('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.post(req.params.id, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.put('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.put(req.params.id, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.delete('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.delete(req.params.id), 204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500)
  }
});


module.exports = api;
