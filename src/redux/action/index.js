export const GET_USER = 'GET_USER'
export const GET_POSTS = 'GET_POSTS'
export const SET_POST = 'SET_POST'
export const SET_POST_IMAGE = 'SET_POST_IMAGE'
export const GET_OTHER_USER = 'GET_OTHER_USER'
export const GET_OTHER_PROFILE = 'GET_OTHER_PROFILE'


//COMMENTI

export const GET_COMMENTS = 'GET_COMMENTS'
export const DELETE_COMMENTS = 'DELETE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SINGLE_COMMENT_TEXT = 'SINGLE_COMMENT_TEXT'
export const SINGLE_COMMENT_ID = 'SINGLE_COMMENT_ID'

const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'

//CHIAVE COMMENTI

const commentKey =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU2N2RhMzgyMGJjZjAwMTg4NWZlNTMiLCJpYXQiOjE3MDAxNjcwNzUsImV4cCI6MTcwMTM3NjY3NX0.sUSHX-zK7iJaVNxaQt1xAesHSiUQk-rLAc-siWF3Z-s'

// PROFILO PERSONALE

export const getUserMe = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization: key,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        console.log('eccoli', data)
        dispatch({
          type: GET_USER,
          payload: data,
        })
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// MODIFICA PROFILO

export const putProf = (putProfile, onHide) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',
        {
          method: 'PUT',
          body: JSON.stringify(putProfile),
          headers: {
            Authorization: key,
            'Content-Type': 'application/json',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_USER,
          payload: data,
        })
        console.log('tie', data)
        onHide()
      } else {
        throw new Error('ce la puoi fare')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

// ESTRAZIONE POST

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: { Authorization: key },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_POSTS,
          payload: data,
        })
      } else {
        throw new Error('errore nel recupero dei post')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

// PUBBLICAZIONE POST

export const setPost = (onHide, personalPost, image) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: 'POST',
          body: JSON.stringify(personalPost),
          headers: {
            Authorization: key,
            'Content-Type': 'application/json',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: SET_POST,
          payload: data,
        })
        if (image) {
          console.log('entro qua?')
          let formData = new FormData()
          formData.append('post', image)
          dispatch(setPostImage(onHide, data, formData))
        } else {
          dispatch(getPosts())
          onHide()
        }
      } else {
        throw new Error('Errore nel postare articolo')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

//PUBBLICAZIONE IMMAGINI POST

export const setPostImage = (onHide, personalPost, formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${personalPost._id}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: key,
            Accept: 'application/json',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: SET_POST_IMAGE,
          payload: data,
        })
        dispatch(getPosts())
        onHide()
      } else {
        throw new Error('Errore nel postare articolo')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

//PROFILI ALTRI UTENTI

export const getOtherUser = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',
        {
          headers: {
            Authorization: key,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_OTHER_USER,
          payload: data,
        })
      } else {
        throw new Error('Ladro')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

export const getOtherProfile = (params) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/' + params.userId,
        {
          headers: {
            Authorization: key,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_OTHER_PROFILE,
          payload: data,
        })
      } else {
        throw new Error('Ladro')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }
}

//COMMENTI

// ESTRAZIONE COMMENTI

export const getComments = (postId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          headers: {
            Authorization: commentKey,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        const commentsForPost = data.filter(
          (comment) => comment.elementId === postId
        )
        dispatch({ type: GET_COMMENTS, payload: commentsForPost })
      } else {
        throw new Error('Errore nel recupero dei commenti')
      }
    } catch (error) {
      console.log('Errore nel recupero dei commenti', error)
    }
  }
}

//ELIMINAZIONE COMMENTI

export const deleteComments = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          method: 'DELETE',
          headers: {
            Authorization: commentKey,
          },
        }
      )
      if (res.ok) {
        dispatch(getComments())
      } else {
        throw new Error('Qualquadra non cosa')
      }
    } catch (error) {
      console.log('errore nella cancellazione del commento', error)
    }
  }
}

//POSTARE COMMENTI

export const addComment = () => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(getState().single.content),
          headers: {
            'Content-Type': 'application/json',
            Authorization: commentKey,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        dispatch({ type: ADD_COMMENT, payload: data })
        dispatch(getComments())
      } else {
        throw new Error("Errore nell'invio del commento")
      }
    } catch (error) {
      console.log('ERRORE', error)
    }
  }
}


export const changeCommentText = (newText) => {
  return {
    type: SINGLE_COMMENT_TEXT,
    payload: newText
  }
}

export const changeCommentId = (newId) => {
  return {
    type: SINGLE_COMMENT_ID,
    payload: newId
  }
}

