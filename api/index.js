const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();

module.exports = app;
const db = require(`./db-datastore`);



app.get('/', async (req, res) => {
  try {
    res.json(await db.list());
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.get(req.params.id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.put('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.put(req.params.id, req.body));
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

app.delete('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.delete(req.params.id), 204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500)
  }
});
