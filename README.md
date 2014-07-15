# Ember-cli-big-text

ember-cli-big-text is a component that wraps the jQuery [BigText](https://github.com/zachleat/BigText) plugin.helper.

### Projects using ember-cli-big-text
[https://github.com/tikotzky/smpl-tmr](https://github.com/tikotzky/smpl-tmr)

## Installation

```
npm install ember-cli-big-text --save-dev
```

## Usage

```
{{#big-text}}
	<span>This text</span>
	<span>will all</span>
	<span>be BIG</span>
{{/big-text}}

{{#big-text minFontSize=100 maxFontSize=300 childSelector=".only-me" resize=true}}
	<span>This text</span>
	<span class="only-me">will all</span>
	<span>be BIG</span>
{{/big-text}}
```

All options are equivalent to the corresponding BigText option.

## Last but not least

If you have any feedback / improvements please open an issue or a PR
