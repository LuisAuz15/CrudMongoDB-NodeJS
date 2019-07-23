const express = require('express');
const enrutador = express.Router();

const Tarea = require('../modelos/tareas');

enrutador.get('/', async (req, res) =>{
  const tareas = await Tarea.find();
  console.log(tareas);
  res.render('index', {
    tareas
  });
});

enrutador.post('/add', async (req, res) => {
  const tarea = new Tarea(req.body);
  await tarea.save();
  res.redirect('/');
});

enrutador. get('/turn/:id', async (req, res) => {
  const { id } = req.params;
  await Tarea.findById(id);
  const tarea = await Tarea.findById(id);
  tarea.estado = !tarea.estado;
  tarea.save();
  console.log(tarea);
  res.redirect('/');
});

enrutador.get('/edit/:id', async (req,res) =>{
  const {id} = req.params;
  const tarea = await Tarea.findById(id);
  res.render('edit', {
    tarea
  });
});

enrutador.post('/edit/:id', async (req,res) =>{
  const {id} = req.params;
  await Tarea.update({_id:id}, req.body);
  res.redirect('/');
});

enrutador.get('/delete/:id', async (req, res) =>{
  const { id } = req.params;
  await Tarea.remove({_id: id});
  res.redirect('/');
});
module.exports = enrutador;
