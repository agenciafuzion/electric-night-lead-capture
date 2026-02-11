import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useJobs, useCreateJob, useUpdateJob, useDeleteJob, type Job } from "@/hooks/useJobs";
import { Plus, Pencil, Trash2, LogOut, Loader2, X, ArrowLeft } from "lucide-react";
import logoLoop from "@/assets/logo-loop.png";
import { toast } from "sonner";

const emptyForm = {
  title: "",
  short_description: "",
  full_description: "",
  location: "",
  contract_type: "",
  seniority: "",
  salary_range: "",
  tags: "",
  is_urgent: false,
  is_confidential: false,
  application_url: "",
};

const AdminDashboard = () => {
  const { session, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { data: jobs, isLoading } = useJobs();
  const createJob = useCreateJob();
  const updateJob = useUpdateJob();
  const deleteJob = useDeleteJob();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-deep flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-electric animate-spin" />
      </div>
    );
  }

  if (!session) {
    navigate("/admin");
    return null;
  }

  const handleEdit = (job: Job) => {
    setForm({
      title: job.title,
      short_description: job.short_description,
      full_description: job.full_description,
      location: job.location,
      contract_type: job.contract_type,
      seniority: job.seniority,
      salary_range: job.salary_range || "",
      tags: job.tags.join(", "),
      is_urgent: job.is_urgent,
      is_confidential: job.is_confidential,
      application_url: job.application_url || "",
    });
    setEditingId(job.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta vaga?")) return;
    await deleteJob.mutateAsync(id);
    toast.success("Vaga excluída com sucesso");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      short_description: form.short_description,
      full_description: form.full_description,
      location: form.location,
      contract_type: form.contract_type,
      seniority: form.seniority,
      salary_range: form.salary_range || null,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      is_urgent: form.is_urgent,
      is_confidential: form.is_confidential,
      application_url: form.application_url || null,
    };

    if (editingId) {
      await updateJob.mutateAsync({ id: editingId, ...payload });
      toast.success("Vaga atualizada com sucesso");
    } else {
      await createJob.mutateAsync(payload);
      toast.success("Vaga criada com sucesso");
    }
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/admin");
  };

  const inputClass = "w-full px-4 py-3 rounded-xl glass font-body text-sm text-primary-foreground placeholder:text-neutral-mid focus:outline-none focus:ring-2 focus:ring-electric/50";

  return (
    <div className="min-h-screen bg-deep">
      {/* Top bar */}
      <div className="border-b border-depth px-6 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoLoop} alt="Loop" className="h-8" />
          <span className="font-body text-sm text-neutral-mid">Painel Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="flex items-center gap-1 font-body text-sm text-neutral-mid hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </button>
          <button onClick={handleLogout} className="flex items-center gap-1 font-body text-sm text-neutral-mid hover:text-primary-foreground transition-colors">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 md:px-16 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary-foreground">Gerir Vagas</h1>
          <button
            onClick={() => { setForm(emptyForm); setEditingId(null); setShowForm(true); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" /> Nova Vaga
          </button>
        </div>

        {/* Form overlay */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-deep/80 backdrop-blur-sm flex items-start justify-center pt-10 px-4 overflow-y-auto">
            <div className="w-full max-w-2xl bg-depth rounded-2xl border border-depth p-6 md:p-8 mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-xl font-bold text-primary-foreground">
                  {editingId ? "Editar Vaga" : "Nova Vaga"}
                </h2>
                <button onClick={() => { setShowForm(false); setEditingId(null); }} className="text-neutral-mid hover:text-primary-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-xs text-neutral-mid mb-1 block">Título *</label>
                  <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Ex: Coordenador de Produção" className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-xs text-neutral-mid mb-1 block">Descrição curta (card) *</label>
                  <textarea value={form.short_description} onChange={(e) => setForm({ ...form, short_description: e.target.value })} required rows={2} placeholder="Resumo para o card..." className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-xs text-neutral-mid mb-1 block">Descrição completa (modal) *</label>
                  <textarea value={form.full_description} onChange={(e) => setForm({ ...form, full_description: e.target.value })} required rows={4} placeholder="Descrição detalhada..." className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-neutral-mid mb-1 block">Localização *</label>
                    <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required placeholder="São Paulo, SP" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-body text-xs text-neutral-mid mb-1 block">Tipo de Contrato *</label>
                    <input value={form.contract_type} onChange={(e) => setForm({ ...form, contract_type: e.target.value })} required placeholder="CLT — Presencial" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-neutral-mid mb-1 block">Senioridade *</label>
                    <input value={form.seniority} onChange={(e) => setForm({ ...form, seniority: e.target.value })} required placeholder="Pleno / Sênior" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-body text-xs text-neutral-mid mb-1 block">Faixa Salarial</label>
                    <input value={form.salary_range} onChange={(e) => setForm({ ...form, salary_range: e.target.value })} placeholder="R$ 8.000 – 12.000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-neutral-mid mb-1 block">Tags (separadas por vírgula)</label>
                  <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Gestão, Produção, Liderança" className={inputClass} />
                </div>
                <div>
                  <label className="font-body text-xs text-neutral-mid mb-1 block">Link de candidatura</label>
                  <input value={form.application_url} onChange={(e) => setForm({ ...form, application_url: e.target.value })} placeholder="https://..." className={inputClass} />
                </div>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-body text-sm text-primary-foreground cursor-pointer">
                    <input type="checkbox" checked={form.is_urgent} onChange={(e) => setForm({ ...form, is_urgent: e.target.checked })} className="accent-electric w-4 h-4" />
                    Urgente
                  </label>
                  <label className="flex items-center gap-2 font-body text-sm text-primary-foreground cursor-pointer">
                    <input type="checkbox" checked={form.is_confidential} onChange={(e) => setForm({ ...form, is_confidential: e.target.checked })} className="accent-electric w-4 h-4" />
                    Confidencial
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={createJob.isPending || updateJob.isPending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {(createJob.isPending || updateJob.isPending) ? <Loader2 className="w-4 h-4 animate-spin" /> : editingId ? "Salvar Alterações" : "Publicar Vaga"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Jobs list */}
        {isLoading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 text-electric animate-spin" /></div>
        ) : !jobs?.length ? (
          <div className="text-center py-20">
            <p className="font-body text-neutral-mid text-lg">Nenhuma vaga cadastrada ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between gap-4 p-5 rounded-xl border border-depth bg-depth/50 hover:border-electric/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline text-base font-semibold text-primary-foreground truncate">{job.title}</h3>
                    {job.is_urgent && <span className="text-xs px-2 py-0.5 rounded-full bg-electric/20 text-electric font-body font-semibold">Urgente</span>}
                    {job.is_confidential && <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-mid/20 text-neutral-mid font-body">Confidencial</span>}
                  </div>
                  <p className="font-body text-sm text-neutral-mid truncate">{job.location} · {job.contract_type} · {job.seniority}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => handleEdit(job)} className="p-2 rounded-lg hover:bg-electric/10 text-neutral-mid hover:text-electric transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(job.id)} className="p-2 rounded-lg hover:bg-destructive/10 text-neutral-mid hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
