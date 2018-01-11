const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();

//requiring datastore
const db = require(`./db-datastore`);



app.get('/', async (req, res) => {
  try {
    res.json(await db.list());
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//retrieves value of ID
app.get('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.get(req.params.id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//overwritin existing value with ID 
app.put('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.put(req.params.id, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//send data entry to be added to datastore
app.post('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    res.send(await db.post(req.params.id, req.body));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});
//deleting the datastore entry if ID is the same
app.delete('/:id(\\w+)', async (req, res) => {
  try {
    await db.delete(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500)
  }
});

module.exports = app;
