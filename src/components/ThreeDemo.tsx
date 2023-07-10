/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDemo = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Create a scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 2;
  
      // Create a renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
  
      // Append the renderer to the sceneRef element
      if (sceneRef.current) {
        sceneRef.current.appendChild(renderer.domElement);
      }
  
      // Create a cube
    //   const geometry = new THREE.BoxGeometry();
    //   const material = new THREE.MeshBasicMaterial({ color: 0x4b0082 });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    const edges = new THREE.EdgesGeometry( geometry ); 
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1} ); 
    const cube = new THREE.Mesh( geometry, material ); 
    scene.add( cube );
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Clean up
      return () => {
        sceneRef.current?.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={sceneRef}></div>;
  };

export default ThreeDemo