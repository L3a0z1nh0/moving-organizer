# 📦 Moving Organizer

A complete system to organize your belongings during a move. Never lose track of your items again!

## 🌟 Key Features

### 🔍 **Automatic Search System**
* Type any item name in the search area
* Automatically shows: box label, category, and owner
* Works with partial searches (e.g., "TV" finds "Samsung 50' TV")

### 📋 **Complete Organization**
* **Automatic dropdowns** for Category and Owner
* **Standardized structure** with labels like "BOX-001"
* **Intuitive interface** to add new items

### 💾 **Data Persistence**
* Automatically saves your data locally
* Import/Export functionality (coming soon)
* Works offline after initial load

## 🚀 Live Demo

Visit the live application: [Moving Organizer](https://your-vercel-url.vercel.app)

## 📁 Project Structure

```
moving-organizer/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - Interactive functionality
- **Local Storage** - Data persistence
- **Responsive Design** - Works on all devices

## 🎯 How It Works

1. **Register your items** with standardized labels
2. **Use dropdowns** for category and owner
3. **Search any item** by typing its name
4. **See instantly** which box it's in!

## 📊 Google Sheets Implementation Guide

Want to use this in Google Sheets? Follow these steps:

### **Step 1**: Basic Structure
* Create headers: Item (A1), Label (B1), Category (C1), Owner (D1)

### **Step 2**: Create Dropdowns
* **Category (column C)**: Select C2:C1000 → Data → Data validation → List of items
* **Owner (column D)**: Select D2:D1000 → Data → Data validation → List of items

### **Step 3**: Search Area (columns F & G)
* F1: "Search Item:", G1: input cell
* F2: "Label:", F3: "Category:", F4: "Owner:"

### **Step 4**: Magic Formulas 🎯

```excel
G2: =IF(ISBLANK(G1),"",IFERROR(INDEX(B:B,MATCH(G1,A:A,0)),"Item not found"))
G3: =IF(ISBLANK(G1),"",IFERROR(INDEX(C:C,MATCH(G1,A:A,0)),"Item not found"))
G4: =IF(ISBLANK(G1),"",IFERROR(INDEX(D:D,MATCH(G1,A:A,0)),"Item not found"))
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/moving-organizer.git
   cd moving-organizer
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

## 💡 Pro Tips

* **Use sequential labels**: AA1, AA2, AA3...
* **Keep item names consistent** for easier searching
* **Share with family** for real-time collaboration
* **Backup regularly** using export function
* **Use descriptive categories** for better organization

## 📱 Responsive Design

The application works perfectly on:
- 🖥️ Desktop computers
- 📱 Mobile phones
- 📟 Tablets
- 💻 Laptops

## 🎨 Features

- **Modern UI/UX** with smooth animations
- **Dark/Light theme support** (auto-detects system preference)
- **Keyboard shortcuts** (Ctrl + N to add new row)
- **Real-time search** with instant results
- **Auto-save** functionality
- **Export/Import** data (coming soon)

## 🧩 Available Categories

- 📺 Electronics
- 👕 Clothes  
- 📚 Books
- 🍳 Kitchen
- 🎨 Decoration
- 📄 Documents
- 🧸 Toys
- 🔧 Tools
- 🛋️ Furniture
- 📦 Others

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌟 Support

If this project helped you organize your move, please give it a ⭐ star!

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 🔮 Upcoming Features

- [ ] Export to PDF
- [ ] QR Code generation for boxes
- [ ] Photo attachments for items
- [ ] Multiple move projects
- [ ] Collaboration features
- [ ] Mobile app version

<div align="center">
  <strong>Made with ❤️ for stress-free moving</strong>
</div>
