# Join items with commas and "&" before the last item

#Example#
let Separator = require('join-with-commas-and-and-before-the-last');
Separator.separate(["Emran", "Rayhan", "Mahmud"]) // output will be "Emran, Rayhan & Mahmud"
Separator.separate(["Emran", "Rayhan"]) // output will be "Emran & Rayhan"
Separator.separate(["Rayhan"]) // output will be "Rayhan"
