import express from 'express'
import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import Database from 'better-sqlite3'
import { Task, insertTaskSchema, tasks } from './schema'
import cors from 'cors'
import { eq } from 'drizzle-orm'
import { validate } from './utils'

// Start SQLite Database
const sqlite = new Database('sqlite.db')
const db: BetterSQLite3Database = drizzle(sqlite)
migrate(db, { migrationsFolder: 'migrations' })

// Configure Express server
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

// API Routes

// Get all tasks
app.get('/tasks', async (req, res) => {
  const tasksList = await db.select().from(tasks).all()

  res.json(tasksList)
})

// Get task by ID
app.get('/tasks/:id', async (req, res) => {
  const id: number = parseInt(req.params.id)
  const [task] = await db.select().from(tasks).where(eq(tasks.id, id)).all()

  res.json(task)
})

// Create new task
app.post('/tasks', validate(insertTaskSchema), async (req, res) => {
  const taskInput: Task = req.body
  const newTask = await db.insert(tasks).values(taskInput).returning().get()

  res.json(newTask)
})

// Modify existing task
app.put('/tasks/:id', validate(insertTaskSchema), async (req, res) => {
  const id: number = parseInt(req.params.id)
  const taskInput: Task = req.body
  const updatedTask = await db
    .update(tasks)
    .set(taskInput)
    .where(eq(tasks.id, id))
    .returning()
    .get()

  res.json(updatedTask)
})

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const id: number = parseInt(req.params.id)
  const deletedTask = await db
    .delete(tasks)
    .where(eq(tasks.id, id))
    .returning()
    .get()

  res.json(deletedTask)
})

// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
