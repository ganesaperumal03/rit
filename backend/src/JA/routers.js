const {Router} =require('express');
const controller = require('./controller');
const router = Router();

router.get('/',controller.getcoursedata);
router.post('/',controller.addcoursdata);
router.get('/university_mark',controller.get_university_mark);
router.post('/university_mark',controller.add_university_mark_data);
router.post('/erp_student_master',controller.add_erp_student_master);


module.exports = router;
