import React, { createContext, useContext } from 'react';
import { useOutlet, useLocation, matchPath } from 'react-router-dom'
import type { FC, PropsWithChildren, ReactNode } from 'react';

interface KeepAliveLayoutProps extends PropsWithChildren{
    keepPaths: Array<string | RegExp>;
    keepElements?: Record<string, ReactNode>;
    dropByPath?: (path: string) => void;
}

type KeepAliveContextType = Omit<Required<KeepAliveLayoutProps>, 'children'>;

const keepElements: KeepAliveContextType['keepElements'] = {};

export const KeepAliveContext = createContext<KeepAliveContextType>({
    keepPaths: [],
    keepElements,
    dropByPath(path: string) {
        keepElements[path] = null;
    }
});

const isKeepPath = (keepPaths: Array<string | RegExp>, path: string) => {
    let isKeep = false;
    for(let i = 0; i< keepPaths.length; i++) {
        let item = keepPaths[i];
        if (item === path) {
            isKeep = true;
        }
        if (item instanceof RegExp && item.test(path)) {
            isKeep = true;
        }
        if (typeof item === 'string' && item.toLowerCase() === path) {
            isKeep = true;
        }
    }
    return isKeep;
}

export function useKeepOutlet() {
    const location = useLocation();
    const element = useOutlet();

    const { keepElements, keepPaths } = useContext(KeepAliveContext);
    const isKeep = isKeepPath(keepPaths, location.pathname);

    if (isKeep) {
        keepElements![location.pathname] = element;
    }

    return <>
        {
            Object.entries(keepElements).map(([pathname, element]) => (
                <div 
                    key={pathname}
                    style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto' }}
                    className="keep-alive-page"
                    hidden={!matchPath(location.pathname, pathname)}
                >
                    {element}
                </div>
            ))
        }
        {!isKeep && element}
    </>
}

const KeepAliveLayout: FC<KeepAliveLayoutProps> = (props) => {
    const { keepPaths, ...other } = props;

    const { keepElements, dropByPath } = useContext(KeepAliveContext);

    return (
        <KeepAliveContext.Provider value={{ keepPaths, keepElements, dropByPath }} {...other} />
    )
}

export default KeepAliveLayout;
