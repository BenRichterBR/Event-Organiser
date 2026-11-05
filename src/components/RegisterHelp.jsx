//import components
import Button from 'react-bootstrap/Button';

//display registration help if toggled open in the parent component
export default function RegisterHelp({ helpSetter }) {
    return (
        <div id='registration-help'>
            <p>This tool helps you organise your events, but first you need to register an account!</p>
            <p>If you have registered but have since refreshed the page you will have to register again.</p>
            <p>Otherwise, simply fill in the registration form with your first name, your last name, your preferred username, and your email. Pick a password, then repeat it again to ensure you typed everything correctly.
                Then you can hit 'submit' and you should get a pop-up confirming your registration. Also, the registration form will vanish, leaving you with the login form.</p>
            <p>To log in, simply enter the email address and the password you registered your account under and hit 'submit', and you'll be able to see your dashboard.</p>
            <p>Here are some further tips to make the registration process go smoothly:</p>
            
            <ol id='tips-list'>
                <li>Your first and last names can't be longer than 15 and 20 characters respectively. Also, you can only use letters, no numbers or symbols allowed!</li>
                <li>Your username needs to be between 5 and 15 letters.</li>
                <li>Your email must have the format of [something]@[something].[end]</li>
                <li>Your password must be longer than 8 characters. Also, it needs at least one upper case letter, one lower case letter, one number, and one symbol. For security!</li>
            </ol>
            
            <br />
            
            <p>Once you're registered and logged in, click on 'Help' on the top of the page if you need help adding an event.</p>

            <Button variant='secondary' className='registration-help-btns' onClick={helpSetter}>Okay, I understand now!</Button>
        </div>
    );
}
