import './index.scss'
import m from 'mithril'
const root = document.querySelector('.app')

const Dashboard = {
  view: function (vnode) {
    return m('div', [
      m('h1', "Hello Dash")
    ])
  }
}

m.route(root, "/", {
  "/": Dashboard
})