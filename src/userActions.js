export const LOAD_USER_BOOKINGS = 'LOAD_USER_BOOKINGS'

// Expects that `fetch` is injected using `extraArgument`
// while creating the store:
//   const store = createStore(
//     reducer,
//     applyMiddleware(thunk.withExtraArgument({ fetch }))
//   )
// Read more:
// https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
//
// The created action will be evaluated by redux-promise-middleware:
// https://github.com/pburtchaell/redux-promise-middleware

export const loadUserBookings = () =>
  (dispatch, getState, { fetch }) => {
    const { name } = getState()

    const promise = fetch(`${name}/bookings`)
      .then((response) =>
        response.json()
      )

    dispatch({
      type: LOAD_USER_BOOKINGS,
      payload: {
        data: name,
        promise
      }
    })
  }
