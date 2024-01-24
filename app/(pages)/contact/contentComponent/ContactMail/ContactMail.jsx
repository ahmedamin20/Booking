import style from './ContactMail.module.css'; // Import your CSS module

export default function ContactMail() {
    return (
        <div className={style.card}> {/* Use className and the style class from your CSS module */}
            <h2>Contact Me</h2>
            <div className={style.row}> {/* Use className and the style class from your CSS module */}
                <div className={style.col}> {/* Use className and the style class from your CSS module */}
                    <div className={style['form-group']}> {/* Use className and the style class from your CSS module */}
                        <label>Name</label>
                        <input type="text" />
                    </div>
                </div>

                <div className={style.col}> {/* Use className and the style class from your CSS module */}
                    <div className={style['form-group']}> {/* Use className and the style class from your CSS module */}
                        <label>Email</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={style.row}>

                    <div className={`${style.col} ${style.message}` }> {/* Use className and the style class from your CSS module */}
                    <div className={style['form-group']}> {/* Use className and the style class from your CSS module */}
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                </div>
                </div>
        <div className={style.row}>

                    <div className={`${style.col} ${style.Submit}`}> {/* Use className and the style class from your CSS module */}
                    <input type="submit" value=" Submit " />
                </div>
        </div>
            </div>
        </div>
    );
}
