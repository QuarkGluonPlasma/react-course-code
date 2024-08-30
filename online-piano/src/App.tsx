import { useEffect, useMemo } from "react";
import { styled, createGlobalStyle, css } from "styled-components"

function App() {

  const keys: Record<string, { frequency: number }> = {
    A: {
      frequency: 196
    },
    S: {
      frequency: 220
    },
    D: {
      frequency: 246
    },
    F: {
      frequency: 261
    },
    G: {
      frequency: 293
    },
    H: {
      frequency: 329
    },
    J: {
      frequency: 349
    },
    K: {
      frequency: 392
    }
  }

  const GlobalStyles = createGlobalStyle`
    body {
      background: #000;
    }
    .pressed {
      background: #aaa;
    }
  `;


  const KeysStyle = styled.div`
    width: 800px;
    height: 400px;
    margin: 40px auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
  `
  const textStyle = css`
    line-height: 500px;
    text-align: center;
    font-size: 50px;
  `

  const KeyStyle = styled.div`
    border: 4px solid black;
    background: #fff;
    flex: 1;
    ${textStyle}

    &:hover {
      background: #aaa;
    }
  `

  const context = useMemo(()=> {
    return new AudioContext();
  }, []);

  const play = (key: string) => {
    const frequency = keys[key]?.frequency;
    if(!frequency) {
      return;
    }

    const osc = context.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = frequency;
  
    const gain = context.createGain();
    osc.connect(gain);
    gain.connect(context.destination);
  
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);

    osc.start(context.currentTime);
  
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 1);
    osc.stop(context.currentTime + 1);

    document.getElementById(`key-${key}`)?.classList.add('pressed');
    setTimeout(()=> {
      document.getElementById(`key-${key}`)?.classList.remove('pressed');
    }, 100)
  }

  useEffect(()=> {
    document.addEventListener('keydown', (e) => {
      play(e.key.toUpperCase());
    })
  }, []);

  const map: Record<number, string> = {
    1: 'A',
    2: 'S',
    3: 'D',
    4: 'F',
    5: 'G',
    6: 'H',
    7: 'J',
    8: 'K'
  }

  function playSong1() {
    const music = [
        [6, 1000],
        [5, 1000],
        [3, 1000],
        [5, 1000],
        [8, 1000],
        [6, 500],
        [5, 500],
        [6, 1000]
    ];

    playMusic(music)
  }

  function playMusic(music: number[][]) {
    let startTime = 0;
    music.forEach((item) => {
      setTimeout(() => {
        play(map[item[0]]);
      }, startTime * 0.5);
      startTime += item[1]
    }) 
  }

  function playSong2() {
    const music = [
        [6, 1000],
        [6, 1000],
        [6, 1000],
        [3, 500],
        [6, 500],
        [5, 1000],
        [3, 500],
        [2, 500],
        [3, 1000]
    ];

    playMusic(music)
  }

  return <div>
    <KeysStyle as='section'>
      {
        Object.keys(keys).map((item: any) => {
          return  <KeyStyle as='div' key={item}>
            <div onClick={() => play(item)} id={`key-${item}`}>
              <span>{item}</span>
            </div>
          </KeyStyle>
        })
      }
      <GlobalStyles />
    </KeysStyle>
    <div className='songs'>
      <button onClick={() => playSong1()}>世上只有妈妈好</button>
      <button onClick={() => playSong2()}>奢香夫人</button>
    </div>
  </div>
}

export default App
