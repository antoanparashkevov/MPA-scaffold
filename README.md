#REST API
This is a basic rest service scaffold which can be used as a Rest API for any SPA application. It is flexible to extend it a different ways

#Table of contents
- <a href="#project-structure">Project Structure</a>
- <a href="#tools">Tools</a>

# <p id="project-structure">Project Structure</p>
- Server
    - config - configuring the application
    - controllers - contains various application routes which at the end returns just a JSON format data when a client is trying to access the endpoints
    - models - stores database schemas (in this scaffold it is used only User schema for authorization process)
    - services - all error handling related logic, creating a session, verifying the session (for now only for authentication)
    - util - error parser for different kind of errors
# <p id="tools">Tools</p>

- <a href="https://nodejs.org/en/">Node</a>
- <a href="https://expressjs.com/">Express</a>
- <a href="https://www.npmjs.com/package/nodemon">nodemon</a>
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://jwt.io/">jwt</a>
- <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>
