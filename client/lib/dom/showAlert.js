import { addClass, removeClass } from './css.js';
import { isString } from '../utils/type.js';
import { getNode } from './getNode.js';

/**
 *
 * @param {HTMLElement | String} node
 * @param {String} message
 * @param {Number} timeout
 * @return {void}
 */

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNode(node);

  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
