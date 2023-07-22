const express = require('express');
const { TodoRecord } = require('../records/todo.record');

const todoRouter = express.Router();

todoRouter

  .get('/', async (req, res) => {
    const allTasks = await TodoRecord.findAll();
    res.render('home', {
      tasks: allTasks,
    });
  })

  .delete('/:id', async (req, res) => {
    const task = await TodoRecord.find(req.params.id);
    if (task) {
      await task.delete();
    }
    res.redirect('/');
  })

  .post('/', async (req, res) => {
    const newTask = new TodoRecord(req.body);
    await newTask.insert();
    res.redirect('/');
  });

module.exports = {
  todoRouter,
};
