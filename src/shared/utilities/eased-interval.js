const isNumeric = function (candidate) {
  return !isNaN(parseFloat(candidate)) && isFinite(candidate);
};

const partial = function (callback) {
  const args = Array.prototype.slice.call(arguments, 1);

  return function () {
    callback.apply(this, args.concat(arguments));
  };
};

// Current time through tween, start value of tween, change between beginning and end values, duration of tween
const easeLinear = function (time, beginning, change, duration) {
  return (change * time) / duration + beginning;
};

const setTimer = function (intervalInfo) {
  const timeElapsed = new Date().getTime() - intervalInfo.started;

  // If we're done easing, drop down to a simple setInterval
  if (timeElapsed > intervalInfo.easeDuration) {
    intervalInfo.completed = true;
    intervalInfo.timeoutHandle = setInterval.apply(
      root,
      [intervalInfo.callback, intervalInfo.endInterval].concat(intervalInfo.arguments),
    );
  }
  // Otherwise, keep tweening
  else {
    const nextTime = intervalInfo.easeFunction(
      timeElapsed,
      intervalInfo.startInterval,
      intervalInfo.endInterval - intervalInfo.startInterval,
      intervalInfo.easeDuration,
    );

    // Update info and run the timer
    intervalInfo.timeoutHandle = setTimeout(partial(nextInterval, intervalInfo), nextTime);
  }
};

const nextInterval = function (intervalInfo) {
  // Schedule next timer
  setTimer(intervalInfo);

  // Mimic setTimeout's behavior with `window` as `this` and addtional arguments passed to the callback
  intervalInfo.callback.apply(root, intervalInfo.arguments);
};

export const setEasedInterval = (callback, options) => {
  // Mapping of returned interval handles to their current timeout handles
  let intervals = {},
    easedIntervalCounter = 0;

  const handle = ++easedIntervalCounter,
    now = new Date().getTime();

  intervals[handle] = {
    arguments: Array.prototype.slice.call(arguments, 2),
    callback: callback,
    easeDuration: options.easeDuration,
    easeFunction: options.easeFunction || easeLinear,
    started: now,
    startInterval: options.startInterval,
    endInterval: options.endInterval,
  };

  setTimer(intervals[handle]);

  return handle;
};

export const clearEasedInterval = (handle) => {
  const intervalInfo = intervals[handle];

  if (intervalInfo.completed) {
    clearInterval(intervals[handle].timeoutHandle);
  } else {
    clearTimeout(intervals[handle].timeoutHandle);
  }

  delete intervals[handle];
};

