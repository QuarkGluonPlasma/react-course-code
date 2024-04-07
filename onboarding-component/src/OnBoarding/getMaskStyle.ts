export const getMaskStyle = (element: HTMLElement, container: HTMLElement) => {
    if (!element) {
      return {};
    }
  
    const { height, width, left, top } = element.getBoundingClientRect();
  
    const elementTopWithScroll = container.scrollTop + top;
    const elementLeftWithScroll = container.scrollLeft + left;
  
    return {
      width: container.scrollWidth,
      height: container.scrollHeight,
      borderTopWidth: Math.max(elementTopWithScroll, 0),
      borderLeftWidth: Math.max(elementLeftWithScroll, 0),
      borderBottomWidth: Math.max(container.scrollHeight - height - elementTopWithScroll, 0),
      borderRightWidth: Math.max(container.scrollWidth - width - elementLeftWithScroll, 0)
    };
  };
  