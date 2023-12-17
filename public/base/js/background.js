const canvas = document.getElementById('canvas');

// Создаем сцену
const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -0.4

// Создаем рендерер
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем геометрию тора
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Создаем материал
const material = new THREE.MeshBasicMaterial({ color: 0x8d1919, wireframe: false });

// Создаем меш
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Функция анимации
function animate() {
    requestAnimationFrame(animate);

    // Плавное перемещение
    torus.rotation.x += Math.random() * 0.005;
    torus.rotation.y += Math.random() * 0.005;
    torus.rotation.z += Math.random() * 0.005;

    // Плавное изменение формы
    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.2;
    torus.scale.set(scale, scale, scale);

    // Размытие
    renderer.autoClear = true;
    renderer.setClearColor(0x000000, 0);
    renderer.render(scene, camera);
}

// Создаем геометрию тора1
const geometry1 = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Создаем материал1
const material1 = new THREE.MeshBasicMaterial({ color: 0x152399, wireframe: false });

// Создаем меш1
const torus1 = new THREE.Mesh(geometry1, material1);
scene.add(torus1);

// Функция анимации1
function animate1() {
    requestAnimationFrame(animate1);

    // Плавное перемещение1
    torus1.rotation.x += Math.random() * 0.007;
    torus1.rotation.y += Math.random() * 0.007;
    torus1.rotation.z += Math.random() * 0.007;

    // Плавное изменение формы1
    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.2;
    torus1.scale.set(scale, scale, scale);

    // Размытие1
    renderer.autoClear = true;
    renderer.setClearColor(0x000000, 0);
    renderer.render(scene, camera);
}

// Вызываем анимацию
animate();
animate1();

window.addEventListener("resize", AutoScale); // Масштабируем страницу при растягивании окна

AutoScale(); // Масштабируем страницу после загрузки

function AutoScale() {
    const shirina = window.innerWidth; // Ширина окна
    const visota = window.innerHeight; // Высота окна

    renderer.setSize(shirina, visota);
    camera.aspect = shirina / visota;
    camera.updateProjectionMatrix();
}