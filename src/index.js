import './index.scss'
import m from 'mithril'
const root = document.querySelector('.app')

const Card = {
    view: function(vnode) {
        return m('div.card', [
            m('p', "Hello Card"),
            m('p', "Hello Card"),
            m('p', "Hello Card"),
            m('p', "Hello Card"),
            m('p', "Hello Card"),
            m('p', "Hello Card"),
            m('p', "Hello Card"),
        ])
    }
}

const List = {
    view: function(vnode) {
        return m('div.list-wrapper', [
            m('div.list-head', [
              m('p', 'Head')
            ]),
            m('div.list-body', [
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
        ])
    }
}

const Panel = {
    view: function(vnode) {
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