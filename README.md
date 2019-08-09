# MentorAPI
A web application that allows one to quickly get a mentor and Make Sessions with the mentor

[![Build Status](https://travis-ci.org/j0flintking02/autoMart_api.svg?branch=develop)](https://travis-ci.org/StuartDambi/mentor_api)
[![Coverage Status](https://coveralls.io/repos/github/StuartDambi/autoMart_api/badge.svg?branch=develop)](https://coveralls.io/github/StuartDambi/mentor_api?branch=develop)

**View App:** [AutoMart](https://mentor1996.herokuapp.com/)


## Features

### Users
- Signup and Login
- User can view Mentors
- View specific Mentor
- Make a session with a mentor
#### Mentor
- Accept a session request
- Decline a Session request
  
#### Mentee
  - Make a session request
  - View a Specific Mentor
  - View past sessions

### Admin

- Admin can change user to Mentor
- Admin can delete sessions flagged Innappropriate

## Installation

Clone repo to your local machine:

```console
git clone https://github.com/StuartDambi/mentor_api.git
```

**Install dependencies and run locally**<br/>

Then run:

```npm
npm init
npm install
```

Create .env with your own enviroment variables.

Now start the server:

```npm
npm run prestart
npm start
```

## Testing

To run tests:

```npm
npm test
```

## API

API is deployed at [here](https://Mentor1996.herokuapp.com/) on heroku.

### API Routes

<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>POST</td>
		<td>[ users ] /api/v1/auth/signup</td> 
		<td>Create user account</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>[ users ] /api/v1/auth/signin</td> 
		<td>Sign in to user account</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>[ users ] /api/v1/users/:id</td> 
		<td>Change user to Mentor </td>
	</tr>
	<tr>
		<td>GET</td>
		<td>[ users ] /api/v1/users</td> 
		<td>View All Users</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>[ Users ] /api/v1/mentors</td> 
		<td>View All Mentors</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>[ users ] /api/v1/mentors/:id</td> 
		<td>View a specific Mentor</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>[ users ] /api/v1/</td> 
		<td>Make a session Request</td>
	</tr>
    <tr>
		<td>PUT</td>
		<td>[ mentor ] /api/v1/</td> 
		<td>Accept session Request</td>
	</tr>
    <tr>
		<td>PUT</td>
		<td>[ mentor ] /api/v1/</td> 
		<td>Decline A session Request</td>
	</tr>
    <tr>
		<td>DELETE</td>
		<td>[ Admin ] /api/</td> 
		<td>Delete Sessions flagged Inappropriate</td>
	</tr>
</table>
