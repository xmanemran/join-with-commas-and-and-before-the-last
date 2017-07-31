# Join items with commas and "&" before the last item

## Install

npm install join-with-commas-and-and-before-the-last --save

### Example
```
let Separator import 'join-with-commas-and-and-before-the-last';
Separator.separate(["Emran", "Rayhan", "Mahmud"]) // output will be "Emran, Rayhan & Mahmud"
Separator.separate(["Emran", "Rayhan"]) // output will be "Emran & Rayhan"
Separator.separate(["Rayhan"]) // output will be "Rayhan"
```
