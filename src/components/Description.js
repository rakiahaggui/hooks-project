import React from 'react'
import{useParams} from 'react-router-dom';
function Description() {
  const{id}= useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default Description;
