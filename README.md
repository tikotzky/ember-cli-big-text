# Ember-cli-big-text

Ember Cli Big Text is a component that wraps the jQuery [BigText](https://github.com/zachleat/BigText) plugin.helper.

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

{{#big-text minFontSize=100 maxFontSize=300 childSelector="only-me" resize=true}}
	<span>This text</span>
	<span class="only-me">will all</span>
	<span>be BIG</span>
{{/big-text}}
```

All options are equivalent to the corresponding BigText option.

## Last but not least

If you have any feedback / improvements please open an issue or a PR