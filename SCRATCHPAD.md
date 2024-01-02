# STILL NEEDED ...
- Search page 
  - Tweet/User toggle ...
  - Show results
    - Styling???
  - Axios request to server @ search(tweet/user)
    - GET/POST request??? (need to send input to req.body)

### UP NEXT ...
- Need to test through server to avoid CORS errors
- Search page tweet search works
- Search page user search does NOT work ... figure this out ...
  - Might be when theres a space??? 
- ## NEED TO HANDLE ERRORS ... server keeps breaking in testing ... 
<!-- 
      title: 'Invalid Request',
      detail: 'One or more parameters to your request was invalid.',
      type: 'https://api.twitter.com/2/problems/invalid-request'
 -->
___
- Test out Search functionality
- Test out Search styling
- Look up dotenv
  - make sure that frontend/backend works together in sync
- Review backend serving up frontend


## Extra Ideas ... 
- Make links hyperlinks/clickable
  - create function to parse through tweet_text, 
    - 1. Turn string into array
    - 2. Search for text with "http"
      - Yes?
        - make hyperlink (target = blank)
        - return normal text with link
      - No? 
        - return normal text
  - MAYBE... see if theres a way to detect if its an img tag??? or website?

- Error Handling
  - Handle 'Too many request' and other types ... 

- Clean code 
  - Add Modularity
  - DRY ... 
    - make functions re-usable
    - structure functions to:
      - Single Responsibility Principle (SRP)
      - Separation of concerns





### COLOR SCHEME
- #0A0F22 ... Main Background
- #f0f4f8 ... Main Text Color
- #56B2BB ... Highlight
  - Mainly based off 
    - https://images.ctfassets.net/h6goo9gw1hh6/3FQOGeVjnxzlsKQUlu1Bkg/cd3dfe65bc0b3a075d4f675ff9af44d1/Color-Scheme_Class-2.jpg?w=1600&h=700&q=70&fm=webp

- #1D2233
- #BAC7CC