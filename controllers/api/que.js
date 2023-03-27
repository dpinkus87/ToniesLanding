const router = require('express').Router();
const { Que, Que_Item, Que_Item } = require('../../models');

router.post('/que', async (req, res) => {

    const que = await Que.findOne({
        where: { user_id: req.session.user_id },

    })
    const queItems = await Que_Item.findAll({
        where: { que_id: que.id },
    })
   
    await Que_Item.destroy({
        where: {
            orders_id: order.id,
        }
    })
    res.json("Tonie has been added to your Que!")
});

module.exports = router;

