import React from 'react';
import classes from './SignIn.module.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
	return (
		<div className={classes.signIn}>
			<h1>Sign In</h1>
			<p>Enter your email / phone number bellow</p>
			<div className={classes.inputElements}>
				<input type="text" placeholder="Email / Phone number *"></input><br></br>
				<input type="text" placeholder="Password *"></input><br></br>
				<input type="text" id="role" placeholder="Role *                  
                                                 &#9662;"></input><span id={classes.forgot}> Forget your password?</span><br></br>

				<input type="checkbox" value="text"></input>
				<label >I have read and agree the terms and conditions, as well as Privacy Policy of Fuelup Education.</label>
				<div className={classes.robot}>
					<input type="checkbox" id={classes.text} value="text"></input>
					<label id={classes.text}>I`m not a robot.</label>
					<div>
						<img src="./images/captcha.svg" alt="captcha" />
						<span>reCAPTCHA</span>
						<span>Privacy terms</span>
					</div>
				</div>
				<button><Link to="/create-exam" id={classes.signIn}>Sign in</Link></button>
				<h2 className={classes.line}><span>Or</span></h2>
				<div className={classes.img}>
					<img src="./images/facebook.svg" alt="facebok-image" />
					<img src="./images/google-symbol.svg" alt="google-image" />
					<img src="/src/assets/images/microsoft.svg" alt="microsoft-image" />
				</div>
				<h2 className={classes.secondLine}><span>Use biometric Sign In</span></h2>
				<div className={classes.bottomButtons}>
					<button>Scan your finger</button><button>Scan your face</button>
				</div>
				<p>Don`t have an account? Please <span>Sign Up</span> first.</p>

			</div>
		</div >
	)
}

export default SignIn;
