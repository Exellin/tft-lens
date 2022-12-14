/* @refresh reload */
import { render } from 'solid-js/web';

import '../index.css';
import Config from './Config';

render(() => <Config />, document.getElementById('root') as HTMLElement);
