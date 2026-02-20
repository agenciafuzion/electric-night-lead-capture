import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
import logoLoop from "@/assets/logo-loop.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const loginEmail = email.includes("@") ? email : `${email}@loop.sistema`;
    try {
      const { error } = await signIn(loginEmail, password);
      if (error) {
        setError("Credenciais inválidas. Tente novamente.");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logoLoop} alt="Loop" className="h-10 mx-auto mb-6" />
          <h1 className="font-headline text-2xl font-bold text-primary-foreground mb-2">Painel Administrativo</h1>
          <p className="font-body text-neutral-mid text-sm">Faça login para gerir as vagas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-mid" />
            <input
              type="text"
              placeholder="Nome de usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-11 pr-4 py-3.5 rounded-xl glass font-body text-sm text-primary-foreground placeholder:text-neutral-mid focus:outline-none focus:ring-2 focus:ring-electric/50"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-mid" />
            <input
              type="password"
              placeholder="Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-11 pr-4 py-3.5 rounded-xl glass font-body text-sm text-primary-foreground placeholder:text-neutral-mid focus:outline-none focus:ring-2 focus:ring-electric/50"
            />
          </div>

          {error && <p className="font-body text-sm text-destructive text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Entrar <ArrowRight className="w-4 h-4" /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
