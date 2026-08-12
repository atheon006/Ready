import { useState, useRef } from 'preact/hooks'

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef.current.value.trim();
        const email = EmailRef.current.value.trim();
        const message = MessageRef.current.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setMailStatus({ status: false, message: '🙄 Email invalide !' })
            return
        }

        setisLoading(true)
        setMailStatus({ status: false, message: "Envoi du message..." })

        let sentSuccessfully = false;

        // 1. Primary: Direct AJAX email delivery to readykalonda38@gmail.com via FormSubmit
        try {
            const res = await fetch("https://formsubmit.co/ajax/readykalonda38@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _subject: `[Portfolio Contact] Message de ${name}`,
                    _replyto: email
                })
            });

            if (res.ok) {
                sentSuccessfully = true;
            }
        } catch (err) {
            console.warn('FormSubmit endpoint error:', err);
        }

        // 2. Secondary: EmailJS if service credentials are provided in env
        if (!sentSuccessfully) {
            const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey && serviceId !== 'your_emailjs_service_id_here') {
                try {
                    const { default: emailjs } = await import('@emailjs/browser')
                    const mailRes = await emailjs.send(
                        serviceId,
                        templateId,
                        { from_name: name, from_email: email, message: message, reply_to: email },
                        publicKey
                    );

                    if (mailRes.status === 200) {
                        sentSuccessfully = true;
                    }
                } catch (err) {
                    console.warn('EmailJS error:', err);
                }
            }
        }

        setisLoading(false)

        if (sentSuccessfully) {
            setMailStatus({ status: true, message: "👍 Message envoyé avec succès !" })
            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""
        } else {
            setMailStatus({ status: false, message: "❌ Une erreur s'est produite lors de l'envoi." })
        }

        setTimeout(() => {
            setMailStatus({ status: false, message: "" })
        }, 6000);
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                <span>Nom / Name</span>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom..."
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                <span>Email</span>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre.email@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                <span>Message</span>
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    required
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4 py-2">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md hover:bg-primary hover:text-background transition-colors duration-200 cursor-pointer"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Envoi...</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Envoyer / Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span className="font-bold text-sm text-primary">{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm