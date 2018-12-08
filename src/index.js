import './index.scss'
import m from 'mithril'
const root = document.querySelector('.app')

const Card = {
  view: function (vnode) {
    return m('div.card', [
      m('h1', "Hello Card")
    ])
  }
}

const List = {
  view: function (vnode) {
    return m('div.list', [
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
      m(Card),
    ])
  }
}

const Panel = {
  view: function (vnode) {
    return m('div.panel', [
      m(List),
      m(List),
      m(List),
      m(List),
      m(List),
      m(List),
      m(List),
      m(List)
    ])
  }
}
m.route(root, "/", {
  "/": Panel
})