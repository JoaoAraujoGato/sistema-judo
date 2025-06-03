import './recuperarSenha.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

function RecuperarSenhaPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
  e.preventDefault();
  if (!email) {
    toast.warning("Por favor, informe seu email.");
    return;
  }

  try {
    const response = await api.post('/forgot-password', { email });
    toast.success(response.data.message);
    navigate("/login");
  } catch (err) {
    toast.error(err?.response?.data?.message || "Erro ao tentar recuperar a senha");
  }
};

  return (
    <div
      className="recuperar-senha-background d-flex justify-content-center align-items-center vh-100 flex-column"
      style={{
        backgroundImage: 'url("/images/FundoDeTelaJudoLoginVermelho.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Faixa e título */}
      <div className='login-header text-center mb-4'>
        <img
          src="/images/FaixaLoginBranca.png"
          alt="faixa"
          className='login-faixa'
        />
        <h1 className='login-title'>Recuperar Senha</h1>
      </div>
      <div className="login-card p-4 rounded shadow w-100" style={{ maxWidth: "400px" }}>
        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Enviar email de recuperação
          </Button>
          <Button
            variant="link"
            className="w-100 mt-2 btn-custom-link-recuperar"
            onClick={() => navigate('/login')}
          >
            Voltar ao login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RecuperarSenhaPage;
