# 🏡 DEED Token Website

**From Memes to Mansions: Claim Your DEED**

DEED ($DEED) is the first meme coin that turns Pump.fun creator rewards into real estate. This repository contains the official website for the DEED token project.

## 🌟 Features

- **Modern Responsive Design**: Beautiful, mobile-first design with smooth animations
- **Interactive Elements**: Dynamic charts, counters, and engaging user interactions
- **Performance Optimized**: Fast loading with optimized assets and caching
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Railway Deployment Ready**: Configured for easy deployment on Railway platform

## 🚀 Live Demo

Visit the live website: [deed.homes](https://deed.homes)

## 📁 Project Structure

```
Deed-Homes/
├── index.html          # Main HTML file with all sections
├── styles.css          # Modern CSS with animations and responsive design
├── script.js           # Interactive JavaScript functionality
├── server.js           # Express.js server for Railway deployment
├── package.json        # Node.js dependencies and scripts
├── railway.json        # Railway deployment configuration
├── Procfile           # Process configuration for deployment
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Properties, Grid, Flexbox), Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Deployment**: Railway, GitHub
- **Security**: Helmet.js, CORS, CSP
- **Performance**: Compression, Caching, Optimized Assets

## 🏗️ Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deed-homes.git
cd deed-homes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🚀 Deployment on Railway

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DEED Token website"
   git branch -M main
   git remote add origin https://github.com/yourusername/deed-homes.git
   git push -u origin main
   ```

2. **Connect to Railway**:
   - Visit [railway.app](https://railway.app)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `deed-homes` repository
   - Railway will automatically detect the Node.js project and deploy

3. **Custom Domain Setup**:
   - In Railway dashboard, go to your project
   - Click on "Settings" → "Domains"
   - Add your custom domain: `deed.homes`
   - Configure your DNS provider to point to Railway's provided URL

### Method 2: Railway CLI

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

### Environment Variables

Set these environment variables in Railway dashboard:

- `NODE_ENV`: `production`
- `PORT`: `3000` (Railway will override this automatically)

## 🔧 Configuration

### Domain Setup

1. **Purchase Domain**: Buy `deed.homes` from your preferred domain registrar
2. **DNS Configuration**: Point your domain to Railway:
   - Add a CNAME record: `www` → `your-project.railway.app`
   - Add an ALIAS/ANAME record: `@` → `your-project.railway.app`
3. **Railway Configuration**: Add custom domain in Railway dashboard

### SSL Certificate

Railway automatically provides SSL certificates for custom domains.

## 📊 Website Sections

1. **Hero Section**: Bold tagline, live chart, and call-to-action buttons
2. **How DEED Works**: 5-step process explanation with animations
3. **Roadmap**: Timeline showing project phases and milestones
4. **Transparency & Trust**: Public wallet tracking and documentation
5. **Community Hub**: Social links and community statistics
6. **Future Vision**: Long-term goals and DAO governance plans

## 🎨 Design Features

- **Color Scheme**: Dark theme with purple/blue gradients and gold accents
- **Typography**: Inter font family for modern, clean appearance
- **Animations**: Smooth CSS animations and JavaScript interactions
- **Responsive**: Mobile-first design with breakpoints for all devices
- **Performance**: Optimized images, lazy loading, and efficient animations

## 🔒 Security Features

- **Helmet.js**: Security headers and CSP
- **CORS**: Cross-origin resource sharing configuration
- **Input Validation**: Sanitized user inputs
- **Rate Limiting**: Protection against abuse
- **HTTPS**: Enforced secure connections

## 📈 Performance Optimizations

- **Compression**: Gzip compression for all assets
- **Caching**: Browser caching for static assets
- **Minification**: Optimized CSS and JavaScript
- **Lazy Loading**: Images and animations loaded on demand
- **CDN Ready**: Optimized for content delivery networks

## 🧪 Testing

Run basic health checks:
```bash
# Check if server starts correctly
npm start

# Test API endpoints
curl http://localhost:3000/api/health
curl http://localhost:3000/api/token-data
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**:
   ```bash
   # Kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node Version Issues**:
   ```bash
   # Use Node Version Manager
   nvm use 18
   ```

3. **Railway Deployment Fails**:
   - Check Railway logs in dashboard
   - Ensure all dependencies are in `package.json`
   - Verify `start` script is correctly defined

### Debugging

Enable debug mode:
```bash
NODE_ENV=development npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [deed.homes](https://deed.homes)
- **Telegram**: [Join our community](https://t.me/deedtoken)
- **Twitter**: [@DeedToken](https://twitter.com/deedtoken)
- **Discord**: [DEED Community](https://discord.gg/deed)

## 📞 Support

For technical support or questions:
- Create an issue on GitHub
- Join our Telegram community
- Email: support@deed.homes

---

**Built with ❤️ by the DEED Token Team**

*From memes to mansions, claim your DEED in the future of real estate! 🏠*
