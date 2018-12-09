import 'bulma/css/bulma.css'
import './index.scss'
import m from 'mithril'
import djs from 'dayjs'
const root = document.querySelector('.app')

var Data = {
    addModal: {
        display: false
    },
    cardModal: {
        display: false
    },
    current_pvt: djs(),
    current_week_start: djs().startOf('week'),
    current_week_end: djs().endOf('week'),
    lists: [{
        time: djs().startOf('week').format('YYYY/MM/DD'),
        items: [{
            title: "Hello",
            content: "This is a card."
        }]
    }, {
        time: djs().startOf('week').add(1, 'day').format('YYYY/MM/DD'),
        items: [{
            title: "Hello",
            content: "This is a card 3."
        }]
    }, {
        time: djs().startOf('week').add(2, 'day').format('YYYY/MM/DD'),
        items: [{
            title: "Hello",
            content: "This is a card 1."
        }]
    }, {
        time: djs().startOf('week').add(3, 'day').format('YYYY/MM/DD'),
        items: [{
            title: "Hello",
            content: "This is a card 2."
        }]
    }, {
        time: djs().startOf('week').add(4, 'day').format('YYYY/MM/DD'),
        items: [{
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }, {
            title: "Hello",
            content: "This is a card 1."
        }]
    }, {
        time: djs().startOf('week').add(5, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(6, 'day').format('YYYY/MM/DD'),
        items: []
    }, ]
}

const Panel = {
    view: function(vnode) {
        return m('div.panel', [
            Data.lists.map((list) => {
                return m(List, {
                    list: list
                })
            }),
            m(AddModel)
        ])
    }
}

const List = {
    oninit: (vnode) => {},
    view: function(vnode) {
        return m('div.list-wrapper', [
            m('div.list-header', [
                m('h3', vnode.attrs.list.time)
            ]),
            m('div.list-body', [
                vnode.attrs.list.items.map((item) => {
                    return m(Card, {
                        item: item
                    })
                }),
                m('button.button.is-fullwidth.is-small', {
                    onclick: () => {
                        Data.addModal.display = true
                    }
                }, "+")
            ]),

        ])
    }
}

const Card = {
    oninit: (vnode) => {},
    view: function(vnode) {
        return m('div.card', [
            m('h4', vnode.attrs.item.title),
            m('p', vnode.attrs.item.content),
        ])
    }
}

const AddModel = {
    view: function(vnode) {
        return m(".modal", {
            class: `${Data.addModal.display == true ? 'is-active' : ''}`
        }, [
            m(".modal-background"),
            m(".modal-card", [
                m("header.modal-card-head", [
                    m("p.modal-card-title",
                        "Modal title"
                    ),
                    m("button.delete[aria-label='close']", {
                        onclick: () => {
                            Data.addModal.display = false
                        }
                    })
                ]),
                m("section.modal-card-body", ),
                m("footer.modal-card-foot", [
                    m("button.button.is-success",
                        "Save changes"
                    ),
                ])
            ])
        ])
    }
}

const CardModel = {
    view: function(vnode) {
        return m(".modal", {
            class: `${Data.cardModal.display == true ? 'is-active' : ''}`
        }, [
            m(".modal-background"),
            m(".modal-card", [
                m("header.modal-card-head", [
                    m("p.modal-card-title",
                        "Modal title"
                    ),
                    m("button.delete[aria-label='close']", {
                        onclick: () => {
                            Data.cardModal.display = false
                        }
                    })
                ]),
                m("section.modal-card-body", ),
                m("footer.modal-card-foot", [
                    m("button.button.is-success",
                        "Save changes"
                    ),
                ])
            ])
        ])
    }
}

m.route(root, "/", {
    "/": Panel
})