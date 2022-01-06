import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

const Api = {
  subscribeToTimer : (callBack) => {
    socket.on('timer', (timestamp) => callBack(timestamp));
    socket.emit('subscribeToTimer', 1000);
  }
}

export default Api;
