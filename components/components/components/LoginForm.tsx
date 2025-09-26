export default function LoginForm() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-surface rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-text">Inicia sesión</h1>
      <button className="w-full bg-brand text-white py-2 rounded-lg mb-3">Continuar con Google</button>
      <button className="w-full bg-info text-white py-2 rounded-lg mb-3">Continuar con Apple</button>
      <input type="email" placeholder="Tu correo" className="w-full p-2 border border-border rounded-lg mb-3" />
      <button className="w-full bg-accent text-white py-2 rounded-lg">Enviar Magic Link</button>
    </div>
  );
}
