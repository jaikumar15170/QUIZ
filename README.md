# 🌲 Forests and Their Management - React Quiz

A modern React-based quiz application built with Vite and Tailwind CSS for the NPTEL "Forests and Their Management" course.

## Features

✨ **Modern Stack**
- React 18+ for component-based UI
- Vite for ultra-fast development and building
- Tailwind CSS for beautiful, responsive styling

📚 **Quiz Features**
- 12 weeks × 10 questions each (120 total)
- Multiple choice questions with instant feedback
- Detailed explanations for each answer
- Progress tracking and scoring system
- Test modes: 50 questions or all 120 questions
- Week-wise practice or random test selection

🎯 **User Experience**
- Clean, intuitive interface
- Real-time feedback on answers
- Progress bar for visual tracking
- Comprehensive performance summary
- Mobile-responsive design

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

```bash
# Navigate to the project directory
cd nptel-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at `http://localhost:5173`

## Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
nptel-react/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx      # Welcome and selection screen
│   │   ├── QuizContainer.jsx    # Main quiz interface
│   │   └── Summary.jsx      # Results and feedback
│   ├── data/
│   │   └── questions.js     # Quiz questions and answers
│   ├── styles/
│   │   └── index.css        # Tailwind CSS configuration
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies
```

## How to Use

1. **Select Week or Test Mode**: Choose a week (1-12) for week-wise practice or select a test mode
2. **Answer Questions**: Click on one of the four options (A, B, C, D)
3. **View Explanation**: After selecting an answer, you'll see the explanation and correct answer
4. **Navigate**: Use Previous/Next buttons to browse questions
5. **View Results**: Complete all questions to see your score and performance breakdown

## Technologies Used

- **React**: UI component library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformation
- **Javascript ES6+**: Modern JavaScript

## Scoring System

- **90-100%**: 🎉 Excellent work! Outstanding performance!
- **80-89%**: 🎉 Excellent work!
- **70-79%**: 👍 Good job! Keep it up!
- **60-69%**: 📚 Good effort! Keep practicing!
- **50-59%**: 📚 Keep practicing!
- **Below 50%**: 💪 Keep learning!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Course Information

This quiz app is based on the NPTEL course: **"Forests and Their Management"**

The course covers:
- Week 1: Forest values and definitions
- Week 2: Ecological concepts and silviculture
- Week 3: Soil types and weathering
- Week 4: Forest mensuration
- Week 5: Remote sensing and sampling
- Week 6: Conservation threats and fire management
- Week 7: Forest regeneration systems
- Week 8: Silvicultural systems
- Week 9: Timber management and marking
- Week 10: Seed collection and plantation
- Week 11: Species conservation and management
- Week 12: Advanced concepts and sustainability

## License

This project is created for educational purposes.
"# QUIZ" 
