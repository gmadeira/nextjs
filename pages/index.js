import useAuth from './../hooks/useAuth';

export default function Home() {

  const { user, signin } = useAuth();

  return (
    <div>
      <h2>Teste Next</h2>
      <button onClick={() => signin()}>Entrar com github</button>
    </div>
  )
}
