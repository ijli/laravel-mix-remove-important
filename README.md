# laravel-mix-remove-important

Plugin for laravel-mix remove all !important

### Install

```sh
npm i laravel-mix-remove-important
```

### Usage

*webpack.mix.js*

```js
const mix = require('laravel-mix');
const removeImportant = require('@ijli/laravel-mix-remove-important');

mix.options({
  postCss: [
    removeImportant
  ]
});
```
### Example

given this CSS:

```css
.class1 {
  top: 0 !important;
  left: 0 !important;;
}
```

will return this CSS:

```css
.class-1 {
  top: 0;
  left: 0;
}
```