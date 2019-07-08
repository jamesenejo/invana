import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => res.jsend.success('test'));

export default router;