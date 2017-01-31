import { tanok } from 'tanok';

import AppDispatcher from './dispatcher';
import Model from './model';

import App from './components/app';

import css from './style/index.styl';

const node = document.getElementById('app');

tanok(
    new Model(),
    (new AppDispatcher()).collect(),
    App,
    {
        container: node
    }
);
