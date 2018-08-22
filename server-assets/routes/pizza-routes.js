const router = require('express').Router()
let Pizza = require('../models/Pizza') //in node you dont have to append .js since node already knows 

//THIS IS YOUR GET
//get all or by ID Industry standard following REST conventions
router.get('/', (req, res, next) => {
    //FIND ALL of this model 
    Pizza.find({})
        .then(pizzas => {
            res.send(pizzas)
        })
        .catch(err => {
            return next(err)
        })
})

router.get('/:id', (req, res, next) => {
    //FIND by one specific ID/get one 
    Pizza.findById(req.params.id)
        .then(pizza => res.send(pizza))
        .catch(next) // you should be safe doing this rather than the catch up in the get ALL  b
})


//THIS IS YOUR POST
router.post('/', (req, res, next) => {
    let newPizza = req.body
    Pizza.create(newPizza) //ask for a new pizza
        .then(pizza => {     // theoretically should get a pizza back as an instance of your Pizza model
            res.send(pizza)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// used when we hard-coded our pizza data (: (: 
// router.get('/:index', (req, res, next) => {
//     if (pizzas[req.params.index]) {
//         return res.send(pizzas[req.params.index])
//     }
//     res.status(400).send('No such pizza')
// })
// router.post('/', (req, res, next) => {
//     pizzas.push(req.body)
//     res.send(pizzas)
// })
// IF YOU HAD TOPPINGS AS AN ARRAY
// router.get('/:pizzaIndex/toppings/:toppingIndex', (req, res, next) => {
//     res.send(pizzas[req.params.index].toppings[req.params.toppingIndex])
// })

//this is your PUT 
router.put('/:id', (req, res, next) => {
    Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //whatever you send with body, update with this. doesnt replace, it edits; if you dont provide new: true, you will get the old data
        .then(() => res.send({
            message: 'Success'
        }))
})

//this is your DELETE
router.delete('/:id', (req, res, next) => {
    Pizza.findByIdAndRemove(req.params.id)  // soft delete, meaning it backs up into some archive, hard delete will truly delete all the info
        .then(() => res.send({
            message: 'Successfully removed pizza'
        }))
        .catch(next)
})

module.exports = router 