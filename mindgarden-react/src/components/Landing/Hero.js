import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero className="bg-gray-900 text-white" id="home">
      <Hero.Overlay className="bg-opacity-10" />
      <Hero.Content className="text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Transcribe Your Mind</h1>
          <p className="py-6">
            Don't overthink it, your mind is safe with us in our journals. Did you know that overthinkers are exptected to die 10 years earlier than most? 
            What are you waiting for?  You still have time to save yourself, let us help by tracking your feelings day-to-day so that you can recognize triggers or mood swings and learn ways to better help yourself.
          </p>
          <Button href="login" color="info">Get Started</Button>
          <br></br>
        </div>
        
        <img style={{left:"calc(50% + 80px)"}} src="/img/bg1.png" alt="Hero" className="object-cover h-96 rounded-xl mt-10" />

      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;