import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import aliceWalkImage from '../images/walkAlice.png'
import aliceImage from '../images/Alice.png'
import background from '../images/background.png'
import sword from '../images/sword.png'
import aliceAttackImage from '../images/attack-alice.png'



const Resources = {
    AliceWalk: new ImageSource(aliceWalkImage),
    AliceAttack: new ImageSource(aliceAttackImage),
    Alice: new ImageSource(aliceImage),
    Background: new ImageSource(background),
    Sword: new ImageSource(sword)
};
const ResourceLoader = new Loader([Resources.AliceWalk, Resources.Alice, Resources.Background, Resources.Sword, Resources.AliceAttack]);


export { Resources, ResourceLoader };