import { Banner } from './Banner';
import { ProfileCard } from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';


function App({ type }) {
  return (
    <div className="flex flex-col h-screen ">
      <Banner text='Personal Digital Assistants'/>
      <div className="flex items-center justify-center h-full gap-10">
        <ProfileCard
          name="Alexa"
          img={AlexaImg}
          twitterHandle="alexa99"
          text='I"ll help you buy stuff on Amazon'
        />
        <ProfileCard
          name="Cortana"
          img={CortanaImg}
          twitterHandle="cortanat12"
          text="Personal assistant by Microsoft"
        />
        <ProfileCard
          name="Siri"
          img={SiriImg}
          twitterHandle="siri44"
          text='I don"t get a lot of updates anymore'
        />
      </div>
    </div>
  );
}

export default App;
