import reducer from './reducer'

describe('User reducer', () => {
  it('creates initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('changes name when logged in', () => {
    const action = {
      type: 'CHANGE_NAME',
      payload: 'Gregor Samsa'
    }

    expect(reducer(undefined, action)).toMatchSnapshot()
  })

  it('does not change name when not logged in', () => {
    const state = {
      loggedIn: false
    }
    const action = {
      type: 'CHANGE_NAME',
      payload: 'Gregor Samsa'
    }

    expect(reducer(state, action)).toMatchSnapshot()
  })
})
