import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const mesh = new THREE.Group();

loader.load("./Horse.gltf", function (gltf) {
    console.log(gltf);
    mesh.add(gltf.scene);

    gltf.scene.scale.set(20, 20, 20);

    gltf.scene.traverse(obj => {
        if(obj.isMesh) {
            console.log('mesh', obj);
            if(obj.name === 'Cylinder') {
                obj.material.color = new THREE.Color('white');
            } else if(obj.name === 'Cylinder_1') {
                obj.material.color = new THREE.Color('pink');
            }
        }
    });
})

export default mesh;