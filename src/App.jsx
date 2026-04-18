import { useState } from 'react'
import quizData from './data/questions'
import Welcome from './components/Welcome'
import QuizContainer from './components/QuizContainer'
import Summary from './components/Summary'

export default function App() {
    const [currentWeek, setCurrentWeek] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [testMode, setTestMode] = useState(false)
    const [testSize, setTestSize] = useState(0)
    const [randomQuestions, setRandomQuestions] = useState([])
    const [testAnswers, setTestAnswers] = useState({})
    const [weekAnswers, setWeekAnswers] = useState({})
    const [showSummary, setShowSummary] = useState(false)

    // Fisher-Yates shuffle
    const shuffleArray = (array) => {
        const shuffled = [...array]
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
    }

    // Generate random questions for test mode
    const generateRandomQuestions = (count) => {
        const allQuestions = []
        for (let week = 1; week <= 12; week++) {
            quizData[week].forEach((question, index) => {
                allQuestions.push({
                    ...question,
                    week,
                    originalIndex: index
                })
            })
        }
        const shuffled = shuffleArray(allQuestions)
        return shuffled.slice(0, Math.min(count, allQuestions.length))
    }

    // Start test mode
    const handleStartTest = (count) => {
        setTestMode(true)
        setTestSize(count)
        setCurrentQuestion(0)
        setRandomQuestions(generateRandomQuestions(count))
        setTestAnswers({})
        setShowSummary(false)
    }

    // Select week
    const handleSelectWeek = (week) => {
        setTestMode(false)
        setCurrentWeek(week)
        setCurrentQuestion(0)
        setWeekAnswers(prev => ({
            ...prev,
            [week]: prev[week] || {}
        }))
        setShowSummary(false)
    }

    // Answer question
    const handleAnswerQuestion = (index) => {
        if (testMode) {
            setTestAnswers(prev => ({ ...prev, [currentQuestion]: index }))
        } else {
            setWeekAnswers(prev => ({
                ...prev,
                [currentWeek]: { ...prev[currentWeek], [currentQuestion]: index }
            }))
        }
    }

    // Next question
    const handleNextQuestion = () => {
        const total = testMode ? testSize : 10
        if (currentQuestion < total - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            setShowSummary(true)
        }
    }

    // Previous question
    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1)
        }
    }

    // Back to home
    const handleBackToHome = () => {
        setCurrentWeek(null)
        setCurrentQuestion(0)
        setTestMode(false)
        setTestSize(0)
        setRandomQuestions([])
        setTestAnswers({})
        setShowSummary(false)
    }

    // Get current questions
    const getQuestions = () => {
        if (testMode) return randomQuestions
        return currentWeek ? quizData[currentWeek] : []
    }

    // Get current answers
    const getCurrentAnswers = () => {
        if (testMode) return testAnswers
        return currentWeek ? (weekAnswers[currentWeek] || {}) : {}
    }

    return (
        <div className="min-h-screen">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 opacity-90"></div>
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Header */}
            <header className="glass-effect shadow-2xl sticky top-0 z-50 mb-8">
                <div className="container mx-auto px-4 py-6 max-w-5xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="text-4xl animate-bounce">🎯</div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">Quiz Master</h1>
                                <p className="text-white/80 text-sm md:text-base">Master the Concepts</p>
                            </div>
                        </div>
                        {(currentWeek || testMode) && (
                            <button
                                onClick={handleBackToHome}
                                className="btn btn-secondary text-sm md:text-base"
                            >
                                ← Home
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 pb-12 max-w-4xl">
                {!currentWeek && !testMode ? (
                    <Welcome
                        onSelectWeek={handleSelectWeek}
                        onStartTest={handleStartTest}
                    />
                ) : showSummary ? (
                    <Summary
                        testMode={testMode}
                        testSize={testSize}
                        currentWeek={currentWeek}
                        questions={getQuestions()}
                        answers={getCurrentAnswers()}
                        onBackToHome={handleBackToHome}
                    />
                ) : (
                    <QuizContainer
                        testMode={testMode}
                        currentQuestion={currentQuestion}
                        totalQuestions={testMode ? testSize : 10}
                        currentWeek={currentWeek}
                        questions={getQuestions()}
                        answers={getCurrentAnswers()}
                        onAnswerQuestion={handleAnswerQuestion}
                        onNextQuestion={handleNextQuestion}
                        onPrevQuestion={handlePrevQuestion}
                        onBackToHome={handleBackToHome}
                    />
                )}
            </div>
        </div>
    )
}
