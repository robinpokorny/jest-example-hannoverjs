import { isFSA } from 'flux-standard-action'

import * as actions from './userActions'

describe('loadUserBookings', () => {
  const action = actions.loadUserBookings()

  const dispatch = jest.fn()
  const getState = () => ({
    name: 'gregor'
  })
  const deps = {
    fetch: jest.fn(() => Promise.resolve({
      json: () => {}
    }))
  }

  beforeEach(() => {
    dispatch.mockClear()
    deps.fetch.mockClear()
  })

  test('is a valid FSA', () => {
    action(dispatch, getState, deps)

    expect(dispatch).toHaveBeenCalledTimes(1)
    const dispatchedAction = dispatch.mock.calls[0][0]

    expect(isFSA(dispatchedAction)).toBe(true)
  })

  test('has correct data', () => {
    action(dispatch, getState, deps)

    expect(dispatch.mock.calls).toMatchSnapshot()
  })

  test('fetches bookings from the server', () => {
    action(dispatch, getState, deps)

    expect(deps.fetch).toHaveBeenCalledTimes(1)
    expect(deps.fetch.mock.calls).toMatchSnapshot()
  })
})
