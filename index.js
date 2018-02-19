var rv = require('russell-view')

module.exports = function rImage (state) {
  return rv`<img 
    srcset="${state.src}-1920.jpg 1920w,
            ${state.src}-960.jpg 960w,
            ${state.src}-480.jpg 480w,
            ${state.src}-240.jpg 240w"
    sizes="(max-width: 960px) 100vw,
           (min-width: 960px) 960px"
    src="${state.src}" alt="${state.alt}"
  >`
}
