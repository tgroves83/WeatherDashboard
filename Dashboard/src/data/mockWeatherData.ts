function generateMockData() {
    const summaries = [
        'Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild',
        'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching',
    ];

    const today = new Date();

    return Array.from({ length: 5 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const temperatureC = Math.floor(Math.random() * 75) - 20;
        const temperatureF = 32 + Math.floor(temperatureC / 0.5556);

        return {
            date: date.toISOString().split('T')[0],
            temperatureC,
            temperatureF,
            summary: summaries[Math.floor(Math.random() * summaries.length)],
        };
    });

    
}

const mockWeatherData = generateMockData();

export default mockWeatherData;