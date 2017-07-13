const mongoose = require('mongoose')
let log = (...parameter) => {
    console.log(...parameter)
}


let Scheme = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/users', e => {
    if (e) {
        console.log('链接失败')
    }
})

let goodsScheme = new Scheme({
    type: String,
    price: Number
})
let storeScheme = new Scheme({
    name: String,
    goods: [goodsScheme]
})

let store1 = {
    name: 'store1',
    goods: [{
        type: 'food',
        price: 101222
    }]
}

let store2 = {
    name: 'store2',
    goods: [{
        type: 'food',
        price: 101222
    }]
}


let store3 = {
    name: 'store3',
    goods: [{
        type: 'food',
        price: 12222
    }]
}

let docs = [store1, store2, store3]

let Stores = mongoose.model('stores_ose', storeScheme)

Stores.create(docs, (e, docs) => {
    if (!e) {
        log(docs)
    }
})