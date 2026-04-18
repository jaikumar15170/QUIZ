export default function Welcome({ onSelectWeek, onStartTest }) {
    const weeks = Array.from({ length: 12 }, (_, i) => i + 1)

    return (
        <div className="space-y-6 animate-fadeIn">
            {/* Welcome Section */}
            <div className="card text-center">
                <div className="mb-6">
                    <div className="text-6xl mb-4">📚</div>
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Welcome to Quiz Master
                    </h2>
                    <p className="text-gray-700 mb-3 text-lg font-medium">
                        Challenge yourself with our dynamic quiz platform
                    </p>
                    <p className="text-gray-600">
                        Select a week to practice or take a complete test mode with questions shuffled from all weeks.
                    </p>
                </div>
                <div className="flex gap-2 justify-center flex-wrap mt-6">
                    <span className="badge bg-blue-100 text-blue-700">📖 Learn</span>
                    <span className="badge bg-green-100 text-green-700">✅ Practice</span>
                    <span className="badge bg-purple-100 text-purple-700">🏆 Master</span>
                </div>
            </div>

            {/* Week Selection */}
            <div className="card">
                <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">📚</div>
                    <h3 className="text-3xl font-bold text-gray-800">Select Week</h3>
                </div>
                <p className="text-gray-600 mb-6">Choose a specific week to practice (10 questions per week)</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {weeks.map(week => (
                        <button
                            key={week}
                            onClick={() => onSelectWeek(week)}
                            className="btn btn-secondary text-sm font-bold py-3 hover:shadow-xl hover:scale-110 duration-200 relative overflow-hidden group"
                        >
                            <span className="relative z-10">W{week}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">💡 Each week contains 10 carefully selected questions from the course material</p>
                </div>
            </div>

            {/* Test Options */}
            <div className="card">
                <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">🎯</div>
                    <h3 className="text-3xl font-bold text-gray-800">Test Modes</h3>
                </div>
                <p className="text-gray-600 mb-6">Take a comprehensive test with randomly shuffled questions from all weeks</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => onStartTest(50)}
                        className="card border-2 border-purple-200 hover:border-purple-500 p-6 text-center transform hover:scale-105 transition-all duration-300 group"
                    >
                        <div className="text-5xl mb-3 group-hover:animate-bounce">📝</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Quick Test</h4>
                        <p className="text-gray-600 mb-4">50 Random Questions</p>
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="badge bg-purple-100 text-purple-700">Medium</span>
                            <span className="badge bg-orange-100 text-orange-700">~15 min</span>
                        </div>
                        <div className="btn btn-primary w-full py-2 text-center">Start →</div>
                    </button>

                    <button
                        onClick={() => onStartTest(120)}
                        className="card border-2 border-pink-200 hover:border-pink-500 p-6 text-center transform hover:scale-105 transition-all duration-300 group"
                    >
                        <div className="text-5xl mb-3 group-hover:animate-bounce">🏆</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Final Test</h4>
                        <p className="text-gray-600 mb-4">All 120 Questions</p>
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="badge bg-pink-100 text-pink-700">Hard</span>
                            <span className="badge bg-red-100 text-red-700">~40 min</span>
                        </div>
                        <div className="btn btn-primary w-full py-2 text-center">Start →</div>
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card text-center">
                    <div className="text-4xl mb-3">💡</div>
                    <h4 className="font-bold text-gray-800 mb-2">Instant Feedback</h4>
                    <p className="text-sm text-gray-600">Get detailed explanations for every question</p>
                </div>
                <div className="card text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <h4 className="font-bold text-gray-800 mb-2">Track Progress</h4>
                    <p className="text-sm text-gray-600">See your performance and improvement over time</p>
                </div>
                <div className="card text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <h4 className="font-bold text-gray-800 mb-2">Master Skills</h4>
                    <p className="text-sm text-gray-600">Learn from mistakes and strengthen weak areas</p>
                </div>
            </div>
        </div>
    )
}
