import { useDispatch, useSelector } from 'react-redux'
import AddComment from './AddComment'
import { useEffect } from 'react'
import { getComments } from '../redux/action'
import CommentList from './CommentList'

const CommentArea = ({ postId }) => {
  return (
    <div className="d-flex flex-column-reverse">
      <CommentList postId={postId} />
      <AddComment postId={postId} />
    </div>
  )
}

export default CommentArea
