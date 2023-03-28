const router = require('express').Router();
const { Que, Que_Item } = require('../../models');

router.post('/que', async (req, res) => {

    const que = await Que.findOne({
        where: { user_id: req.session.user_id },

    })
    const queItems = await Que_Item.findAll({
        where: { que_id: que.id },
    })
    while (queItems.length) {
        const tonie = queItems.pop()

        const toniesQue = await toniesQue.findOne({
            where: {
                que_id: que.id,
                tonie_id: tonie.id
            }
        })

        if (!toniesQue) {
            await toniesQue.create({
                user_id: req.body.user_id,
                que_id: que.id,
                tonie_id: tonie.id
            })
        }
    }
   
    await Que_Item.destroy({
        where: {
            que_id: que.id,
        }
    })
    res.json("Tonie has been added to your Que!")
});

module.exports = router;

