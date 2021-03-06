import './style.css'

import * as $ from 'jquery'
import * as THREE from 'three'

$(() => {
    // let print = document.getElementById('print');
    let scene = new THREE.Scene(print);
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({color: 0x33ddff});
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        camera.rotation.x -= 0.01;
        camera.rotation.y -= 0.01;
    }
    animate();


})