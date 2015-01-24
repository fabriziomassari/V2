
test(function() {
  assertAnimationStyles([
    {opacity: '0', left: '0px'},
    {opacity: '0.5', left: '50px', offset: 0.5},
    {opacity: '0', left: '0px', offset: 0.5},
    {opacity: '0.75', left: '75px', offset: 0.5},
    {opacity: '0.25', left: '25px'},
  ], {
    0.25: {opacity: '0.25', left: '25px'},
    0.5: {opacity: '0.75', left: '75px'},
    0.75: {opacity: '0.5', left: '50px'},
  })
},
'element.animate() with keyframes at the same offset with overlapping properties',
{
  help: 'http://dev.w3.org/fxtf/web-animations/#the-unaccumulated-animation-value-of-a-keyframe-animation-effect',
  assert: [
    'element.animate() should start an animation when keyframes have equal offset values.',
    'The overlapping properties in the equal offset keyframes should see a disjoint',
    'interpolation pattern at the offset relative to the ordering of the keyframes.',
  ],
  author: 'Alan Cutter',
});

test(function() {
  assertAnimationStyles([
    {opacity: '0', left: '0px'},
    {opacity: '0.75', offset: 0.5},
    {left: '75px', offset: 0.5},
    {opacity: '0.25', left: '25px'},
  ], {
    0.25: {opacity: '0.375', left: '37.5px'},
    0.5: {opacity: '0.75', left: '75px'},
    0.75: {opacity: '0.5', left: '50px'},
  })
},
'element.animate() with keyframes at the same offset with disjoint properties',
{
  help: 'http://dev.w3.org/fxtf/web-animations/#the-unaccumulated-animation-value-of-a-keyframe-animation-effect',
  assert: [
    'element.animate() should start an animation when keyframes have equal offset values.',
    'If the properties of the equal offset keyframes are disjoint then the animation should',
    'be equivalent to having a single keyframe at that offset (assuming the easings are equal too).',
  ],
  author: 'Alan Cutter',
});
