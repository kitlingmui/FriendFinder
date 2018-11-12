# FriendFinder

# npm command
# npm init -y
# npm i express
# npm i express body-parser


### Overview

"FriendFinder" application is basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

We will use Express to handle routing. 

### Folder Structure
```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - index.html
        - survey.html
        - result.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

1. Home Page is an introductory page to start the survey.
   
2. Survey Page should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

3. `htmlRoutes.js` file include 3 routes to each pages:

   * / to index.html
   * /survey to survey.html
   * /result to result.html 

4. `apiRoutes.js` file contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of friends
   * A POST routes `/api/friends`. This will be used to handle incoming survey results and add new friends into tables.

5. An array of objects is inside of `app/data/friends.js`. Here is an example:
        ```json
        {
          name:"Lady Gaga",
          photo:"https://en.wikipedia.org/wiki/Lady_Gaga#/media/File:TIFF_2018_Lady_Gaga_(1_of_1)-3_(cropped)_(edited).jpg",
          score:["1","1","1","1","1","1","1","1","1","1"]
        }
        ```

6. Determine the user's most compatible friend using the following as a guide:

   * Temporary we use "Return a random friend from table as best match" as my result logic
   * Will keep working on the original logic
