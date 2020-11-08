const normal = (isContained: boolean, isHover = false) =>
  (isHover && !isContained
    ? {
      color: 'rgba(0, 0, 0, 0.32)',
      'border-color': isContained ? 'rgba(0, 0, 0, 0.32)' : 'transparent',
      background: isContained ? 'rgba(0, 0, 0, 0.15)' : 'transparent',
    }
    : {
      cursor: 'not-allowed',
      color: 'rgba(0, 0, 0, 0.32)',
      'border-radius': isContained ? '4px' : 0,
      border: isContained ? '' : '2px solid',
      background: isContained ? 'rgba(0, 0, 0, 0.15)' : 'transparent',
    });

export default normal;
