# Getting Started with React Realtime Example App

This project contains two folders `./client` and `./server`.

- The server binds to port `4000`, with CORS enabled on the origin which is used by the React app development server (localhost:3000)
- CORS config is supplied to the server on initialization:
  ```JS
  const s = new Server({
    cors: {
      // origin of react app
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
  ```
- The React app connects to the server via the Api module:
  ```JS
    import openSocket from 'socket.io-client';
    const socket = openSocket('http://localhost:4000');
  ```

## Run the server

Inside the project `./server` directory, run:

### `yarn start`

This will run the socket.io server which will bind to port `4000`.

## Run the client

Inside the project `./client` directory, run:

### `yarn start`

This will run the React app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

Check out: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Check out: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

Check out: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

Check out: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Check out: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
