import './index.scss'
import m from 'mithril'
import djs from 'dayjs'
const root = document.querySelector('.app')

var Data = {
    current_pvt: djs(),
    current_week_start: djs().startOf('week'),
    current_week_end: djs().endOf('week'),
    lists: [{
        time: djs().startOf('week'),
        items: [{
            title: "Hello",
            content: "This is a card."
        }]
    }, {
        time: djs().startOf('week').add(1, 'day'),
        items: [{
            title: "Hello",
            content: "This is a card 3."
        }]
    }, {
        time: djs().startOf('week').add(2, 'day'),
        items: [{
            title: "Hello",
            content: "This is a card 1."
        }]
    }, {
        time: djs().startOf('week').add(3, 'day'),
        items: [{
            title: "Hello",
            content: "This is a card 2."
        }]
    }, {
        time: djs().startOf('week').add(4, 'day'),
        items: []
    }, {
        time: djs().startOf('week').add(5, 'day'),
        items: []
    }, {
        time: djs().startOf('week').add(6, 'day'),
        items: []
    }, ]
}

const Card = {
    oninit: (vnode) => {
        console.log(vnode.attrs)
    },
    view: function(vnode) {
        return m('div.card', [
            m('h4', vnode.attrs.item.title),
            m('p', vnode.attrs.item.content),
        ])
    }
}

const List = {
    oninit: (vnode) => {
        // console.log(vnode.attrs.time.format('YYYY/MM/DD'))
    },
    view: function(vnode) {
        return m('div.list-wrapper', [
            m('div.list-head', [
                m('h3', vnode.attrs.list.time.format('YYYY/MM/DD'))
            ]),
            m('div.list-body', vnode.attrs.list.items.map((item) => {
                return m(Card, {
                    item: item
                })
            }))
        ])
    }
}

const Panel = {
    view: function(vnode) {
        return m('div.panel', Data.lists.map((list) => {
            return m(List, {
                list: list
            })
        }))
    }
}

m.route(root, "/", {
    "/": Panel
})