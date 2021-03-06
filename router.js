import { Router } from 'https://deno.land/x/oak/mod.ts'

import getTodos from './controllers/todos/get.js'
import postTodos from './controllers/todos/post.js'

const router = new Router();

router.get('/', ({ response }) => {
    response.body = 'Todo List API using Deno'
})

router
    .get('/todos', getTodos)
    .post('/todos', postTodo)

export default router;