# Ayu Mirage Hyper Theme
Ayu (mirage) for Hyper

macOS (no borders)
![Ayu Mirage Hyper Theme - No border](https://cloud.githubusercontent.com/assets/19519411/26340080/fac0f5e8-3f51-11e7-9a8f-760c5fa80c55.png)

macOS (border)
![Ayu Mirage Hyper Theme - Border](https://cloud.githubusercontent.com/assets/19519411/26340074/f721a892-3f51-11e7-957c-90576cc92646.png)

Windows (no borders)
![Ayu Mirage Hyper Theme - No borders](https://cloud.githubusercontent.com/assets/19519411/26419524/9d3b83c2-4085-11e7-9a30-82cbe032de1d.png)

Windows (header border)
![Ayu Mirage Hyper Theme - Header border](https://cloud.githubusercontent.com/assets/19519411/26419522/9d305696-4085-11e7-8a24-6a6f7783f056.png)

Windows (custom header)
![Ayu Mirage Hyper Theme - Custom header](https://cloud.githubusercontent.com/assets/19519411/26419523/9d358972-4085-11e7-9873-fc8ab1293ea3.png)

## Installation
1. Open Hyper's preferences with `Cmd +`, (or manually at `~/.hyper.js`).
2. Update your list of plugins to include `hyper-ayu-miragae`, like this:

```javascript
  plugins: [
    'hyper-ayu-mirage'
  ]
```

3. Fully reload Hyper (`Cmd + Shift + R`)

## Configuration
You can decide whether to display the tab border or not using the following configuration:

```javascript
  config: {
    ayu: {
      // true will hide all borders; false will display them.
      noBorder: boolean 

      // true will display the tab border; false will hide them.
      // on macOS, this is the opposite of noBorder.
      showTabBorder: boolean,

      // Windows only
      // true will display the header border; false will hide it.
      showHeaderBorder: boolean,

      // Windows only
      // controls the background color of the header
      // e.g #FF00DD, rgb(254, 254, 254), red
      headerBackgroundColor: 'string',

      // Windows only
      // controls the foreground color of the header (title and windows controls)
      // e.g #FF00DD, rgb(254, 254, 254), red
      headerForegroundColor: 'string'
    }
  }
```

## Related

- [Hyper](https://hyper.is/)
- [Ayu for Sublime Text](https://github.com/dempfi/ayu)
- [Ayu for Vim](https://github.com/ayu-theme/ayu-vim)
- [Ayu (dark) for Hyper](https://github.com/licatajustin/hyper-ayu)
- [Ayu (light) for Hyper](https://github.com/weirdpattern/hyper-ayu-light)

## License
MIT © WeirdPattern
