import { Server } from 'socket.io';

export function initSocket(server: any) {
  const io = new Server(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', socket => {
    console.log('Player connected:', socket.id);

    socket.on('move', data => {
      socket.broadcast.emit('player-move', data);
    });

    socket.on('disconnect', () => {
      console.log('Player disconnected:', socket.id);
    });
  });
}