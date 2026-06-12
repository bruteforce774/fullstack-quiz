import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const { amount = 10, category, difficulty } = req.query;

  const params = new URLSearchParams({ amount, type: 'multiple' });
  if (category) params.append('category', category);
  if (difficulty) params.append('difficulty', difficulty);

  try {
    const response = await fetch(`https://opentdb.com/api.php?${params}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

export default router;