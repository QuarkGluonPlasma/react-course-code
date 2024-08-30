const context = new AudioContext();

const osc = context.createOscillator();
osc.frequency.value = 220;
osc.type = 'square';
osc.start();

const volume = context.createGain();
volume.gain.value = 0.5;

const out = context.destination;

const nodes = new Map();

nodes.set('a', osc);
nodes.set('b', volume);
nodes.set('c', out);

export function isRunning() {
  return context.state === 'running';
}

export function toggleAudio() {
  return isRunning() ? context.suspend() : context.resume();
}

export function updateAudioNode(id: string, data: Record<string, any>) {
    const node = nodes.get(id);
  
    for (const [key, val] of Object.entries(data)) {
      if (node[key] instanceof AudioParam) {
        node[key].value = val;
      } else {
        node[key] = val;
      }
    }
}

export function removeAudioNode(id: string) {
    const node = nodes.get(id);
  
    node.disconnect();
    node.stop?.();
  
    nodes.delete(id);
}

export function connect(sourceId: string, targetId: string) {
    const source = nodes.get(sourceId);
    const target = nodes.get(targetId);
  
    window.osc = osc;
    source.connect(target);
}

export function disconnect(sourceId: string, targetId: string) {
    const source = nodes.get(sourceId);
    const target = nodes.get(targetId);
    source.disconnect(target);
}


export function createAudioNode(id: string, type: string, data: Record<string, any>) {
  switch (type) {
    case 'osc': {
      const node = context.createOscillator();
      node.frequency.value = data.frequency;
      node.type = data.type;
      node.start();

      nodes.set(id, node);
      break;
    }

    case 'volume': {
      const node = context.createGain();
      node.gain.value = data.gain;

      nodes.set(id, node);
      break;
    }
  }
}
