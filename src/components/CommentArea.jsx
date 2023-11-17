import { useDispatch, useSelector } from 'react-redux'
import AddComment from './AddComment'
import { useEffect, useState } from 'react'
import { getComments } from '../redux/action'
import CommentList from './CommentList'

const CommentArea = ({ postId }) => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId)
  }
  return (
    <div className="d-flex flex-column-reverse">
      <CommentList postId={postId} />
      <AddComment
        postId={selectedPostId}
        selectedPostId={selectedPostId}
        handlePostSelect={handlePostSelect}
      />
    </div>
  )
}

export default CommentArea
