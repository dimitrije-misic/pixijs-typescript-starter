import * as PIXI from 'pixi.js';
import { HelloWorld } from './scenes/helloWorld';
import { initDevtools } from '@pixi/devtools';

const main = async () => {
    // Main app
    let app = new PIXI.Application();
    await app.init();

    initDevtools({ app });

    // Display application properly
    document.body.style.margin = '0';
    app.canvas.style.position = 'absolute';
    app.canvas.style.display = 'block';

    // View size = windows
    app.renderer.view.resize(window.innerWidth, window.innerHeight, app.renderer.view.resolution);
    window.addEventListener('resize', (e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    // Load assets
    await PIXI.Assets.load('assets/hello-world.png');
    document.body.appendChild(app.canvas);

    // Set scene
    var scene = new HelloWorld(app);
    app.stage.addChild(scene);
};

main();
