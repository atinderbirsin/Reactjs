import { Banner } from './Banner';
import { ProfileCard } from './ProfileCard';


function App({ type }) {
  return (
    <div className="flex flex-col h-screen ">
      <Banner text='Personal Digital Assistants'/>
      <div className="flex items-center justify-center h-full gap-10">
        <ProfileCard
          name="Alexa"
          img="https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png"
          twitterHandle="alexa99"
          text='I"ll help you buy stuff on Amazon'
        />
        <ProfileCard
          name="Cortana"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/1200px-Microsoft_Cortana_transparent.svg.png"
          twitterHandle="cortanat12"
          text="Personal assistant by Microsoft"
        />
        <ProfileCard
          name="Siri"
          img="https://www.apple.com/v/siri/f/images/meta/siri__fsb5b98qe526_og.png?202205050342"
          twitterHandle="siri44"
          text='I don"t get a lot of updates anymore'
        />
      </div>
    </div>
  );
}

export default App;
