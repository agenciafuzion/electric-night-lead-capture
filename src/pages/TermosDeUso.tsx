const TermosDeUso = () => {
  return (
    <main className="min-h-screen bg-deep">
      <div className="container mx-auto max-w-3xl px-6 md:px-16 py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-10">
          Termos de Uso
        </h1>

        <div className="space-y-8 font-body text-sm text-neutral-mid leading-relaxed">
          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao aceder e utilizar o site da Loop Consultoria e Soluções Empresariais ("Loop"), concorda com os presentes Termos de Uso. Se não concordar, por favor não utilize o nosso site.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">2. Serviços</h2>
            <p>
              A Loop oferece serviços de consultoria empresarial, diagnóstico organizacional e treinamentos. O conteúdo disponibilizado neste site tem caráter informativo e não constitui aconselhamento profissional vinculativo.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, imagens, logótipos, gráficos e design — é propriedade da Loop ou dos seus licenciadores e está protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">4. Responsabilidades do Utilizador</h2>
            <p>Ao utilizar este site, compromete-se a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Fornecer informações verdadeiras e atualizadas;</li>
              <li>Não utilizar o site para fins ilícitos ou não autorizados;</li>
              <li>Não tentar aceder a áreas restritas sem autorização.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">5. Limitação de Responsabilidade</h2>
            <p>
              A Loop não se responsabiliza por danos diretos ou indiretos decorrentes da utilização do site ou da impossibilidade de o utilizar, incluindo erros, interrupções ou falhas técnicas.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">6. Links Externos</h2>
            <p>
              O nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">7. Legislação Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer litígio será submetido ao foro da comarca da sede da Loop.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">8. Alterações</h2>
            <p>
              A Loop reserva-se o direito de alterar estes Termos a qualquer momento. As alterações entram em vigor a partir da sua publicação nesta página.
            </p>
          </section>

          <p className="text-xs text-neutral-mid/60 pt-4">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermosDeUso;
