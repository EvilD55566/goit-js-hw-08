import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrentTime, 1000));
function onCurrentTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))

  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
