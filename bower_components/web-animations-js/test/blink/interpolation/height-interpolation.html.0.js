
assertInterpolation({
  property: 'height',
  from: '0px',
  to: '100px'
}, [
  {at: -0.3, is: '0px'}, // CSS height can't be negative.
  {at: 0, is: '0px'},
  {at: 0.3, is: '30px'},
  {at: 0.6, is: '60px'},
  {at: 1, is: '100px'},
  {at: 1.5, is: '150px'}
]);
