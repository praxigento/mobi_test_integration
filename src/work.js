var op = require("object-path")

var objFrom = {one: {two: {three: 33}}}
var objTo = {}

var item = op.get(objFrom, "one.two.three")
op.set(objTo, "one.two.three", item + 22)
item = op.get(objTo, "one.two.three")