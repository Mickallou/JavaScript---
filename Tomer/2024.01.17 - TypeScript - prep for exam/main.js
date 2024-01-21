import GrandApplication1 from "./modules.js";
const myGrant = new GrandApplication1(1000);
myGrant.printStatus(); // Opened - 0
myGrant.moveToNextStage();
myGrant.printStatus(); // Applied - 1 
