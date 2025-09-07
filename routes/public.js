import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient()
const router = express.Router();

router.post('/todos', async (req, res) => {
    try {

        await prisma.todo.create({
            data: {
                name: req.body.name,
                description: req.body.description,
            }
        })

        res.status(201).json({ message: 'tarefa adicionado com sucesso!' });

    } catch (err) {
        res.status(500).json({
            message: 'Erro ao cadastrar tarefa', err
        });
    }

});

router.get('/todos', async (req, res) => {
    try {
        let todos = []

        if (req.query) {

            todos = await prisma.todo.findMany({
                where: {
                    name: req.query.search,
                }
            })
        } else {
            todos = await prisma.todo.findMany()
        }
        res.json(todos)

    } catch (err)  {
        res.status(500).json({
            message: 'Erro ao cadastrar tarefa', err
        });
    }
})

router.put('/todos/:id', async (req, res) => {
    try {
        await prisma.todo.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                description: req.body.description,
            }
        });
        res.status(200).json({ message: 'tarefa alterada com sucesso!' });

    } catch {
        res.status(500).json({
            message: 'Erro ao alterar tarefa', err
        });
    }
});

router.delete('/todos/:id', async (req, res) => {
    try {
        await prisma.todo.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(204).json({ message: 'Tarefa deletada com sucesso!' });
    } catch {
        res.status(500).json({
            message: 'Erro ao deletar tarefa', err
        });
    }
});

export default router