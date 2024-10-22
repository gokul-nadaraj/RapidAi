async function summarizeArticle() {
    const articleUrl = document.getElementById('articleUrl').value;
    const summaryElement = document.getElementById('summary');

    if (!articleUrl) {
        summaryElement.innerText = "Please enter a valid URL.";
        return;
    }

    // Clear the summary text before making the API request
    summaryElement.innerText = "Summarizing...";

    const apiUrl = 'https://article-summarizer.p.rapidapi.com/summarize';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'article-summarizer.p.rapidapi.com'
        },
        body: JSON.stringify({
            url: articleUrl
        })
    };

    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        
        if (data.summary) {
            summaryElement.innerText = data.summary;
        } else {
            summaryElement.innerText = "Could not summarize the article. Please check the URL or try again.";
        }
    } catch (error) {
        summaryElement.innerText = "An error occurred while summarizing the article.";
        console.error(error);
    }
}
