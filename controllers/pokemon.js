const router = require('express').Router()
const Pokemon = require('../models/Pokemon')

router.get('/', async (req,res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    } catch (error) {
        console.log('Error fetching all pokemon', error)
        res.status(500).json({ message: 'Error fetching all pokemon' })
    }
})

module.exports = router