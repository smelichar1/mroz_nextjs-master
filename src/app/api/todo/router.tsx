import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const todos = await prisma.todo.findMany();
        res.json(todos);
    } else if (req.method === 'POST') {
        const { text } = req.body;
        const todo = await prisma.todo.create({
            data: {
                text,
            },
        });
        res.json(todo);
    }
}