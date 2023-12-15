COLOR SCHEME
- #0A0F22 ... Main Background
- #f0f4f8 ... Main Text Color
- #56B2BB ... Highlight
  Mainly based off 
  - https://images.ctfassets.net/h6goo9gw1hh6/3FQOGeVjnxzlsKQUlu1Bkg/cd3dfe65bc0b3a075d4f675ff9af44d1/Color-Scheme_Class-2.jpg?w=1600&h=700&q=70&fm=webp

  
Look up GitHub branching:
- Code with mosh??? 

---

_______
-Finish Home Page layout
  -add mobile responsiveness


Tweets need to include
-text
-username
-image (or placeholder if non-existent)
-retweet count
-favorite (hearted) count


NEED TO MAKE A GET REQUEST TO GET RANDOM DATA FROM TOP 5 INFLUENTIAL TWITTER USERS ( FOR ME )
Maybe Also Add/Edit dotenv variable integration

- https://api.twitter.com/2/users/{ userid /tweets?exclude=replies,retweets


User IDs
Elon Musk -       44196397, elonmusk
Ali Abdaal -      30436279, AliAbdaal
Mr Beast -        2455740283, MrBeast
Tim Cook -        1636590253, tim_cook
Steve Wozniak -   22938914, stevewoz


NEED TO CREATE SHOWCASE REQUEST
https://api.twitter.com/2/users?expansions=pinned_tweet_id&user.fields=most_recent_tweet_id&ids=44196397,30436279,2455740283,1636590253,22938914

ALSO *** LOOK UP EXCLUDES (RETWEETS, REPLIES) ON RECENT TWEETS LOOKUP

from Most Recent Tweet, gather <retweet_count>, <like_count>, and <text>