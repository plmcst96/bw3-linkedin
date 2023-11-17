import { Component, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addComment } from '../redux/action'

const AddComment = ({ postId }) => {
  const dispatch = useDispatch()
  const [comments, setComments] = useState({
    comment: '',
    rate: 1,
    elementId: postId,
  })

  const addCommentHandler = (e) => {
    e.preventDefault()
    dispatch(addComment({ ...comments, elementId: postId }))
    setComments({ comment: '', rate: 1, elementId: postId })
  }

  return (
    <Form onSubmit={addCommentHandler}>
      <div className="px-2">
        <Form.Group className="mb-3">
          <Form.Label>Lascia il tuo commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={comments.comment}
            autoFocus
            onChange={(e) => {
              setComments({ ...comments, comment: e.target.value })
            }}
          />
        </Form.Group>
        <Button type="submit" className="w-100 my-2">
          Pubblica
        </Button>
      </div>
    </Form>
  )
}

export default AddComment
