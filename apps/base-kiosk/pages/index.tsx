import { MainLayout } from '@deur/design-system';
import { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://127.0.0.1:4001');

// random select between 2 rooms

export default function Web() {
  // useEffect(() => {
  //   console.log('READY TO CONNECT');
  //   socket.on('connect', () => {
  //     console.log('connect');
  //     socket.emit('join-room', socketRoom);
  //   });

  //   socket.on('message', function (data) {
  //     console.log('Incoming message:', data);
  //   });
  //   socket.on('time', (latency) => {
  //     console.log('time', latency);
  //   });
  //   socket.on('disconnect', () => {
  //     console.log('disconnect');
  //   });

  //   socketRoom.split('/').forEach((room) => {
  //     socket.on(room, (data) => {
  //       console.log('room', room, data);
  //     });
  //   });

  //   setInterval(() => {
  //     socket.emit('bar');
  //   }, 4000);

  //   return () => {
  //     socket.off('connect');
  //     socket.off('disconnect');
  //     socket.off('pong');
  //   };
  // }, []);

  return (
    <MainLayout
      bgColor="bg-dark"
      headerMainText="Welcome to Location"
      headerSubText="Initial Device Setup for Kiosk Mode"
      body={
        <div className="text-light">
          {/* {typeof window === 'undefined' && isConnected ? 'connected' : 'disconnected'} */}
          <h1>welcome</h1>
          {/* <button onClick={sendPing}>Send ping</button> */}
        </div>
      }
    />
  );
}
