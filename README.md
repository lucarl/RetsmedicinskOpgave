# RetsmedicinskOpgave

This project consists of two small applications: a web service and a consumer application. The web service returns data in JSON format, and the consumer application (built using React) can call the web service, retrieve data, and display it in a table.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To run this project, you will need the following installed:

* Node.js
* Python 3.x

### Installing
1. Clone the repository to your local machine.

`git clone https://github.com/lucarl/RetsmedicinskOpgave.git`

2. Navigate to the root directory of the project and install the dependencies for the consumer application.

`cd consumer`

`npm install`

3. Navigate to the root directory of the project and install the dependencies for the web service.

`cd flask-server`

`pip install -r requirements.txt`

### Running the Applications
1. To run the consumer application, navigate to the root directory of the project and run the following command:

`cd consumer`

`npm start`

2. To run the web service, navigate to the root directory of the project and run the following command:

`cd flask-server`

`python server.py`

# Built with 
* React - JavaScript library for building user interfaces
* Flask - Web framework for Python

# Authors
* Carl Lundborg


