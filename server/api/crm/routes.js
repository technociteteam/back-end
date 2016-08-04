let router = require('express').Router();
let controller = require('./controllers/controller');
let loginController = require('./controllers/loginController');


router.route('/')
.get(controller.getCustomer)
.post(controller.postCustomer);

// we want dynamic params so we don't use /:search but the old school /search
router.route('/search')
.get(controller.dynamicSearch);

router.route('/:id')
.put(controller.updateCustomer)
.delete(controller.deleteById);

router.route('/admin')
.get(controller.getAdmin);

router.route('/admin/:id')
.put(controller.updateAdmin);

router.route('/params')
.get(controller.getParams);

router.route('/login')
.get(loginController.checkPwd);

router.route('/createPdf')
.get(controller.createPdf);


module.exports = router;