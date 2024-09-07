/* eslint-disable react/prop-types */
import { useState } from 'react'

const Issue = ({ issue }) => {
  const [showDetails, setShowDetails] = useState(false)


  return (
    <div className='issue' key={issue.id}>
      { !showDetails ?
        (<div className='issue-overview'>
          {issue.description} <button onClick={() => setShowDetails(true)}>view</button>
        </div>
        )
        :
        (<div className='issue-details'>
          <div>{issue.title} <button onClick={() => setShowDetails(false)}>hide</button></div>
        </div>
        )
      }
    </div>
  )
}


export default Issue