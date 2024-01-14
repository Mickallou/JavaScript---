import SportEvent from "./sport_modules.js";
import { Athletics } from "./sport_modules.js";
import { Swimming } from "./sport_modules.js";

async function eventHandler() {
    const waterPolo = new SportEvent('Water Polo', 10, '12/12/2021');
    waterPolo.printEvent();
    const athletics = new Athletics('Athletics', 100, '12/12/2021', 10, 20);
    athletics.printEvent();
    const swimming = new Swimming('Swimming', 100, '12/12/2021', 10, 20);
    swimming.printEvent();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);
