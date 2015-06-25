# ezTypewriter

## Demo & Examples & Test

[http://www.ezramorse.com/js/ezTypewriter/demo/demo.html](http://www.ezramorse.com/js/ezTypewriter/demo/demo.html)

## Example Usage

### HTML

```html
<div class="demo">
	<p class="title">Typewriter Example</p>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
	<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
</div>
```

### jQuery

Use the plugin as follows:

```js
// Initialize Typewriter and begin typing                
$('.demo').ezTypewriter();
```

## Arguments
| Name | Default | Description |
| :--------------- | :-------------- | :-------------------------------------------------------- | 
| **autoType**| true | Boolean that controls whether the typing occurs upon initialization |
| **delay**| 0 | The delay before the first character is displayed |
| **time**| .1 | The minimum amount of time between characters  |
| **variation**| .075 | The maximum time (of a random number) added between each character |

## Methods
| Name | Description |
| :--------------- | :-------------------------------------------------------- | 
| **type(x)**| Begins typing. If *x* is specified, and the original jQuery selector matches multiple elements, only that one will start typing |
| **stop()**| Stops all typing |
| **kill()**| Removes this plugin and restores original elements |
| **getScratch()**| Returns the typing area. Can be useful for stopping the typewriter, getting the scratch and then animating the characters |
| **getOriginal()**| Returns the original elements that are hidden while the typing is occurring |

## Installation

Include 'ezTypewriter.js' in your html file (preferably the footer)

## Notes

* Requires jQuery.
* Still in beta form. I just wrote for my site and will support if here is any interest.
* I have not tested htmlentities but they may be problematic
* Have fun

## License

This plugin is available under:
[the MIT license](http://mths.be/mit)
[The GPL license](http://www.gnu.org/copyleft/gpl.html)
