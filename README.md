# stillworksthere

Tells you if someone still has a company listed as the most recent one on LinkedIn. 

## Install

```
$ npm install stillworksthere
```

## Usage

It takes 4 arguments. Your LinkedIn username, Linkedin password, the link to that person's LinkedIn page (`http://www.linkedin.com/in/<personsPage>/`) and the name of the old company.


```js
const stillworksthere = require("stillworksthere");

stillworksthere(username, password, linkedinPageOfPerson, nameOfOldCompany);
//=> 'Still at <nameOfOldCompany>

```

## What's happening?

nightmarejs goes to LinkedIn and logs in with the provided credential, navigates to the given profile, and compares the most recent company name with the last argument provided to the function.