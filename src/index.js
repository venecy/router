import {
  initPathFn,
  routerFactory,
  enmuDirection,
  Switch,
  Route,
  Redirect,
  Link
} from './lib'

function withRouter (app, name = 'router', config) {
  return (state, actions, view, root) => {
    const pathFn = (state) => state[name]

    const {
      subscribe,
      state: routerState,
      actions: routerActions
    } = routerFactory({ ...config, pathFn })

    state[name] = routerState
    actions[name] = routerActions

    return subscribe(
      app(state, actions, view, root)
    )
  }
}

export {
  withRouter,
  initPathFn,
  routerFactory,
  enmuDirection,
  Switch,
  Route,
  Redirect,
  Link
}