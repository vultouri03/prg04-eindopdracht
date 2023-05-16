import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import aliceWalkImage from '../images/walkAlice.png'
import aliceImage from '../images/Alice.png'
import background from '../images/background.png'



const Resources = {
    AliceWalk: new ImageSource(aliceWalkImage),
    Alice: new ImageSource(aliceImage),
    Background: new ImageSource(background)
};
const ResourceLoader = new Loader([Resources.AliceWalk, Resources.Alice, Resources.Background]);


export { Resources, ResourceLoader };