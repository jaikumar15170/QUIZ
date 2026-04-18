import { useState } from 'react'

export default function QuizContainer({
    testMode,
    currentQuestion,
    totalQuestions,
    currentWeek,
    questions,
    answers,
    onAnswerQuestion,
    onNextQuestion,
    onPrevQuestion,
    onBackToHome
}) {
    const [showExplanation, setShowExplanation] = useState(false)

    if (!questions || questions.length === 0) return null

    const question = questions[currentQuestion]
    const userAnswer = answers[currentQuestion]
    const isAnswered = userAnswer !== undefined
    const isCorrect = isAnswered && userAnswer === question.correct

    const handleSelectOption = (index) => {
        onAnswerQuestion(index)
        setShowExplanation(true)
    }

    const handleContinue = () => {
        setShowExplanation(false)
        onNextQuestion()
    }

    const progress = ((currentQuestion + 1) / totalQuestions) * 100

    if (showExplanation && isAnswered) {
        return (
            <div className="card animate-slideInUp">
                {/* Result Badge */}
                <div className="mb-6">
                    <div className={`text-center p-8 rounded-2xl mb-6 transition-all duration-500 ${isCorrect
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 ring-4 ring-green-300'
                            : 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-500 ring-4 ring-red-300'
                        }`}>
                        <p className={`text-4xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            {isCorrect ? '✨ Correct!' : '⚠️ Not Quite'}
                        </p>
                        <p className={`text-lg mt-2 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? 'Great job! Keep it up!' : 'Learn from this and try again!'}
                        </p>
                    </div>

                    {/* Correct Answer */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">✓</span> Correct Answer:
                        </h3>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-xl shadow-md">
                            <p className="text-gray-800 text-lg">
                                <strong className="text-green-700">{String.fromCharCode(97 + question.correct)}.</strong> {question.options[question.correct]}
                            </p>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">💡</span> Explanation:
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-xl shadow-md">
                            <p className="text-gray-700 leading-relaxed text-base">{question.explanation}</p>
                        </div>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="flex gap-4">
                    {currentQuestion < totalQuestions - 1 && (
                        <button
                            onClick={handleContinue}
                            className="btn btn-primary flex-1 py-3 text-lg"
                        >
                            Next Question →
                        </button>
                    )}
                    {currentQuestion === totalQuestions - 1 && (
                        <button
                            onClick={handleContinue}
                            className="btn btn-success flex-1 py-3 text-lg"
                        >
                            See Results 🎉
                        </button>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="card animate-slideInDown">
            {/* Progress Info */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-white/20">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span className="text-lg font-semibold text-gray-700">
                        Question {currentQuestion + 1} of {totalQuestions}
                    </span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {Math.round(progress)}% Complete
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            {/* Question */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">{question.question}</h2>
            </div>

            {/* Options */}
            <div className="mb-8 space-y-3">
                {question.options.map((option, index) => {
                    const isSelected = userAnswer === index
                    const isCorrectOption = index === question.correct
                    let optionClass = 'option'

                    if (isAnswered) {
                        optionClass += ' disabled'
                        if (isSelected) {
                            optionClass += isCorrect ? ' correct' : ' incorrect'
                        } else if (isCorrectOption) {
                            optionClass += ' correct'
                        }
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => !isAnswered && handleSelectOption(index)}
                            className={optionClass}
                        >
                            <span className="font-bold text-lg mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                {String.fromCharCode(97 + index)}
                            </span>
                            <span className="flex-1 text-base md:text-lg">{option}</span>
                            {isAnswered && isSelected && (
                                <span className="text-xl">{isCorrect ? '✓' : '✗'}</span>
                            )}
                            {isAnswered && !isSelected && isCorrectOption && (
                                <span className="text-xl">✓</span>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 flex-col md:flex-row">
                <button
                    onClick={onPrevQuestion}
                    disabled={currentQuestion === 0}
                    className="btn btn-secondary flex-1 py-3 font-bold disabled:opacity-30"
                >
                    ← Previous
                </button>
                <button
                    onClick={onNextQuestion}
                    disabled={currentQuestion === totalQuestions - 1 || !isAnswered}
                    className="btn btn-primary flex-1 py-3 font-bold disabled:opacity-30"
                >
                    Next →
                </button>
                <button
                    onClick={onBackToHome}
                    className="btn btn-secondary py-3 px-6 font-bold"
                >
                    🏠 Home
                </button>
            </div>
        </div>
    )
}
