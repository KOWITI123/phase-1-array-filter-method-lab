// Code your solution here

const findMatching = (x, y) => x.filter(x =>x.toLowerCase() === y.toLowerCase());

const fuzzyMatch =  (x, y) => x.filter(x =>x.charAt(0) === y.charAt(0));

const matchName = (x, y) => x.filter(x => x.name === y);