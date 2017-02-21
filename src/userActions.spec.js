import { isFSA } from 'flux-standard-action'

import * as actions from './userActions'

describe.skip('loadUserBookings', () => {
  const action = actions.loadUserBookings()

  const state = {
    name: 'gregor'
  }
  const deps = {
    fetch: jest.fn(() => Promise.resolve({
      json: () => {}
    })),
    getState: () => state
  }

  beforeEach(() => {
    deps.fetch.mockClear()
  })

  test('is a valid FSA', () => {
    expect(isFSA(action(deps))).toBe(true)
  })

  test('has correct data', () => {
    expect(action(deps)).toMatchSnapshot()
  })

  test('fetches bookings from the server', () => {
    action(deps)

    expect(deps.fetch).toHaveBeenCalledTimes(1)
    expect(deps.fetch.mock.calls).toMatchSnapshot()
  })
})
