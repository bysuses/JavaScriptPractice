const express = require('express');
const { TodoRecord } = require('../records/todo.record');
const { TodoRepository } = require('../repositories/todo.repository');

const todoRouter = express.Router();

todoRouter

  .get('/', async (req, res) => {
    const allTasks = await TodoRepository.findAll();
    res.render('home', {
      tasks: allTasks,
    });
  })

  .delete('/:id', async (req, res) => {
    const task = await TodoRepository.find(req.params.id);
    if (task) {
      await TodoRepository.delete(task);
    }
    res.redirect('/');
  })

  .post('/', async (req, res) => {
    const newTask = new TodoRecord(req.body);
    await TodoRepository.insert(newTask);
    res.redirect('/');
  });

module.exports = {
  todoRouter,
};
