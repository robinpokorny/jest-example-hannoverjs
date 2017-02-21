// `deps` is called `extraArgument` in redux-thunk
// https://github.com/gaearon/redux-thunk/blob/v2.2.0/src/index.js
export const reduxThunk = (deps) =>
  ({ getState, dispatch }) =>
    (next) => (action) =>
      typeof action === 'function'
       ? action(dispatch, getState, deps)
        : next(action)

export const esteThunk  = (deps) =>
  ({ getState, dispatch }) =>
    (next) => (action) =>
      typeof action === 'function'
       ? next(action({ dispatch, getState, ...deps }))
        : next(action)

// Diff of L7 and L14
/* eslint-disable */
const diff = () => {

       action(  dispatch, getState,    deps  )
  next(action({ dispatch, getState, ...deps }))

}
/* eslint-enable */
