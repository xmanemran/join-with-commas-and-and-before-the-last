# Join items with commas and "&" before the last item

## Install
```
npm install join-with-commas-and-and-before-the-last --save
```

### Method

```
separate(array)
separate(array, "and") // last item join with 'and'. Default is '&'
```

### Example
```
var separate = require('join-with-commas-and-and-before-the-last').separate;

Separator.separate(["Emran", "Rayhan", "Mahmud"]);   // output will be "Emran, Rayhan & Mahmud"

Separator.separate(["Emran", "Rayhan"]);             // output will be "Emran & Rayhan"

Separator.separate(["Rayhan"]);                      // output will be "Rayhan"

Separator.separate(["Emran", "Rayhan", "Mahmud"], 'and');   // output will be "Emran, Rayhan and Mahmud"
```
