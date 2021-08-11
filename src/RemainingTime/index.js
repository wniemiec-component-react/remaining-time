/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React, { useState, useEffect } from 'react';

/**
 * Displays how many hours, minutes and seconds are left until a certain hour,
 * minute and second.
 * 
 * @param    {number} [hours=23] Hour
 * @param    {number} [minutes=59] Minute
 * @param    {number} [seconds=59] Second
 */
export default function RemainingTime({ hours=23, minutes=59, seconds=59, fgColor='#FFFFFF', style=null }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timerControl = startTimer(setTimeLeft, hours, minutes, seconds);

    return stopTimer(timerControl); // Stops counting when destroying the 
                                    // component
  }, []);

  return timeLeft;
}

function startTimer(setTimeLeft, hours, minutes, seconds) {
  return setInterval(
    () => timer(setTimeLeft, hours, minutes, seconds), 
    1000
  );
}

function timer(setTimeLeft, hours, minutes, seconds) {
  const begin = getCurrentTime();
  const end = getCurrentTimeUsing(hours, minutes, seconds);

  setTimeLeft(getRemainingTime(begin, end));
}

function getCurrentTime() {
  return new Date().getTime();
}

function getCurrentTimeUsing(hours, minutes, seconds) {
  let end = new Date();
  
  end.setHours(hours);
  end.setMinutes(minutes);
  end.setSeconds(seconds);
  
  return end.getTime();
}

function getRemainingTime(begin, end) {
  const diff = end - begin;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) - (hours * 60));
  const seconds = Math.floor((diff / (1000)) - (minutes * 60) - (hours * 60 * 60));

  return formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  let formatedHours = hours.toString();
  let formatedMinutes = minutes.toString();
  let formatedSeconds = seconds.toString();

  if (hours < 10 && hours > 0)
    formatedHours = '0' + formatedHours
  if (minutes < 10 && minutes > 0)
    formatedMinutes = '0' + formatedMinutes
  if (seconds < 10 && seconds > 0)
    formatedSeconds = '0' + formatedSeconds

  return `${formatedHours}h ${formatedMinutes}min ${formatedSeconds}s`;
}

function stopTimer(timerControl) {
  return () => clearInterval(timerControl);
}
