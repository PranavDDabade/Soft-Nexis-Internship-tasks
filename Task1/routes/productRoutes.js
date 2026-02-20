const router = require('express').Router();
const validateProdcut = require('../middleware/validateProduct');
const productController = require('../controllers/productController');

router.post('/',validateProdcut,productController.createProduct);
router.get('/',productController.getAllProducts);
router.get('/:id',productController.getProductById);
router.put('/:id',validateProdcut,productController.updateProduct);
router.delete('/:id',productController.deleteProduct);
console.log("validate:", validateProdcut);
console.log("controller:", productController);
console.log("create:", productController.createProduct);

module.exports = router;