const router = require('express').Router();
const validateProdcut = require('../middleware/validateProduct');
const productController = require('../controllers/productController');
const { protect } = require('../middleware/auth'); 

router.post('/',protect, validateProdcut,productController.createProduct);
router.get('/',productController.getAllProducts);
router.get('/:id',productController.getProductById);
router.put('/:id',validateProdcut,productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports = router;