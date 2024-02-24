import React from 'react';
import { Icon, IconProps } from './';

const loaded = new Set<string>();

export function createFromIconfont(scriptUrl: string) {
  if (
    typeof scriptUrl === 'string'
    && scriptUrl.length
    && !loaded.has(scriptUrl)
  ) {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    document.body.appendChild(script);

    loaded.add(scriptUrl);
  }

  const Iconfont = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type, ...rest } = props;

    return (
      <Icon {...rest} ref={ref}>
        { type ? <use xlinkHref={`#${type}`} /> : null}
      </Icon>
    );
  });

  return Iconfont;
}
