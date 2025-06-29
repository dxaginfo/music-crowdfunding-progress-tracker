const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({status: 'OK', message: 'Crowdfunding Progress Tracker API running.'});
});

// Add endpoints for campaigns, pledges, users, milestones...

app.listen(4000, () => {
    console.log('Backend running on port 4000');
});
