import Vue from 'vue';
import dateFormatter from '../core/formatters/date.formatter';
import ordinalFormatter from '../core/formatters/ordinal.formatter';
import currencyFormatter from '../core/formatters/currency.formatter';

Vue.filter('myDate', dateFormatter);
Vue.filter('ordinal', ordinalFormatter);
Vue.filter('currency', currencyFormatter);
