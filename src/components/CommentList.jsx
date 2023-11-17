import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'
import { useSelector } from 'react-redux'

const CommentList = ({ postId }) => {
  const comments = useSelector((state) => state.comments.content)
  const postComments = comments.filter(
    (comment) => comment.elementId === postId
  )
  return (
    <div className="px-2">
      <ListGroup>
        {postComments.map((comment) => {
          return <SingleComment key={comment._id} comment={comment} />
        })}
      </ListGroup>
    </div>
  )
}

export default CommentList
