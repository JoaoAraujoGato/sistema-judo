import './login.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../services/auth';

function LoginPage() {
    const navigate = useNavigate();
    const { authenticateUser } = useAuth();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/login', {email, senha});
            alert("Bem vindo " + response?.data?.sensei?.nome);
            authenticateUser(response?.data?.accessToken, response?.data?.sensei?.id);
            navigate("/dashboard");
        } catch (error) {
            if(error?.response?.status === 403) {
                alert("Credenciais Inválidas");
            }
            alert(error?.response?.data?.notification);
        }
    };

    return (
        <div
            className='login-background d-flex justify-content-center align-items-center flex-column'
            style={{ backgroundImage: 'url("/images/FundoDeTelaJudoLoginAzul.png")'}}>
            {/* Faixa e título fora do card */}
            <div className='login-header text-center mb-4'>
                <img
                    src="/images/FaixaLoginBranca.png"
                    alt="faixa"
                    className='login-faixa'
                />
                <h1 className='login-title'>Sistema Judô</h1>
            </div>
            {/* Card branco com formulário */}
            <div className='login-card p-4 rounded shadow text-center'>
                <div className='d-flex flex-column'>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            {/* <InputGroup>
                                <InputGroup.Text>
                                    <i className="fa-regular fa-envelope"></i>
                                </InputGroup.Text> */}
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            {/* </InputGroup> */}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            {/* <InputGroup>
                                <InputGroup.Text>
                                    <i className="fa-regular fa-lock"></i>
                                </InputGroup.Text> */}
                                <Form.Control
                                    type="password"
                                    placeholder="Senha"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            {/* </InputGroup> */}
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Entrar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;