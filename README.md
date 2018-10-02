# @tne/common
Library completely written with __typescript__, common libs, functions, helpers and other stuff for Node.Js environment.

<a name="main_menu"></a>
## Menu
- [Installation](#installation)
- [Usage](#usage)
- [lib/debug](#lib_debug)
- [lib/fsExists](#lib_fsExists)
- [lib/getFromHaystack](#lib_getFromHaystack)
- [lib/loadJsonFile](#lib_loadJsonFile)
- [lib/requireDir](#lib_requireDir)
- [lib/requireDirSync](#lib_requireDirSync)
- [lib/lcFirst](#lib_lcFirst)
- [lib/ucFirst](#lib_ucFirst)
- [lib/toCamelCase](#lib_toCamelCase)
- [lib/to_snake_case](#lib_to_snake_case)
- [lib/TO_CONSTANT_CASE](#lib_TO_CONSTANT_CASE)
- [lib/ToTitleCase](#lib_ToTitleCase)
- [lib/strMask](#lib_strMask)

<a name="installation"></a>
[Back to Menu](#main_menu)
## Installation
Using npm:
```
$ npm i --save @tne/logger
```
Using yarn:
```
$ yarn add @tne/logger
```
---

<a name="usage"></a>
[Back to Menu](#main_menu)
## Usage

```
import * as Common from '@tne/common';

// OR specific lib
import { requireDirSync } from '@tne/common';
```
---

<a name="lib_debug"></a>
[Back to Menu](#main_menu)
## lib/debug
Collection of functions to debug like the old school, if there was no debugger.

### dump
It receives any number of arguments and outputs the terminal with different meta-data according to the type of data supplied.

#### usage
```
import { dump } from '@tne/common';


dump('data args to dump', 19);
```

#### output
```
Start Data dumping...

Argument: 1
Type: string
Value: data args to dump

Argument: 2
Type: number
Value: 19

data dump done!
```

### die
Wrapper for `process.exit(1);`, but before it sends to the console a message that the process is about to end.

#### usage
```
import { die } from '@tne/common';

die();
```

#### output
```

now Process will die
```

### dd
Wrap for `dump` and `die`, first call `dump` with the supplied arguments and then end the process by calling `die`.

#### usage
```
import { dd } from '@tne/common';

dd('data args to dump', 19);
```

#### output
```
Start Data dumping...

Argument: 1
Type: string
Value: data args to dump

Argument: 2
Type: number
Value: 19

data dump done!


now Process will die
```
---

<a name="lib_fsExists"></a>
[Back to Menu](#main_menu)
## lib/fsExists
A couple of simple functions to check if a file or folder exists and is of the type you want.

###

### pathExists
Check if a path leads to an existring valid folder.

returned type: __boolean__

#### usage
```
import { pathExists } from '@tne/common';

if (pathExists('path/to/eval')) {
	// code here
}
```
### fileExists
Check if a path leads to an existring valid folder.

returned type: __boolean__

#### usage
```
import { fileExists } from '@tne/common';

if (fileExists('file/path/to/eval')) {
	// code here
}
```
---

<a name="lib_getFromHaystack"></a>
[Back to Menu](#main_menu)
## lib/getFromHaystack
Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

### Arguments
| Arg | Type | Required? | Description|
|-|-|-|-|
| path | string | true | The path of the property to get |
| haystack | string | true | The data structure through which it is to be searched. |
| defaultValue | string | false | The value returned for not found values; `null` if not provided |


#### Example usage
```
import { getFromHaystack } from '@tne/common';
const data = { 'a': [{ 'b': { 'c': 3 } }] };

getFromHaystack('a[0].b.c', data);
// => 3

getFromHaystack('a[2].b.c', data);
// => null

getFromHaystack('a[2].b.c', data, false);
// => false
```
---

<a name="lib_loadJsonFile"></a>
[Back to Menu](#main_menu)
## lib/loadJsonFile
Load the data from a valid 'json' file supplied in path.

### Arguments
| Arg | Type | Required? | Description|
|-|-|-|-|
| pathSegments | string[] | true | Path segments to `.json` file. |


#### Example usage
```
import { loadJsonFile } from '@tne/common';

const jsonContent = loadJsonFile('path/to/json/file/to/eval');
```
---

<a name="lib_requireDir"></a>
[Back to Menu](#main_menu)
## lib/requireDir
Load `asynchronously` all the indicated modules in a valid path.

### Arguments
| Arg | Type | Required? | Description|
|-|-|-|-|
| pathSegments | string[] | true | Path segments to __modules__. |


#### Example usage
```
import { requireDir } from '@tne/common';

const modules = await requireDir('path/to/load');
```
---

<a name="lib_requireDirSync"></a>
[Back to Menu](#main_menu)
## lib/requireDir
Load `synchronously` all the indicated modules in a valid path.

### Arguments
| Arg | Type | Required? | Description|
|-|-|-|-|
| pathSegments | string[] | true | Path segments to __modules__. |


#### Example usage
```
import { requireDirSync } from '@tne/common';

const modules = requireDirSync('path/to/load');
```
---

<a name="lib_requireDirSync"></a>
[Back to Menu](#main_menu)
## lib/requireDir
Load `synchronously` all the indicated modules in a valid path.

### Arguments
| Arg | Type | Required? | Description|
|-|-|-|-|
| pathSegments | string[] | true | Path segments to __modules__. |


#### Example usage
```
import { requireDirSync } from '@tne/common';

const modules = requireDirSync('path/to/load');
```
---

<a name="#lib_lcFirst"></a>
[Back to Menu](#main_menu)
## lib/lcFirst
Transform provided string to `lowercase first` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |

#### Example usage
```
import { lcFirst } from '@tne/common';

const res = lcFirst('lorem ipsum dolor');
```
---

<a name="#lib_ucFirst"></a>
[Back to Menu](#main_menu)
## lib/ucFirst
Transform provided string to `Uppercase First` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |

#### Example usage
```
import { ucFirst } from '@tne/common';

const res = ucFirst('lorem ipsum dolor');
```
---

<a name="#lib_toCamelCase"></a>
[Back to Menu](#main_menu)
## lib/toCamelCase
Transform provided string to `toCamelCase` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |
| ucF | boolean | false | Uppercase first char if provided |

#### Example usage
```
import { toCamelCase } from '@tne/common';

const res = toCamelCase('lorem ipsum dolor');
```
---

<a name="#lib_to_snake_case"></a>
[Back to Menu](#main_menu)
## lib/to_snake_case
Transform provided string to `to_snake_case` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |

#### Example usage
```
import { to_snake_case } from '@tne/common';

const res = to_snake_case('lorem ipsum dolor');
```
---

<a name="#lib_TO_CONSTANT_CASE"></a>
[Back to Menu](#main_menu)
## lib/TO_CONSTANT_CASE
Transform provided string to `TO_CONSTANT_CASE` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |

#### Example usage
```
import { TO_CONSTANT_CASE } from '@tne/common';

const res = TO_CONSTANT_CASE('lorem ipsum dolor');
```
---

<a name="#lib_ToTitleCase"></a>
[Back to Menu](#main_menu)
## lib/ToTitleCase
Transform provided string to `ToTitleCase` format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |
| glue | string | false | Char to join words default to white space `' '` |

#### Example usage
```
import { ToTitleCase } from '@tne/common';

const res = ToTitleCase('lorem ipsum dolor');
```
---

<a name="#lib_strMask"></a>
[Back to Menu](#main_menu)
## lib/strMask
Transform provided string to `Mask` to format.

### Arguments
| Arg | Type | Required? | Description |
|-|-|-|-|
| str | string | true | The string to transform |
| mask | string | false | String mask to use as template default to `'0000-0000-0000-00'` |

#### Example usage
```
import { strMask } from '@tne/common';

const res = strMask('lorem ipsum dolor');
```
---
