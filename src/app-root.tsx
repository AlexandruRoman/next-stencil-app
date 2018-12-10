import { Component, Prop } from '@stencil/core';
import { configureStore } from './store';
import { Store } from './services/redux/types';
import './services/redux/redux'

import { routeType } from './store/router/selectors';
import { gotoHome, gotoUser } from './store/router/actions';

@Component({
  tag: 'app-root',
  shadow: true
})
export class AppRoot {
  @Prop({ context: 'store' }) store: Store
  @Prop() routeType: string
  gotoHome: typeof gotoHome
  gotoUser: typeof gotoUser

  componentWillLoad() {
    this.store.setStore(configureStore())
    this.mapDispatchToProps()
    this.mapStateToProps()
  }

  mapStateToProps() {
    this.store.mapStateToProps(this, (state) => {
      return {
        routeType: routeType(state)
      }
    });
  }

  mapDispatchToProps() {
    this.store.mapDispatchToProps(this, {
      gotoHome,
      gotoUser,
    })
  }

  render() {
    return (
      <div>
        ceva
      </div>
    );
  }
}
