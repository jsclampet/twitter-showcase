# Twitter Showcase

*An app that allows you to search for Twitter Users and Tweets. 
Written in React/TS on the Frontend and NodeJS/Express on the Backend.*

View it [here](https://twitter-showcase-1bin.onrender.com/home)

[![preview](app-preview.png)](https://twitter-showcase-1bin.onrender.com/home)


## Summary

This app allows you to view recent Tweets based on a specific user or text.

It is a fullstack app utilizing React/Typescript on the front-end, and NodeJS/Express on the back-end. When a user queries a validated input, the Front-end sends a GET request to the Back-end, which triggers a corresponding GET request to the Twitter API. Once the Twitter API sends a response, the back-end will check for errors, format the data and send it back to the Front-End, which in turn is displayed to the user. 

The Twitter API consisted of several teirs of access that was difficult to parse through intially. I had to thoroughly read through and review their API documentation in order to make sure I was authorized to make specific requests and get the information I needed.

I learned that deploying a fullstack app is very different from deploying a static website. Upon successful deployment I deepend my understanding of npm scripts, the build process and deploying from different environments. 

## Author
- John Clampet: FullStack Software Developer
- [LinkedIn](https://www.linkedin.com/in/john-clampet-264007122/)
