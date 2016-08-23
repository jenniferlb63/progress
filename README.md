# rc-progress
---

Progress Bar.

[![NPM version][npm-image]][npm-url]
[![SPM version](http://spmjs.io/badge/rc-progress)](http://spmjs.io/package/rc-progress)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-progress.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-progress
[travis-image]: https://img.shields.io/travis/react-component/progress.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/progress
[coveralls-image]: https://img.shields.io/coveralls/react-component/progress.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/progress?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/progress.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/progress
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-progress.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-progress

## Screenshots

<img src="https://t.alipayobjects.com/images/T12p8gXjpgXXXXXXXX.gif" />


## Example

http://react-component.github.io/progress/

## Feature

* support ie9+,chrome,firefox,safari

## Install

[![rc-progress](https://nodei.co/npm/rc-progress.png)](https://npmjs.org/package/rc-progress)

## Usage

```jsx
import { Line, Circle } from 'rc-progress';

ReactDOM.render(<div>
  <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
  <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
</div>, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>strokeWidth</td>
          <td>Number</td>
          <td>1</td>
          <td>Width of the stroke. Unit is percentage of SVG canvas size.</td>
        </tr>
        <tr>
          <td>strokeColor</td>
          <td>String</td>
          <td>#2db7f5</td>
          <td>Stroke color.</td>
        </tr>
        <tr>
          <td>trailWidth</td>
          <td>Number</td>
          <td>1</td>
          <td>Width of the trail stroke. Unit is percentage of SVG canvas size. Trail is always centered relative to actual progress path. If trailWidth are not defined, it same as strokeWidth.</td>
        </tr>
        <tr>
          <td>trailColor</td>
          <td>String</td>
          <td>#D9D9D9</td>
          <td>Color for lighter trail stroke underneath the actual progress path.</td>
        </tr>
        <tr>
		  <td>strokeLinecap</td>
		  <td>String</td>
		  <td>round</td>
		  <td>The shape to be used at the end of the progress bar, can be square or round.</td>
		</tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```

## License

rc-progress is released under the MIT license.
