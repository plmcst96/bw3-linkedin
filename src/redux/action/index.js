export const GET_USER = 'GET_USER'
export const GET_USER_MODAL = 'GET_USER_MODAL'

const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'
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

// export const putProf = () => {
//     const key =
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'

//     try {
//       const res = await fetch(
//         'https://striveschool-api.herokuapp.com/api/profile/',
//         {
//           method: 'PUT',
//           body: JSON.stringify(putProfile),
//           headers: {
//             Authorization: key,
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       if (res.ok) {
//         const data = await res.json()
//         console.log('tie', data)
//         onHide()
//       } else {
//         throw new Error('ce la puoi fare')
//       }
//     } catch (error) {
//       console.log('errore', error)
//     }
//   }
