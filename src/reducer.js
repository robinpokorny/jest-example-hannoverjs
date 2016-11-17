import { Record } from 'immutable'

const State = Record({
  loggedIn: true,
  name: null
})

export default (state, action) => {
  if (!(state instanceof State))
    state = new State(state)

  switch (action.type) {

    case 'CHANGE_NAME': {
      const newName = action.payload

      if (!state.loggedIn) {
        return state
      }

      return state.set('name', newName)
    }

  }

  return state
}
