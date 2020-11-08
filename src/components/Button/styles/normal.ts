import color from '../../../lib/styles/color';

const normal = (isContained: boolean, isHover = false) =>
  (isHover && !isContained
    ? {
      color: '#FFFFFF',
      'border-color': color.light.blue,
      background: color.light.blue,
    }
    : {
      color: isContained ? '' : color.light.blue,
      'border-radius': isContained ? '4px' : 0,
      border: isContained ? '' : '2px solid',
      background: isContained ? color.light.blue : 'transparent',
    });

export default normal;
