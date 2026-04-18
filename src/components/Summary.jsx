export default function Summary({ testMode, testSize, currentWeek, questions, answers, onBackToHome }) {
    let correctCount = 0
    const totalCount = testMode ? testSize : 10

    // Calculate score
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].correct) {
            correctCount++
        }
    }

    const percentage = (correctCount / totalCount) * 100
    const testName = testMode
        ? testSize === 50
            ? '50 Question Test'
            : 'Full 120 Question Test'
        : `Week ${currentWeek}`

    const getPerformanceMessage = () => {
        if (percentage >= 90) return '🎉 Outstanding! You are a master!'
        if (percentage >= 80) return '🏆 Excellent work! Well done!'
        if (percentage >= 70) return '👍 Good job! Keep practicing!'
        if (percentage >= 60) return '💪 Good effort! A bit more practice needed'
        if (percentage >= 50) return '📚 Keep practicing!'
        return '🚀 Keep learning and try again!'
    }

    const getScoreColor = () => {
        if (percentage >= 90) return 'from-green-500 to-emerald-500'
        if (percentage >= 80) return 'from-blue-500 to-cyan-500'
        if (percentage >= 70) return 'from-purple-500 to-pink-500'
        if (percentage >= 60) return 'from-orange-500 to-yellow-500'
        return 'from-red-500 to-pink-500'
    }

    const getBgColor = () => {
        if (percentage >= 70) return 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
        if (percentage >= 60) return 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200'
        return 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
    }

    const getMedalEmoji = () => {
        if (percentage >= 90) return '🥇'
        if (percentage >= 80) return '🥈'
        if (percentage >= 70) return '🥉'
        return '📊'
    }

    return (
        <div className="space-y-6 animate-slideInUp">
            {/* Main Completion Header */}
            <div className="card text-center">
                <div className="text-6xl mb-4">{getMedalEmoji()}</div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                    {testMode ? '🎊 Test Completed!' : '✅ Quiz Completed!'}
                </h2>
                <p className="text-gray-600 text-lg">Let's see how you performed</p>
            </div>

            {/* Score Card */}
            <div className={`card border-4 border-b-8 ${getBgColor()}`}>
                <div className="text-center">
                    <p className="text-gray-700 text-lg font-semibold mb-3">{testName}</p>
                    <div className={`bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent text-7xl font-black mb-3`}>
                        {correctCount}/{totalCount}
                    </div>
                    <div className={`bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent text-5xl font-black`}>
                        {percentage.toFixed(0)}%
                    </div>
                </div>
            </div>

            {/* Performance Message */}
            <div className="card text-center bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
                <div className="text-5xl mb-3">✨</div>
                <p className="text-2xl font-bold text-gray-800">{getPerformanceMessage()}</p>
                <div className="mt-4 pt-4 border-t border-yellow-300">
                    <p className="text-gray-700">
                        You answered <span className="font-black text-blue-600 text-xl">{correctCount}</span> question
                        {correctCount !== 1 ? 's' : ''} correctly
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
                <div className="card text-center">
                    <div className="text-3xl mb-2">✓</div>
                    <p className="text-gray-700 font-bold text-lg text-green-600">{correctCount}</p>
                    <p className="text-gray-600 text-sm">Correct</p>
                </div>
                <div className="card text-center">
                    <div className="text-3xl mb-2">✗</div>
                    <p className="text-gray-700 font-bold text-lg text-red-600">{totalCount - correctCount}</p>
                    <p className="text-gray-600 text-sm">Incorrect</p>
                </div>
                <div className="card text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="text-gray-700 font-bold text-lg text-purple-600">{percentage.toFixed(0)}%</p>
                    <p className="text-gray-600 text-sm">Score</p>
                </div>
            </div>

            {/* Detailed Results */}
            <div className="card">
                <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span>📋</span> Question Review
                </h4>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {questions.map((question, index) => {
                        const userAnswer = answers[index]
                        const isCorrect = userAnswer === question.correct
                        return (
                            <div
                                key={index}
                                className={`p-4 rounded-xl border-l-4 transition-all ${isCorrect
                                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 hover:shadow-md'
                                    : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-500 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <span className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                        {isCorrect ? '✓' : '✗'}
                                    </span>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                                            Q{index + 1}: {question.question.substring(0, 60)}...
                                        </p>
                                        <p className={`text-xs md:text-sm mt-1 font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                            {isCorrect ? '✓ Correct!' : `Your answer: ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Action Button */}
            <div className="flex gap-4">
                <button
                    onClick={onBackToHome}
                    className="btn btn-primary flex-1 py-4 text-lg font-bold hover:shadow-2xl transform hover:-translate-y-1"
                >
                    🏠 Back to Home
                </button>
            </div>
        </div>
    )
}
