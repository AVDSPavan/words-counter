# words-counter

It is a simple web application to display the top N most frequently occurring words in a file which had to be fetched from a url. It is developed using React js in frontend, Node js in backend and Express framework for server. It is deployed to heroku and can accessed through the link given below.

http://words-counter9.herokuapp.com/


## Technologies used in this project:

1. React js
2. Node js
3. Express js
4. Bootstrap
5. HTML
6. CSS

### Frontend

It consists of an input text box and submuit button for taking the input which is the number of top repeated words to be fetched from the given file url. The given default file url is https://terriblytinytales.com/test.txt . 

When input is given and submit button is clicked, the frontend will fire a GET request to node js backend.

### Backend

In backend, request module is used to request the text file from given url and stored the contents of the fetched file as a string. Now, using regular expressions, some text formatting specifiers like nextline('\n'), extra spaces('\s'), tabs('\t') and special characters are removed.
The modified string is splitted into a array and stored each word frequency in a dictinary or Object({}).

As sorting on objects cannot be done, a nested array is used to sort the words based on their frequency.The resultant nested array got sliced upto the given input number from frontend. 

Finally, the backend returns the resulted array to the frontend. I did used conditional rendering in react js frontend. So, the table only visible when length of resulted array is not equal to zero.
The table has Rank, Word and count headers where Rank is ranking of words based on their frequency.

### Responsiveness

I had used bootstrap media queries in this project and so, the application is responsive in both mobile and computer screens :+1:.
