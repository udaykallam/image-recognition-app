# Image Recognition App

This application allows users to upload images and utilizes AWS Rekognition to analyze and return labels describing the content of the images.

## Features

- **Image Upload:** Users can upload images through a web interface.
- **Image Analysis:** Uploaded images are analyzed using AWS Rekognition to detect labels.
- **Results Display:** The detected labels are displayed to the user in a user-friendly manner.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [AWS Account](https://aws.amazon.com/) with access to AWS Rekognition

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/udaykallam/image-recognition-app.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd image-recognition-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Configure AWS Credentials:**

   Create a `.env` file in the root directory and add your AWS credentials:

   ```env
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   AWS_REGION=ap-southeast-1
   ```

   **Important:** Ensure that the `.env` file is **not** committed to version control. Add `.env` to your `.gitignore` file:

   ```gitignore
   .env
   ```

5. **Start the Application:**

   ```bash
   npm start
   ```

6. **Access the Application:**

   Open your browser and navigate to `http://localhost:5000` to use the app.

## Project Structure

- `app.js`: Main application file containing the server setup and routes.
- `views/`: Directory containing EJS templates for rendering the frontend.
- `uploads/`: Directory where uploaded images are temporarily stored.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Records the exact version of installed dependencies.

## Security Considerations

- **AWS Credentials:** Never hardcode AWS credentials in your source code. Use environment variables or AWS IAM roles.
- **.env File:** Ensure that the `.env` file is added to `.gitignore` to prevent accidental exposure of sensitive information.
- **Git History:** If credentials were ever committed, remove them from the Git history and rotate the credentials immediately.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [AWS SDK](https://aws.amazon.com/sdk-for-node-js/): AWS SDK for JavaScript.
- [Multer](https://github.com/expressjs/multer): Middleware for handling `multipart/form-data`, primarily used for file uploads.
- [Body-Parser](https://github.com/expressjs/body-parser): Middleware for parsing incoming request bodies.
- [Dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a `.env` file.
- [EJS](https://ejs.co/): Embedded JavaScript templating.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note:** This `README.md` provides an overview of the project, setup instructions, and important security considerations. Ensure that all sensitive information, such as AWS credentials, is handled securely and not exposed in the codebase.
