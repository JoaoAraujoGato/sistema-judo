import './login.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../services/auth';
import { toast } from 'react-toastify';

function LoginPage() {
    const navigate = useNavigate();
    const { authenticateUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.elements.formBasicEmail.value;
        const senha = form.elements.formBasicPassword.value;

        try {
            const response = await api.post('/login', {email, senha});
            toast.success("Bem vindo " + response?.data?.sensei?.nome);
            authenticateUser(response?.data?.accessToken, response?.data?.sensei?.id);
            navigate("/dashboard");
        } catch (error) {
            if(error?.response?.status === 403) {
                toast.error("Credenciais Inválidas");
            } else {
                toast.error(error?.response?.data?.notification || "Erro ao fazer login");
            }
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
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Control
                                    type="password"
                                    placeholder="Senha"
                                />
                        </Form.Group>

                        <Button
                            variant="link"
                            className="btn-custom-link"
                            onClick={() => navigate('/recuperar-senha')}
                        >
                            Esqueceu a senha?
                        </Button>

                        <Button variant="primary" type="submit" className="w-100">
                            Entrar
                        </Button>
                    </Form>

                    {/* Botão de voltar */}
                    <Button
                        variant="error"
                        className="mt-3 btn-danger"
                        onClick={() => navigate('/')}
                    >
                        Voltar para Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;