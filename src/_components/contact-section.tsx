import Contact from "./contact";


function ContactSection() {
    return (
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Fale comigo!
                </h2>
                <div className="space-x-4">
                    <Contact />
                </div>
            </div>
            
        </section>
    );
}   

export default ContactSection