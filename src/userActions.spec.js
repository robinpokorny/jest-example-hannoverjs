import { isFSA } from 'flux-standard-action'

import * as actions from './userActions'

describe('User action', () => {
  describe('loadUserBookings', () => {
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

    it('is a valid FSA', () => {
      expect(isFSA(action(deps))).toBe(true)
    })

    it('has correct data', () => {
      expect(action(deps)).toMatchSnapshot()
    })

    it('fetches bookings from the server', () => {
      action(deps)

      expect(deps.fetch).toHaveBeenCalledTimes(1)
      expect(deps.fetch.mock.calls[0][0]).toMatchSnapshot()
    })
  })
})
