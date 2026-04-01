import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SiDiscord, SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { SendHorizonal } from 'lucide-react';
import { ScrollReveal } from '../utils/ScrollReveal';
import './Contact.css';

const SOCIALS = [
	{ icon: SiGithub, href: 'https://github.com/Cimeci', label: 'GitHub' },
	{ icon: SiLinkedin, href: 'https://linkedin.com/in/ilan-nowak-glandier', label: 'LinkedIn' },
	{ icon: SiX, href: 'https://x.com/Cimeci_23', label: 'X' },
	{ icon: SiDiscord, href: 'https://discord.com/users/Cimeci', label: 'Discord' },
];

export const Contact = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 3000);
	};

	return (
		<div className="py-20 sm:py-32">
			<ScrollReveal>
				<p className="section-header">// {t('nav.contact')}</p>
			</ScrollReveal>
			<ScrollReveal delay={0.1}>
				<h2 className="section-title">{t('contact.contact_me')}</h2>
			</ScrollReveal>

			<div className="contact-layout">
				{/* Left: info + socials */}
				<ScrollReveal delay={0.2}>
					<div className="contact-info">
						<p className="contact-text">
							{t('about.intro.greeting', { name: '' }).replace('  ', ' ').trim()}
						</p>

						<div className="contact-socials">
							{SOCIALS.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="contact-social-link"
								>
									<Icon size={18} />
									<span>{label}</span>
								</a>
							))}
						</div>

						<p className="contact-copy">
							&copy; {new Date().getFullYear()} Ilan Nowak--Glandier
						</p>
					</div>
				</ScrollReveal>

				{/* Right: form */}
				<ScrollReveal delay={0.3}>
					<form
						action="https://formsubmit.co/ilannowakglandierpro@gmail.com"
						method="POST"
						onSubmit={handleSubmit}
						className="contact-form"
					>
						<input
							className="contact-input"
							type="email"
							name="email"
							required
							placeholder={t('contact.email_address')}
						/>
						<input
							className="contact-input"
							type="text"
							name="_subject"
							required
							placeholder={t('contact.subject')}
						/>
						<textarea
							className="contact-input contact-textarea"
							name="message"
							required
							placeholder={t('contact.text')}
						/>
						<button
							className="contact-submit"
							type="submit"
							disabled={loading}
						>
							{loading ? (
								<span className="contact-spinner" />
							) : (
								<>
									<span>{t('contact.send')}</span>
									<SendHorizonal size={16} />
								</>
							)}
						</button>

						<input type="hidden" name="_next" value="https://cimeci.github.io" />
						<textarea name="_autoresponse" style={{ display: 'none' }} defaultValue={t('contact.mail.reponse')} />
					</form>
				</ScrollReveal>
			</div>
		</div>
	);
};
