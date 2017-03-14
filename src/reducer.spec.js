import reducer from './reducer'

test('creates initial state', () => {
  expect(reducer(undefined, {})).toMatchSnapshot()
})

test('changes name when logged in', () => {
  const action = {
    type: 'CHANGE_NAME',
    payload: 'Gregor Samsa'
  }

  expect(reducer(undefined, action)).toMatchSnapshot()
})

test('does not change name when not logged in', () => {
  const state = {
    loggedIn: false
  }
  const action = {
    type: 'CHANGE_NAME',
    payload: 'Gregor Samsa'
  }

  expect(reducer(state, action)).toMatchSnapshot()
})
