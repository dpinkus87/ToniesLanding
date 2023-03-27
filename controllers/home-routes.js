const router = require("express").Router();
const { User, Que, Que_Item, Tonies } = require("../models");

// Render Home Page

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

// Get a user for profile

router.get('/profile', async (req, res) => {
  try {
    const queData = await User.findOne({
      where: { id: req.session.user_id },
    });
    const userQue = await Que.findOne({
      where: { id: req.session.user_id },
    });

    const userProfile = queData.get({ plain: true });

    const currentQueData = await Que.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [{ model: Tonies, through: Que_Item }],
    });
    const currentQue = currentQueData.get({ plain: true });

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
      res.render('profile', {
        userProfile,
        currentQue,
        loggedIn: req.session.loggedIn,
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all Tonies
router.get('/tonies', async (req, res) => {
  try {
    const tonieData = await Tonies.findAll({});

    const tonieList = tonieData.map((tonies) => tonies.get({ plain: true }));

    res.render('tonies', {
      tonieList,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get Tonie by ID
router.get("/tonie/:id", async (req, res) => {
  try {
    const tonieData = await Tonies.findByPk(req.params.id);

    const tonies = tonieData.get({ plain: true });
    res.render("productDetail", {
      tonies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all Tonies in Que_Item by ID
router.get('/que', async (req, res) => {
  try {
    const queData = await Que.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }, { model: Tonies, through: Que_Item }],
    });

    const queList = queData.map((que) => que.get({ plain: true }));

    res.render('que', {
      queList,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add Tonie to Que
router.post('/que', async (req, res) => {
  try {
    let queData = await Que.findOne({
      where: { user_id: req.session.user_id },
    });
    let queItem = await Que_Item.findOne({
      where: {
        que_id: queData.id,
        tonies_id: req.body.tonies_id,
      },
    });
    if (!queItem)
      orderItem = await Que_Item.create({
        que_id: queData.id,
        products_id: req.body.products_id,
      });

    res.json(queItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete Tonie from Que
router.delete('/que', async (req, res) => {
  try {
    const queData = await Que_Item.destroy({
      where: {
        tonies_id: req.body.tonies_id,
      },
    });

    if (!queData) {
      res.status(404).json({ message: "This item does not exist!" });
      return;
    }

    res.status(200).json(queData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render("login");
});

// Signup Route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
