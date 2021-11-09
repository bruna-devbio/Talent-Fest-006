import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { loginPage } from "../../services/index";
import logoAmarelo from "../../assets/img/LogoAmarelo.png";
import nomeAmarelo from "../../assets/img/NomeAmarelo.png";
import logoMobile from "../../assets/img/LogoMobile.png";
import './index.css';
import './responsive.css';

const Login = () => {

	const [values, setValues] = useState({
		email: '',
		password: '',

	});

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	};

	const handleClick = (event) => {
		event.preventDefault()
		loginPage(values.email, values.password).then(() => {
			alert('login funcionando')
		}).catch(() => {
			alert('erro')
		})
	};

	return (
		<section className='login-container'>
			<div className='login-logo'>
				<img className='login-logo-yellow' src={logoAmarelo} alt='logo' />
				<img className='login-name-yellow' src={nomeAmarelo} alt='logo' />
			</div>
			<div className='login-form-group'>
				<h1 className='login-H1'>
					Login
				</h1>
				<div className='login-logo-mobile'>
					<img className='login-logo-black-mobile' src={logoMobile} alt='logo' />
				</div>
				<fieldset className='login-fieldset'>
					<form className='login-form'>
						<h1 className='login-H1-mobile'>
							Login
						</h1>
						<Input
							type='text'
							placeholder='Digite seu e-mail'
							className='login-input'
							name='email'
							onChange={onChangeValues}
							value={values.email}
						>
						</Input>

						<Input
							type='password'
							placeholder='Digite sua senha'
							className='login-input'
							name='password'
							onChange={onChangeValues}
							value={values.password}>
						</Input>


						<Button
							type='button'
							className='login-button'
							buttonOnClick={handleClick}>ENTRAR</Button>
						<p className='login-p'>Não possui cadastro?</p>
						<Link to='/register' className='login-register'>
							Crie sua conta
						</Link>
						<p className='login-p-or'>
							OU
						</p>
						<Button
							type='button'
							className='login-button-google'>
							<img className="logo-google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="logo-google" />
							ENTRAR COM O GOOGLE
						</Button>
					</form>
				</fieldset>
			</div>
		</section >
	)
}

export default Login;