const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            connectSrc: ["'self'", "https:"]
        }
    }
}));

app.use(compression());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true
}));

// Cache control for static assets
app.use('/styles.css', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    next();
});

app.use('/script.js', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    next();
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoints for future features
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Placeholder API for token data (replace with actual Pump.fun integration)
app.get('/api/token-data', (req, res) => {
    res.json({
        symbol: 'DEED',
        price: '$0.0023',
        change24h: '+24.7%',
        marketCap: '$847K',
        holders: 1247,
        lastUpdated: new Date().toISOString()
    });
});

// Placeholder API for community stats
app.get('/api/community-stats', (req, res) => {
    res.json({
        telegramMembers: 5247,
        twitterFollowers: 12300,
        discordMembers: 3456,
        lastUpdated: new Date().toISOString()
    });
});

// Handle client-side routing (for future SPA features)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: 'The requested resource was not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
🏡 DEED Token Website Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Server running on port ${PORT}
🌐 Environment: ${process.env.NODE_ENV || 'development'}
📅 Started: ${new Date().toISOString()}

From Memes to Mansions - Claim Your DEED! 🏠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

module.exports = app;
