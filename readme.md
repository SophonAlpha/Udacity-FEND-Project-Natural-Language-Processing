# Project Evaluate a News Article with Natural Language Processing 
*Udacity Front End Web Developer Nanodegree Program*

TODOs:

- deploy on AWS Beanstalk Node.js server

A simple web app to analyse the content of a news article with natural language processing. The 
user provides the URL to the article in the web form. The article content is analysed and the 
results are shown. The project demonstrates the use of build tools such as webpack for a front end
development.

<div style="text-align:center">
    <img src="doc/screenshot.png" width="400">
    *Sample screenshot*
</div>

With the webpack `mode: 'production'` setting the number and size of the application files was 
significantly reduced.

Number and size of files in development mode:

```shell
21/08/2021  13:41    <DIR>          .
21/08/2021  13:41    <DIR>          ..
21/08/2021  13:41            10,355 bundle.js
21/08/2021  13:41            12,586 bundle.js.map
21/08/2021  13:41               766 favicon.ico
21/08/2021  13:41             4,540 index.html
21/08/2021  13:41             3,588 main.css
21/08/2021  13:41             4,336 main.css.map
21/08/2021  13:41             3,606 service-worker.js
21/08/2021  13:41             2,175 service-worker.js.map
21/08/2021  13:41           118,642 workbox-f96f0f89.js
21/08/2021  13:41           195,196 workbox-f96f0f89.js.map
              10 File(s)        355,790 bytes
```

Number and size of files in production mode:

```shell
21/08/2021  13:43    <DIR>          .
21/08/2021  13:43    <DIR>          ..
21/08/2021  13:43             3,506 bundle.js
21/08/2021  13:43               766 favicon.ico
21/08/2021  13:43             3,637 index.html
21/08/2021  13:43             2,099 main.css
21/08/2021  13:43             1,202 service-worker.js
21/08/2021  13:43            13,938 workbox-2fdebd44.js
               6 File(s)         25,148 bytes
```

## Useful readings used during the project:

- [MeaningCloud](https://www.meaningcloud.com/)
- [Webpack Guidelines](https://webpack.js.org/guides/development/)
- [Requiring modules in Node.js: Everything you need to know](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
- [Jest Tutorial for Beginners: Getting Started With JavaScript Testing](https://www.valentinog.com/blog/jest/)
- [Testing with Node, Jest, and JSDOM](https://freecontent.manning.com/testing-with-node-jest-and-jsdom/)
- [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
- [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock#mocking-multiple-fetches-with-different-responses)
- [How To Mock Fetch in Jest | Leigh Halliday](https://www.leighhalliday.com/mock-fetch-jest)
- [How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
- [The only 3 steps you need to mock an API call in Jest](https://zaklaughton.dev/blog/the-only-3-steps-you-need-to-mock-an-api-call-in-jest/)
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [Generate a Service Worker with Webpack](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
