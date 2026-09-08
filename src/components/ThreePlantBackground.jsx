import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreePlantBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting for lush botanical depth
    const ambientLight = new THREE.AmbientLight(0xdff5e5, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xa3e635, 2.2);
    sunLight.position.set(8, 12, 10);
    scene.add(sunLight);

    const warmFill = new THREE.PointLight(0xfef08a, 1.2, 30);
    warmFill.position.set(-8, -4, 6);
    scene.add(warmFill);

    const deepEmeraldFill = new THREE.PointLight(0x15803d, 1.8, 25);
    deepEmeraldFill.position.set(0, -6, 4);
    scene.add(deepEmeraldFill);

    // Group for all foliage
    const plantGroup = new THREE.Group();
    scene.add(plantGroup);

    // Helper: Create a curved 3D Leaf Mesh
    function create3DLeaf(scaleX = 1, scaleY = 2, color = 0x22c55e, darkColor = 0x14532d) {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(scaleX * 0.8, scaleY * 0.3, scaleX * 1.1, scaleY * 0.7, 0, scaleY);
      shape.bezierCurveTo(-scaleX * 1.1, scaleY * 0.7, -scaleX * 0.8, scaleY * 0.3, 0, 0);

      const extrudeSettings = {
        depth: 0.04,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 2,
        bevelSize: 0.02,
        bevelThickness: 0.02
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();

      // Create rich organic material with subsurface green luster
      const material = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.35,
        metalness: 0.08,
        side: THREE.DoubleSide
      });

      const leafMesh = new THREE.Mesh(geometry, material);
      
      // Stem rib down center
      const ribGeo = new THREE.CylinderGeometry(0.02 * scaleX, 0.04 * scaleX, scaleY * 0.95, 8);
      const ribMat = new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.6 });
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.z = 0.03;
      leafMesh.add(rib);

      return leafMesh;
    }

    // Helper: Create a full 3D Plant Bush / Stem with multiple leaves
    const plants = [];

    function createPlantBush(x, y, z, leafCount = 7, baseColor = 0x22c55e, scale = 1) {
      const bushGroup = new THREE.Group();
      bushGroup.position.set(x, y, z);
      bushGroup.scale.set(scale, scale, scale);

      const leaves = [];

      for (let i = 0; i < leafCount; i++) {
        const leafScaleX = 0.8 + Math.random() * 0.6;
        const leafScaleY = 2.0 + Math.random() * 1.2;
        const leafColor = i % 2 === 0 ? baseColor : 0x16a34a;
        const leaf = create3DLeaf(leafScaleX, leafScaleY, leafColor);

        const angle = (i / leafCount) * Math.PI * 2 + (Math.random() * 0.3);
        const radius = 0.6 + Math.random() * 0.8;
        
        leaf.position.x = Math.cos(angle) * radius;
        leaf.position.y = Math.sin(angle) * (radius * 0.6) + (i * 0.2);
        leaf.position.z = (Math.random() - 0.5) * 0.8;

        leaf.rotation.z = angle - Math.PI / 2 + (Math.random() - 0.5) * 0.3;
        leaf.rotation.x = 0.4 + Math.random() * 0.4;
        leaf.rotation.y = (Math.random() - 0.5) * 0.5;

        // Store initial rotation for organic wind sway
        leaf.userData = {
          initRotZ: leaf.rotation.z,
          initRotX: leaf.rotation.x,
          initRotY: leaf.rotation.y,
          speed: 0.8 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2
        };

        bushGroup.add(leaf);
        leaves.push(leaf);
      }

      plantGroup.add(bushGroup);
      plants.push({ group: bushGroup, leaves });
    }

    // Spawn 3D Plants along corners and deep background layers
    // 1. Top-Left Tropical Canopy
    createPlantBush(-11, 6, -2, 9, 0x15803d, 1.4);
    createPlantBush(-8, 5, 0, 7, 0x22c55e, 1.1);

    // 2. Top-Right Canopy
    createPlantBush(11, 6, -2, 9, 0x16a34a, 1.4);
    createPlantBush(8, 5, 0, 7, 0x4ade80, 1.0);

    // 3. Bottom-Left Lush Growth (Terrace Garden Saplings)
    createPlantBush(-10, -6, 1, 10, 0x15803d, 1.3);
    createPlantBush(-6.5, -5.5, 3, 6, 0x84cc16, 0.9);

    // 4. Bottom-Right Growth
    createPlantBush(10, -6, 1, 10, 0x166534, 1.3);
    createPlantBush(6.5, -5.5, 3, 6, 0x22c55e, 0.9);

    // 5. Deep Floating Midground Stems
    createPlantBush(-4, 0, -5, 8, 0x14532d, 1.2);
    createPlantBush(4, 1, -5, 8, 0x15803d, 1.2);

    // 3D Floating Spores / Pollen Dew Particles
    const particleCount = 75;
    const particleGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const particleMat = new THREE.MeshStandardMaterial({
      color: 0xa3e635,
      emissive: 0x4ade80,
      emissiveIntensity: 0.6,
      roughness: 0.2
    });

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12
      );
      p.userData = {
        vx: (Math.random() - 0.5) * 0.008,
        vy: 0.005 + Math.random() * 0.01,
        vz: (Math.random() - 0.5) * 0.008,
        seed: Math.random() * 100
      };
      scene.add(p);
      particles.push(p);
    }

    // Mouse Tracking for Parallax Reaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 1.5;
      targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera mouse parallax
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(0, 0, 0);

      // Natural wind sway physics on all 3D plant leaves
      plants.forEach(({ group, leaves }) => {
        // Overall bush breathing
        group.rotation.y = Math.sin(elapsedTime * 0.5 + group.position.x) * 0.05;

        leaves.forEach((leaf) => {
          const { initRotZ, initRotX, initRotY, speed, phase } = leaf.userData;
          const sway = Math.sin(elapsedTime * speed + phase);
          leaf.rotation.z = initRotZ + sway * 0.08;
          leaf.rotation.x = initRotX + Math.cos(elapsedTime * speed * 0.8 + phase) * 0.06;
          leaf.rotation.y = initRotY + sway * 0.04;
        });
      });

      // Animate floating dew particles
      particles.forEach((p) => {
        p.position.y += p.userData.vy;
        p.position.x += p.userData.vx + Math.sin(elapsedTime + p.userData.seed) * 0.003;
        p.position.z += p.userData.vz;

        // Wrap around boundaries
        if (p.position.y > 9) p.position.y = -9;
        if (p.position.x > 14) p.position.x = -14;
        if (p.position.x < -14) p.position.x = 14;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
