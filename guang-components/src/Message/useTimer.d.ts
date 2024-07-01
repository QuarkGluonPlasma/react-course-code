export interface UseTimerProps {
    id: number;
    duration?: number;
    remove: (id: number) => void;
}
export declare function useTimer(props: UseTimerProps): {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};
