import {  SetStateAction, useCallback, useEffect, useRef, useState } from "react"
import dayjs from 'dayjs'

function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T,
    value?: T,
    onChange?: (value: T) => void;
  },
): [T, React.Dispatch<React.SetStateAction<T>>,] {
  const { defaultValue, value: propsValue, onChange } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if(defaultValue !== undefined){
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if(propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
  } 

  const setState = useCallback((value: SetStateAction<T>) => {
    let res = isFunction(value) ? value(mergedValue) : value

    if (propsValue === undefined) {
      setStateValue(res);
    }
    onChange?.(res);
  }, [stateValue,propsValue]);

  return [mergedValue, setState]
}

interface CalendarProps{
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const {
    value: propsValue,
    defaultValue,
    onChange
  } = props;

  const [mergedValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue,
    onChange
  });

  return <div>
    {mergedValue?.toLocaleDateString()}
    <div onClick={()=> {setValue(new Date('2024-5-1'))}}>2023-5-1</div>
    <div onClick={()=> {setValue(new Date('2024-5-2'))}}>2023-5-2</div>
    <div onClick={()=> {setValue(new Date('2024-5-3'))}}>2023-5-3</div>
    <div onClick={()=> {
                setValue(date=>{
                    console.log(date?.toLocaleDateString());
                    let currentDayjs=dayjs(date).add(1,'month');
                    return currentDayjs.toDate();
                })
            }}>functions</div>
  </div>
}

function App() {
  // const [value, setValue] = useState(new Date('2024-5-1'));

  // return <Calendar value={value} onChange={(date) => {
  //   console.log(date.toLocaleDateString());
  //   setValue(date);
  // }}/>
  return <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
    console.log(date.toLocaleDateString());
  }}/>
}

export default App
