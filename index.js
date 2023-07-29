// Write your code here!
const mainNode = document.querySelector('#main');
mainNode.remove()

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const thomas = 'Thomas';
newHeader.textContent = '${thomas} is the champion';
