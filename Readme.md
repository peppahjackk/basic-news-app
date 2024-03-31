# UI Engineer Technical Assessment

By: Ted Moke, [iam@tedmoke.com](mailto:iam@tedmoke.com)

## The Two Challenges

1. To run the code for challenges 1 and 2, open the root of this repo in you command line
2. Make sure you have node installed, if you don't see the website [https://nodejs.org/en/download](https://nodejs.org/en/download)
3. Run `node problem_1-matrixSum.js`
4. Run `node problem_2-findOptimalChange.js`

## A Basic News Application

The application will let you browse the top news headlines of the day sourced from a remote API. The main screen shows a list of cards describing each news article and a brief description. Each card also gives the user the ability to read more by clicking the read more button you can see the article in more detail and from there you can be linked to the original article.

On the main page these are also has the ability to search for specific topics in recent news.This will re query the news and not just filter the data.

The design of the api is a little weird you can't fetch or specific articles so I had to hold the article state in the context when navigating to a specific item the trade off here is that on refresh you lose that data since context is dropped so you are navigated back to the main page.

Giving more time I would enhance the state of storage to remember your search and remember the article.

1. Navigate to the root of the news app `cd newsApp`
2. To host the built app locally, you can use http-server.
3. Install http-server by running `npm install -g http-server`
4. Run `http-server dist`
5. Open a browser to [http://localhost:8080](http://localhost:8080)
