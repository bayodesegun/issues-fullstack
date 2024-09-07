const express = require('express')
const app = express()

let issues = [
  {
    id: "1",
    title: "Html is broken!",
    description: "The page does not render properly"
  },
  {
    id: "2",
    title: "Browser cannot execute JavaScript. Why?!",
    description: "How do I turn it on?"
  },
  {
    id: "3",
    title: "CSS is broken!",
    description: "The page does not render properly"
  }
]

app.get('/', (request, response) => {
  response.json(issues)
})

app.post('/api/issues', (request, response) => {
  const issue = request.body
  console.log(issue)
  issue.id = issues.length + 1
  issues = issues.concat(issue)
  response.json(issue)
})

app.get('/api/issues/:id', (request, response) => {
  const id = request.params.id
  const issue = issues.find(issue => issue.id === id)
  if (issue) {
    response.json(issue)
  } else {
    response.status(404).end()
  }
})

app.put('/api/issues/:id', (request, response) => {
  const id = request.params.id
  const updatedIssue = request.body
  console.log(updatedIssue)
  issues = issues.map(issue => issue.id === id ? updatedIssue : issue)
  response.json(updatedIssue)
})

app.delete('/api/issues/:id', (request, response) => {
  const id = request.params.id
  console.log(`Id to delete: ${id}`)
  issues = issues.filter(issue => issue.id !== id)

  response.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
