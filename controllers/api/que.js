const router = require('express').Router();
const { Que, Tonies_Que, Tonies } = require('../../models');

router.post('/', async (req, res) => {

// // TODO - left off here
//     const order = await Que.findOne({
//         where: { user_id: req.session.user_id },

//     })
//     const  = await Tonies_Que.findAll({
//         where: { que_id: que.id },
//     })
//     while (Tonies_Que.length) {
//         const tonies = orderItems.pop()

//         const collectionProduct = await CollectionProduct.findOne({
//             where: {
//                 collections_id: collections.id,
//                 products_id: product.products_id,
//             }
//         })
//         if (!collectionProduct) {
//             await CollectionProduct.create({
//                 user_id: req.body.user_id,
//                 collections_id: collections.id,
//                 products_id: product.products_id,
//             })
//         }
//     }
//     await Tonies_Que.destroy({
//         where: {
//             orders_id: order.id,
//         }
//     })
//     res.json("Order has been submitted and added to your collection!")
// });
};

module.exports = router;

