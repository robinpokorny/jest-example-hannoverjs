export const LOAD_USER_BOOKINGS = 'LOAD_USER_BOOKINGS'

export const loadUserBookings = () =>
  ({ getState, fetch }) => {
    const { name } = getState()

    const promise = fetch(`${name}/bookings`)
      .then((response) =>
        response.json()
      )

    return ({
      type: LOAD_USER_BOOKINGS,
      payload: promise
    })
  }
