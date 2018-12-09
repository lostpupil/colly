import './index.scss'
import m from 'mithril'
import djs from 'dayjs'
const root = document.querySelector('.app')

var Data = {
    current_pvt: djs(),
    current_week_start: djs().startOf('week'),
    current_week_end: djs().endOf('week'),
    lists: [
        djs().startOf('week'),
        djs().startOf('week').add(1, 'day'),
        djs().startOf('week').add(2, 'day'),
        djs().startOf('week').add(3, 'day'),
        djs().startOf('week').add(4, 'day'),
        djs().startOf('week').add(5, 'day'),
        djs().startOf('week').add(6, 'day')
    ]
}
console.log(Data.current_week_end.diff(Data.current_week_start, 'day'))
const Card = {
    view: function(vnode) {
        return m('div.card', [
            m('p', "Hello Card"),
            m('p', "Hello Card"),
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
                m('h3', vnode.attrs.time.format('YYYY/MM/DD'))
            ]),
            m('div.list-body', [
                m(Card),
                m(Card)
            ])
        ])
    }
}

const Panel = {
    view: function(vnode) {
        return m('div.panel', Data.lists.map((list) => {
            return m(List, {
                time: list
            })
        }))
    }
}
m.route(root, "/", {
    "/": Panel
})