import { Hero, Button, Card, Input, Textarea, Form} from "react-daisyui";

function ContactHero() {
    return (
        <div className="py-8 space-y-10" id="contact">
            <Hero>
                <Hero.Content className="flex-col lg:flex-row">
                    <div className="text-center space-y-7">
                        <h1 className="text-5xl">Need help with anything?</h1>
                        <p className="space-y-7">Let us know how we can help. Contact MindGarden support team by filling out contact details to your right, or you can directly email us.</p><br></br>
                        <a className="space-y-7 text-sky-400 after:content-['_↗'] ..." href="tel:18889580569">+1 (888) 958 0569</a><br></br>
                        <a className="space-y-7 text-sky-400 after:content-['_↗'] ..." href="mailto:info@mindgarden.ml">info@mindgarden.ml</a>
                        <p>
                            615, 11 Broadway,<br></br>
                            New York, NY
                        </p>
                    </div>
                    <Card className="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <Card.Body>
                        <Form>
                            <Form.Label title="Your Name" />
                            <Input
                            type="text"
                            placeholder=""
                            className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Email Address" />
                            <Input
                            type="text"
                            placeholder=""
                            className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Brief description of your issue" />
                            <Textarea className="input-bordered" />
                        </Form>
                        <span className="text-sm font-light">By contacting us, you agree to our <a className="text-blue-600" href="legal/privacy">privacy policy</a>. Learn more about the information included when you use the contact form.</span>
                        <Form className="mt-6">
                            <Button>Contact Support</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>
        </div>
    );
}

export default ContactHero;