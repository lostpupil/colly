import 'bulma/css/bulma.css'
import './index.scss'
import m from 'mithril'
import djs from 'dayjs'
import _ from 'lodash'

const root = document.querySelector('.app')

var Data = {
    addModal: {
        key: '',
        display: false,
        item: {
            title: '',
            content: ''
        }
    },
    cardModal: {
        display: false
    },
    current_pvt: djs(),
    current_week_start: djs().startOf('week'),
    current_week_end: djs().endOf('week'),
    lists: [{
        time: djs().startOf('week').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(1, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(2, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(3, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(4, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(5, 'day').format('YYYY/MM/DD'),
        items: []
    }, {
        time: djs().startOf('week').add(6, 'day').format('YYYY/MM/DD'),
        items: []
    }]
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
                        Data.addModal.key = vnode.attrs.list.time
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
                        Data.addModal.key
                    ),
                    m("button.delete[aria-label='close']", {
                        onclick: () => {
                            Data.addModal.display = false
                            Data.addModal.key = ''
                        }
                    })
                ]),
                m("section.modal-card-body", [
                    m(".field",
                        m(".control",
                            m("input.input[placeholder='title'][type='text']", {
                                value: Data.addModal.item.title,
                                oninput: (e) => {
                                    Data.addModal.item.title = e.target.value
                                }
                            })
                        )
                    ),
                    m(".field",
                        m(".control",
                            m("input.input[placeholder='content'][type='text']", {
                                value: Data.addModal.item.content,
                                oninput: (e) => {
                                    Data.addModal.item.content = e.target.value
                                }
                            })
                        )
                    ),
                ]),
                m("footer.modal-card-foot", [
                    m("button.button.is-success", {
                        onclick: () => {
                            console.log(Data.addModal.key)
                            console.log(Data.addModal.item)
                            let result = _.find(Data.lists, {
                                time: Data.addModal.key
                            })
                            result.items.push(Data.addModal.item)
                            // clear the data
                            Data.addModal.display = false
                            Data.addModal.key = ''
                            Data.addModal.item = {
                                title: '',
                                content: ''
                            }
                        }
                    }, "Add")
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