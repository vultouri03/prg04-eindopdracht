import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import aliceWalkImage from '../images/walkAlice.png'
import aliceImage from '../images/Alice.png'
import background from '../images/background.png'
import sword from '../images/sword.png'
import aliceAttackImage from '../images/attack-alice.png'
import gameOver from '../images/gameover.png'
import ground from '../images/ground.png'
import slime from '../images/slime.png'
import start from '../images/start.png'
import button from '../images/startButton.png'
import beam from '../images/beam.png'


const Resources = {
    AliceWalk: new ImageSource(aliceWalkImage),
    AliceAttack: new ImageSource(aliceAttackImage),
    Alice: new ImageSource(aliceImage),
    Background: new ImageSource(background),
    Sword: new ImageSource(sword),
    GameOver: new ImageSource(gameOver),
    Ground: new ImageSource(ground),
    Slime: new ImageSource(slime),
    Start: new ImageSource(start),
    Button: new ImageSource(button),
    Beam: new ImageSource(beam),
};
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }