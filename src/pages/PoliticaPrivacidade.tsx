const PoliticaPrivacidade = () => {
  return (
    <main className="min-h-screen bg-deep">
      <div className="container mx-auto max-w-3xl px-6 md:px-16 py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-10">
          Política de Privacidade
        </h1>

        <div className="space-y-8 font-body text-sm text-neutral-mid leading-relaxed">
          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">1. Introdução</h2>
            <p>
              A Loop Consultoria e Soluções Empresariais ("Loop", "nós") valoriza a privacidade dos seus utilizadores. Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos as suas informações pessoais quando visita o nosso site ou utiliza os nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">2. Dados Recolhidos</h2>
            <p>Podemos recolher os seguintes tipos de informação:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nome completo e dados de contacto (e-mail, telefone);</li>
              <li>Informações profissionais (empresa, cargo);</li>
              <li>Dados de navegação (cookies, endereço IP, páginas visitadas);</li>
              <li>Informações fornecidas voluntariamente através de formulários.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">3. Utilização dos Dados</h2>
            <p>As informações recolhidas são utilizadas para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Prestar e melhorar os nossos serviços de consultoria;</li>
              <li>Responder a solicitações e pedidos de contacto;</li>
              <li>Enviar comunicações relevantes sobre os nossos serviços;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">4. Partilha de Dados</h2>
            <p>
              Não vendemos nem partilhamos as suas informações pessoais com terceiros, exceto quando necessário para a prestação dos nossos serviços, por exigência legal ou com o seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">5. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda ou destruição.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">6. Os Seus Direitos</h2>
            <p>
              Tem o direito de aceder, corrigir, eliminar ou limitar o tratamento dos seus dados pessoais. Para exercer estes direitos, entre em contacto connosco através do e-mail contato@loopconsultoria.com.br.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-semibold text-primary-foreground mb-3">7. Alterações</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que a reveja regularmente para se manter informado sobre como protegemos os seus dados.
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

export default PoliticaPrivacidade;
