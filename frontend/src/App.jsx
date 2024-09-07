import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import  Issue from './components/Issue'

function App() {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/v1/issues')
      .then(response => {
        console.log('promise fulfilled')
        setIssues(response.data)
      })
  }, [])
  console.log('render', issues.length, 'issues')

  return (
    <>
    <div className='issues-list'>
      {issues.map(issue =>
        <Issue key={issue.id} issue={issue} />
      )}
    </div>
    </>
  )
}

export default App
