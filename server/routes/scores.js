import express from 'express';
import Score from '../models/Score.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST /api/scores — save a completed quiz (protected)
router.post('/', auth, async (req, res) => {
  const { score, total, category, difficulty } = req.body;
  try {
    const newScore = await Score.create({
      userId: req.user.userId,
      username: req.user.username,
      score,
      total,
      category,
      difficulty,
    });
    res.status(201).json(newScore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/scores/leaderboard — top 10 all-time (public)
router.get('/leaderboard', async (req, res) => {
  try {
    const scores = await Score.find()
      .sort({ score: -1 })
      .limit(10)
      .select('username score total category difficulty createdAt');
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/scores/me — current user's history (protected)
router.get('/me', auth, async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.user.userId })
      .sort({ createdAt: -1 });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;