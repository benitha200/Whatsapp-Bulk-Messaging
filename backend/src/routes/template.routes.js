import { Router } from 'express';
import { 
  createTemplate, getTemplate, updateTemplate, deleteTemplate, 
  getUserTemplates, searchTemplates 
} from '../controllers/template.controller.js';
import { protect, restrictTo } from '../middlewares/auth.middleware.js';
import { logActivity } from '../middlewares/activity.middleware.js';

const router = Router();

router.use(protect);

// Notice these routes no longer need the /templates part since that's in the app.js mount
router.route('/')
  .post(logActivity('Create template'), createTemplate)
  .get(logActivity('View all templates'), getUserTemplates);

router.get('/search', logActivity('Search templates'), searchTemplates);

router.route('/:id')
  .get(logActivity('View template'), getTemplate)
  .patch(logActivity('Update template'), updateTemplate)
  .delete(logActivity('Delete template'), deleteTemplate);

export default router;