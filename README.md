![](https://github.com/wniemiec-component-react/remaining-time/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Remaining Time</h1>
<p align='center'>Displays how many hours, minutes and seconds are left until a certain hour, minute and second.</p>
<p align="center">
	<a href="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-component-react/remaining-time/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://react.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://www.npmjs.com/package/@wniemiec-component-react/remaining-time"><img src="https://img.shields.io/npm/v/@wniemiec-component-react/remaining-time" alt="Release"></a>
	<a href="https://github.com/wniemiec-component-react/remaining-time/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-component-react/remaining-time" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React component that displays the time remaining until a certain hour, minute and second.

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-react/remaining-time/master/docs/img/screens/img1.png" alt="image 1" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-react/remaining-time
```

2. Import the component
```
import RemainingTime from '@wniemiec-component-react/remaining-time';
```

3. Use it
```
[...]

import React from 'react';

[...]

<RemainingTime
  hours={12}
  minutes={59}
  seconds={0}
/>

[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|hours |`number`|Hour | `23` |
|minutes |`number`|Minute| `59` |
|seconds |`number`|Second | `59` |

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-component-react/remaining-time/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-component-react/remaining-time/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
