/* @refresh reload */
import { render } from 'solid-js/web';

import '../index.css';
import VideoOverlay from './VideoOverlay';

render(() => <VideoOverlay />, document.getElementById('root') as HTMLElement);
