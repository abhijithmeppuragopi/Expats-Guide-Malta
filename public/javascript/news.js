

document.addEventListener('DOMContentLoaded', () => {
    // Example of dynamically loading news content
    const newsContent = document.getElementById('news-content');

    const newsArticles = [
        {
            title: 'New Work Permit Regulations',
            content: 'The government has announced new regulations for work permits.'
        },
        {
            title: 'Driving License Requirements Updated',
            content: 'Driving license requirements have been updated to include new safety measures.'
        },
        {
            title: 'Tax Filing Deadline Approaching',
            content: 'Reminder: The deadline for filing your taxes is approaching fast.'
        }
    ];

    newsArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'news-article';
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        newsContent.appendChild(articleElement);
    });
    
});
