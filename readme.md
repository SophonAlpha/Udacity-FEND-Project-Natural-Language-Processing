# Project Evaluate a News Article with Natural Language Processing 
*Udacity Front End Web Developer Nanodegree Program*

TODOs:

- design HTML UI
- use SASS styles
- adjust webpack configuration to transform SASS to CSS
- set up babel module
- create production webpack config
- use service workers for offline work
- minify for production deployment
- deploy on AWS Beanstalk Node.js server

A simple web app to analyse the content of a news article with natural language processing. The 
user provides the URL to the article in the web form. The article content is analysed and the 
results are shown.

![Sample screen shot](doc/screenshot.png)
*Sample screen shot*

The project demonstrates the use of build tools such as webpack for a front end development.

To run the project install the following Node packages:

Sample article URLs:
  https://www.bbc.com/news/world-asia-58186002
  https://www.theonion.com/toddler-cites-freedom-of-choice-in-refusal-to-use-potty-1847466497




```
npm init -y
npm install webpack webpack-cli --save-dev
```


Todos:

- add Babel
- create webpack config for dev and production
- setup webpack dev server
- add SASS processor

Sources used during the project:

- [Jest Tutorial for Beginners: Getting Started With JavaScript Testing](https://www.valentinog.com/blog/jest/)
- [Testing with Node, Jest, and JSDOM](https://freecontent.manning.com/testing-with-node-jest-and-jsdom/)
- [How To Mock Fetch in Jest | Leigh Halliday](https://www.leighhalliday.com/mock-fetch-jest)
- [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock#mocking-multiple-fetches-with-different-responses)
- [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)


Useful links:

- webpack guidelines:
  https://webpack.js.org/guides/development/
- MeaningCloud
  https://www.meaningcloud.com/
- Authoring Libraries
  How to work with the output.library.name and output.library.type parameters.
  https://webpack.js.org/guides/author-libraries/#authoring-a-library