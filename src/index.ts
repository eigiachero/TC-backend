import express from 'express'
import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import Database from 'better-sqlite3'
import { tasks } from './schema'

const sqlite = new Database('sqlite.db')
const db: BetterSQLite3Database = drizzle(sqlite)
migrate(db, { migrationsFolder: 'migrations' })

const app = express()
const port = 4000

app.use(express.json())

app.get('/addExample', async (req, res) => {
  const exampleTask = await db
    .insert(tasks)
    .values({
      name: 'Example Task',
      description: 'Description of an example created Task',
    })
    .returning()
    .get()
  console.log(exampleTask)

  res.json(exampleTask)
})

app.get('/tasks', async (req, res) => {
  const taskList = await db.select().from(tasks).all()
  console.log(tasks)

  res.json(taskList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
