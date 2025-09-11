  # 🎓 Graduate Admission Chance Predictor

A machine learning-powered web application that predicts your chances of admission to graduate programs based on academic profile parameters. Built with **HTML**, **CSS**, and **JavaScript**.
   
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-FF6F00?style=for-the-badge&logo=python&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---
  
## 📊 Features 

- **Academic Parameter Analysis** – Input your GRE, TOEFL, CGPA, and other academic metrics
- **Real-time Prediction** – Instant calculation of admission chances as you adjust inputs
- **Visual Feedback** – Color-coded results with probability bar visualization
- **Responsive Design** – Works on desktop, tablet, and mobile devices
- **Feature Importance** – Understand which factors impact your admission decisions

---

## 🎯 How It Works

The predictor uses a **weighted scoring algorithm** based on historical admission patterns to estimate your chances:

1. **Input Your Academic Details**:
   - GRE Scores (290–340)
   - TOEFL Scores (92–120)
   - University Rating (1–5)
   - Statement of Purpose Strength (1–5)
   - Letter of Recommendation Strength (1–5)
   - Undergraduate CGPA (6.8–9.92)
   - Research Experience (0 or 1)

2. **Get Instant Prediction**:
   - See your admission chance (0–100%)
   - Visual bar graph shows your probability
   - Color-coded result (e.g., red/yellow/green)

3. **Understand Feature Importance**:
   - CGPA contributes up to 30%
   - GRE Score contributes up to 25%
   - Other features weighted accordingly

---

## 🚀 Usage

1. **Open `index.html`** in your web browser.
2. **Adjust academic inputs** using sliders or manual entry.
3. **View real-time prediction** and visual feedback.
4. Use the result to analyze strengths and improvement areas.

---

### 📱 Mobile Usage

- Touch-friendly sliders and input controls
- Responsive design adapts to mobile and tablet devices
- Clean and simplified layout on small screens

---

## 🛠️ Installation (Local Setup)

To run this project locally:

### Clone the repository:
```bash
git clone https://github.com/your-username/graduate-admission-predictor.git
cd graduate-admission-predictor
```

### Run the app:

**Option 1: Using a local server (recommended)**

```bash
# Using Python 3.x
python -m http.server 8000
# Open browser at http://localhost:8000
```

**Option 2: Open directly**

- Simply double-click the `index.html` file

---

## 📁 Project Structure

```
graduate-admission-predictor/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Prediction logic and interactivity
└── README.md           # Project documentation
```

---

## 🌐 Browser Compatibility

| Browser         | Supported | Notes             |
|----------------|-----------|-------------------|
| Chrome          | ✅         | Full support       |
| Firefox         | ✅         | Full support       |
| Safari          | ✅         | Full support       |
| Edge            | ✅         | Full support       |
| Mobile Browsers | ✅         | Touch-friendly UI  |

---

## 🔧 Technologies Used

- **HTML5** – Page structure and markup
- **CSS3** – Styling, layout, responsive design
- **JavaScript** – Dynamic prediction and interactivity
- **Machine Learning Concepts** – Custom weighted algorithm

---

## 🎨 Customization

You can easily tweak this project:

### Update scoring weights:

In `script.js`:
```javascript
// Adjust weight for CGPA
const cgpaWeight = 0.30;
// Adjust weight for GRE
const greWeight = 0.25;
```

### Change visual theme:
Edit styles in `style.css` to match your design preference.

### Add/remove input parameters:
Update both `index.html` and `script.js` accordingly.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📝 TODO

- 🔄 Integrate actual ML model from Python backend
- 💾 Add local storage for saved predictions
- 📈 Add comparison feature against past data
- 📊 Show more detailed score breakdown
- 📤 Add social sharing for results

---

## 📊 Algorithm Details

The current prediction is based on this weighted scoring logic:

| Feature                | Weight |
|------------------------|--------|
| CGPA                   | 30%    |
| GRE Score              | 25%    |
| TOEFL Score            | 15%    |
| University Rating      | 10%    |
| Research Experience    | 10%    |
| SOP Strength           | 5%     |
| LOR Strength           | 5%     |

---

## 👨‍💻 Developer

**Naveen Kumar S**  
📧 Email: navee4147@gmail.com  
💻 GitHub: [Naveenr810953](https://github.com/Naveenr810953)

---

## 📞 Support

If you encounter any issues, feel free to open a GitHub [Issue](https://github.com/Naveenr810953/graduate-admission-predictor/issues).

---

## ⭐️ Show Your Support

If you found this project helpful, please give it a ⭐️ on GitHub!
