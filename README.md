# Over New Tab

A **Firefox extension** that replaces the default new tab.  
Features a **custom background editor**, **themes**, **quick links**, and live **weather** powered by [weatherapi.com](https://www.weatherapi.com/).

---

## 🚀 Getting Started

### 1. Install Node.js

Install the latest [Node.js](https://nodejs.org/) (LTS version recommended).

### 2. Install Yarn

```bash
npm install -g yarn
```

### 3. Clone the repository and install dependencies

```
git clone git@github.com:lordralinc/over-new-tab.git
cd over-new-tab
yarn install
```

### 4. Set up environment variables (optional)

Create a `.env` file in the root directory and add your Weather API key:

```env
VITE_WEATHER_API_KEY=your_api_key_from_weatherapi
```

You can get a free API key at [weatherapi.com](https://weatherapi.com).

### 5. Start the development server

```bash
yarn
yarn dev
```

### 6. Build the extension

```bash
yarn build
```

After build:

- `dist/over_new_tab.zip` — the packaged Firefox extension
- `dist/sources.zip` — filtered source code archive (excludes node_modules, .git, etc.)

## 🧩 Features

- 🎨 Background Editor — upload your own image or pick a color
- 🌙 Themes — toggle between modes
- 🔗 Quick Links — customizable shortcuts
- Weather Widget — shows current weather using your IP
