/**
 * Custom scripting for Reveal.js
 */

/**
 * Construct a persistent footer.
 *
 * This is largely based on the reveal.js-titlebar package:
 * @link https://www.npmjs.com/package/reveal.js-titlebar
 */
const footer = document.createElement('footer');
footer.classList.add('presentation-footer');
footer.innerHTML = '@stevegrunwell@phpc.social - <a href="https://stevegrunwell.com/slides/write-some-docs">stevegrunwell.com/slides/write-some-docs</a>';
document.getElementsByClassName('reveal')[0].appendChild(footer);
