import { Form, Button } from 'react-bootstrap';

function LoginPage() {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column'
            style={{
                backgroundImage: 'url("/images/FundoDeTelaJudoLoginAzul.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%'
            }}>
            {/* Faixa e título fora do card */}
            <div className='text-center mb-4'>
                <img
                    src="/images/FaixaLoginBranca.png"
                    alt="faixa"
                    style={{
                        width: '30vw',
                        maxWidth: '200px',
                        height: 'auto'
                    }}
                />
                <h1
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                    }}
                >
                    Sistema Judô
                </h1>
            </div>
            {/* Card branco com formulário */}
            <div
                className='p-4 rounded shadow'
                style={{
                    backgroundColor: 'white',
                    maxWidth: '400px',
                    width: '90%',
                    textAlign: 'center'
                }}
                >
                <div className='d-flex flex-column'>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            {/* <InputGroup>
                                <InputGroup.Text>
                                    <i className="fa-regular fa-envelope"></i>
                                </InputGroup.Text> */}
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
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