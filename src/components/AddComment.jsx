import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addComment, changeCommentText } from "../redux/action"

const AddComment = ({ postId }) => {
  const dispatch = useDispatch()
  const text = useSelector((state) => state.single.content.comment)

  // const [comments, setComments] = useState({
  //   comment: '',
  //   rate: 1,
  //   elementId: postId,
  // })

  const addCommentHandler = (e) => {
    e.preventDefault()
    dispatch(addComment({ comment: text, elementId: postId, rate: 1 }))
  }

  return (
    <Form onSubmit={addCommentHandler}>
      <div className="px-2">
        <Form.Group className="mb-3">
          <Form.Label>Lascia il tuo commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={text}
            onChange={(e) => {
              dispatch(changeCommentText(e.target.value))
            }}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default AddComment
