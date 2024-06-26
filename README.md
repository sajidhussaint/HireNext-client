# HireNext

HireNext is a web application designed to help users find job listings using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides features such as user registration and login, job search with various filters, job details viewing, job application submission, and saved job listings management.

## Features

- **User Registration and Login:** Users can create an account and log in to the application.
- **Job Search:** Users can search for job listings based on keywords, location, and other filters.
- **Job Details:** Detailed information about job listings, including job descriptions, requirements, and application instructions, is provided.
- **Job Application:** Users can apply for jobs directly through the application by submitting their resume and other required information.
- **Saved Jobs:** Users can save job listings for future reference.
- **User Dashboard:** Access to a personalized dashboard where users can manage their profile, saved jobs, and job applications.

## Technologies Used

### Front-end:
- React.js: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- HTML, CSS, and JavaScript: The core web technologies for building the user interface.
- Axios: A library for making HTTP requests to the server.

### Back-end:
- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing job listings, user information, and other data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.

### Authentication and Authorization:
- JSON Web Tokens (JWT): A standard for securely transmitting information between parties as a JSON object.

### Deployment:
- Netlify: A cloud platform for deploying and hosting web applications.
- MongoDB Atlas: A cloud-based database service for MongoDB.

## Getting Started

To run the MERN Stack Job Finder project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/sajidhussaint/HireNext-client.git`
2. Navigate to the project directory: `cd HireNext-client`
3. Install the dependencies:
   - Front-end: `cd client && npm install`
   - Back-end: `cd server && npm install`
4. Set up the environment variables:
   - Create a `.env` file in the server directory.
   - Add the following environment variables:
     - `MONGODB_URI`: The connection string for your MongoDB database.
     - `JWT_SECRET`: A secret key for generating JSON Web Tokens.
5. Start the development server:
   - Front-end: `cd client && npm start`
   - Back-end: `cd server && npm start`
6. Open your browser and navigate to [http://localhost:8800](http://localhost:8800) to access the application.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## Contact

For any inquiries or questions, please contact me at [sajidtmpm@gmail.com](mailto:sajidtmpm@gmail.com).
