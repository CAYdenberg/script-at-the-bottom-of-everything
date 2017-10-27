// myModule.js
//
export const typesOfCandy = ['smarties', 'rockets', 'M&Ms', 'toothpaste']

export default function() {
  return typesOfCandy[Math.floor(Math.random() * typesOfCandy.length)]
}
