import Vue from 'vue';
import Vuex from 'vuex';
import templete from '@/pages/templete/store';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        strict: process.env.NODE_ENV === 'development',
        modules: {
            templete
        }
    });
};
