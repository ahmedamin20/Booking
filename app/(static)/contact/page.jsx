import style from "./page.module.css"; // Import style from 'page.module.css'
import ContactInfo from "./contentComponent/ContactInfo/ContactInfo";

export const metadata = {
  title: "Contact me",
  Technology: "How to contact me",
};

export default function Contact() {
  return (
    <div>
      <div className="flex-mid">
        <small className="small">What's Next? I waiting your mail</small>
        <h1 className={`purple`}>Contact</h1>
      </div>

      <div className={style.grid}>

        <ContactInfo />
      </div>
    </div>
  );
}
