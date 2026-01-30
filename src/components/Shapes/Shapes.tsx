import { useEffect, useRef } from 'react';
import {
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    DirectionalLight,
    AmbientLight,
    PerspectiveCamera,
    Scene,
    OctahedronGeometry,
    WebGLRenderer,
} from 'three';
import styles from "./shapes.module.css";


const CubeScene = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // SCENE
        const scene = new Scene();

        // LIGHTS
        const ambientLight = new AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // CAMERA
        const camera = new PerspectiveCamera(
            35,
            containerRef.current.clientWidth /
            containerRef.current.clientHeight,
            0.1,
            100
        );
        camera.position.set(0, 0, 10);

        // MESH
        const geometry = new BoxGeometry(2, 2, 2);
        const material = new MeshStandardMaterial({ color: '#00ffff' });
        const cube = new Mesh(geometry, material);
        camera.position.set(0, 0, 15);
        cube.position.y = -3;           // moves cube 2 units down
        cube.position.x = -8;           // keep it left

        const diamondGeometry = new OctahedronGeometry(1.5); // size
        const diamondMaterial = new MeshStandardMaterial({ color: '#00a2ff' });
        const diamond = new Mesh(diamondGeometry, diamondMaterial);

        // Move it to the right
        diamond.position.set(8, 0, 0);
        scene.add(diamond);
        scene.add(cube);


        const renderer = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight
        );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
        }

        containerRef.current.appendChild(renderer.domElement);


        let animationId: number;

        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Rotate diamond
            diamond.rotation.x += 0.01;
            diamond.rotation.y += 0.02;

            // Render scene
            renderer.render(scene, camera);

            // Loop
            animationId = requestAnimationFrame(animate);
        };

        animate();


        // CLEANUP
        return () => {
            cancelAnimationFrame(animationId);
            containerRef.current?.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            className={styles.container}
            ref={containerRef}
            style={{ width: '100%', height: '400px' }}
        />
    );
};

export default CubeScene;
