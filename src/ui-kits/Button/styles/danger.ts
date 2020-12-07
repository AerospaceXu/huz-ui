import color from '../../../lib/styles/color';

const danger = (isContained: boolean, isHover = false) =>
  (isHover
    ? {
      color: '#FFFFFF',
      'border-color': color.light.red,
      background: color.light.red,
    }
    : {
      color: isContained ? '' : color.light.red,
      'border-radius': isContained ? '4px' : 0,
      border: isContained ? '' : '2px solid',
      background: isContained ? color.light.red : 'transparent',
    });

export default danger;
