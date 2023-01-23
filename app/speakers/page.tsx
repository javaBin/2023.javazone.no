import Link from 'next/link'
import styles from '../layout.module.css'


export default function SpeakersPage() {
    return (
        <>
            <h1>Call for speakers</h1>

            <div>
                <h2>About JavaZone</h2>
                <p>
                    JavaZone 2023 will be the 21th physical JavaZone conference and will consist of a day of pre-conference workshop, followed by two days of lightning talks and presentations in September.
                </p>
                <p>
                    JavaZone is typically sold out, with more than 3200 attendees enjoying well over 100 sessions.
                </p>
                <p>
                    JavaZone hosts both international and Norwegian speakers. We'd love to have you join us the coming September!
                </p>
                <p>
                    Our call for speakers is open from <b style={{textDecoration: "underline"}}>February 1st</b> until <b style={{textDecoration: "underline"}}>April 17th</b>.
                </p>
                <a href="https://talks.javazone.no">Submit your talk!</a>
            </div>

            <div>
                <h2>What is it like speaking at JavaZone?</h2>
                <p>
                    Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – over 1500 videos from previous years talks are available for free at <a href='https://vimeo.com/javazone'>Vimeo</a>, and the <a href='https://2022.javazone.no/program'>full program from JavaZone 2022</a> is also available.
                </p>
                <p>
                    We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2023 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop.
                </p>
                <p>
                    JavaZone is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                </p>
            </div>
            <div><h2>Formats and Durations</h2>
                <p>
                    You should think about which format your talk will work best in. Are you presenting a new idea, or do you require more time to elaborate on your subject? How hands-on do you want to be? We have three formats you can present your material in.
                </p>
            </div>
           
            <div><h2>Audience and Topics</h2>
                <p>
                    JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
                </p>
                <p>
                    Despite our conference's name, we do not limit our content to Java technology. We will consider all talks based on their relevance to developers and technical architects. We do however set a focus on technology surrounding the JVM when selecting talks.
                </p>
            </div>
            <div><h1>Ongoing Evaluation of Talks</h1>
                <p>
                    Each year we receive hundreds of submissions and we consider each submission as it arrives. Due to a large number of submissions, we can not guarantee that you will hear from us immediately. We do however answer all submissions and will do so no later than end of June.
                </p>
                <p>
                    Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers-tsunami!
                </p>
                <br />
                <a href='/speakers/tips'>
                    Submission tips
                </a>
            </div>
            <div><h1>What's in it for me?</h1>
                <h3>Accepted presentations, lightning talks, and workshops</h3>
                <p>
                    As a JavaZone speaker, you get free admission to the conference. Additionally, you are also invited to the speakers' dinner, held on September 6th.
                </p>
                <h3>Coverage of Expenses</h3>
                <p>
                    Please see our <a href='/speakers/monetary-policy'>reimbursement policy</a> if you have any questions regarding coverage of other expenses.
                </p>
            </div>
            <div><h1>Important principles</h1>
                <p>
                    JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from <a href="https://javabin.no">javaBin</a> (the Norwegian Java User Group) and is run as a non-profit organization. This means that we have three important principles for selecting talks:
                </p>
                <ul>
                    <li>We do not sell speaker slots.</li>
                    <li>We do not accept sales pitches masked as presentations</li>
                    <li>We do not differentiate between speakers from partners and independent speakers</li>
                </ul>
                <p>
                    If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                </p>
            </div>
            <h1>We hope to see you at JavaZone 2023 - please feel free to spread the word to your local community!</h1>
                <p>
                    Best regards,<br />the JavaZone Program Committee
                </p>
        </>
    )
}

