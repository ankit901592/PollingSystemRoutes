# File Upload API

This API allows users to upload, view, and delete CSV files. It is built using Express and MongoDB with Mongoose for managing file uploads.

## Features

- **Upload Files**: Users can upload files using the `/fileUpload` endpoint.
- **View Files**: Users can view details of a specific uploaded file.
- **Delete Files**: Users can delete uploaded files.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

   Navigate to the project directory:

bash
Copy code
cd <project-directory>
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
API Endpoints
POST /api/fileUpload

Description: Uploads a file.
Form Data:
fileUrl: The file to be uploaded.
Response: Redirects to the homepage upon success.
GET /api/

Description: Displays the homepage with a list of uploaded files.
Response: Renders the homepage with the uploaded file list.
GET /api/view/:id

Description: Views details of a specific uploaded file by ID.
Response: Renders the file details page.
GET /api/delete/:id

Description: Deletes a specific uploaded file by ID.
Response: Redirects to the homepage upon successful deletion.
Middleware
Multer: Used for handling multipart/form-data, which is primarily used for uploading files.
Usage
To use the API, send requests to the specified endpoints. For file uploads, ensure you send the request with the appropriate fileUrl form data.
