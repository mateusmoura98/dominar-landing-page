import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Shield,
  CreditCard,
  Clock,
  Wallet,
  Leaf,
  Settings,
  Snowflake,
  Star,
  Quote,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5500000000000";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
          Dominar <span className="text-primary">Climatização</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:bg-whatsapp-hover transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs sm:text-sm">
            <MapPin className="h-3.5 w-3.5" />
            [Sua Cidade] e Região Metropolitana
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Seu Ar Gelando de Verdade,<br className="hidden sm:block" /> Sem Surpresa
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
            Limpeza profissional de ar-condicionado com agendamento rápido e preço justo. Atendemos toda [Sua Cidade].
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-black/10 hover:bg-whatsapp-hover transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ver Preços <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Shield, text: "Garantia 1 mês" },
              { icon: CreditCard, text: "Pix, cartão 3x" },
              { icon: Clock, text: "Seg-Sáb 08h-18h" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-white/90">
                <Icon className="h-4 w-4" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Wallet, title: "Conta de Luz Menor", text: "Um ar sujo consome até 25% mais energia. Depois da limpeza, ele trabalha menos pra gelar mais – e você sente no bolso." },
    { icon: Leaf, title: "Ar Mais Saudável", text: "Poeira, mofo e bactérias se acumulam no aparelho e vão direto para o seu pulmão. A limpeza elimina isso." },
    { icon: Settings, title: "Aparelho Durando Mais", text: "Manutenção regular evita defeitos e prolonga a vida útil do seu ar. É melhor cuidar pra não gastar com troca depois." },
    { icon: Snowflake, title: "Conforto de Verdade", text: "Ar gelando rápido, sem barulho estranho e sem mau cheiro. Sua casa do jeito que tem que ser – fresca e agradável." },
  ];
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Por Que Escolher a Dominar Climatização
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Benefícios de um ar-condicionado <span className="text-primary font-extrabold">limpo</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-primary-light bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { title: "Split 9.000 a 12.000 BTUs", text: "O modelo mais comum em quartos e salas. Limpeza completa com higienização.", price: "R$ 120", unit: "/ unidade", highlight: false, cta: "Solicitar" },
    { title: "Split + Condensadora", text: "Limpeza interna + unidade externa. Manutenção completa de verdade.", price: "R$ 170", unit: "/ unidade", highlight: true, cta: "Agendar Agora" },
    { title: "Split 18.000 a 30.000 BTUs", text: "Para aparelhos maiores, de salas e ambientes amplos. Mesmo cuidado.", price: "R$ 180", unit: "/ unidade", highlight: false, cta: "Solicitar" },
    { title: "Piso-Teto 30-60k BTUs", text: "Modelos piso-teto, comuns em comércios e salas grandes.", price: "R$ 250", unit: "/ unidade", highlight: false, cta: "Solicitar" },
  ];
  return (
    <section id="servicos" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Preço Justo, Sem Taxa Escondida
          </h2>
          <p className="mt-4 text-muted-foreground">
            Confira os valores para cada tipo de aparelho. Sem surpresa na hora de pagar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-2xl bg-card p-6 flex flex-col ${
                p.highlight
                  ? "border-2 border-primary shadow-xl lg:scale-[1.03]"
                  : "border border-border shadow-sm"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                  Mais Vendido
                </div>
              )}
              <h3 className="text-base font-bold text-foreground min-h-12">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.text}</p>
              <div className="mt-6">
                <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                <span className="ml-1 text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover"
                    : "border border-primary text-primary hover:bg-primary-light"
                }`}
              >
                {p.highlight && <MessageCircle className="h-4 w-4" />}
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          Condensadora adicional + R$ 50 em qualquer serviço
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: 1, title: "Chame no WhatsApp", text: "Mande uma mensagem e informe o tipo do seu aparelho e o bairro." },
    { n: 2, title: "Agende o Melhor Dia", text: "Escolha o dia e horário que funciona pra você. Simples assim." },
    { n: 3, title: "Receba a Equipe", text: "Nosso técnico chega no horário, faz a limpeza e você sente a diferença na hora." },
  ];
  return (
    <section id="como-funciona" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Simples Assim: 3 Passos e Pronto
          </h2>
          <p className="mt-4 text-muted-foreground">Sem burocracia. Rápido e direto.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground text-2xl font-extrabold shadow-lg shadow-primary/30">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "Meu ar tava com um cheiro horrível, tipo mofo. Chamei a Dominar e no mesmo dia já tava resolvido. O rapaz foi super pontual e educado. Agora tá gelando que é uma beleza!", name: "Rafaela Souza" },
    { text: "Deixei o ar sem limpar por quase 2 anos e ele não gelava, a conta de luz tava um absurdo. Depois da limpeza a diferença foi nítida na hora. Recomendo demais.", name: "Tiago Conceição" },
    { text: "Minha rinite tava atacando e eu achava que era gripe. Uma amiga me indicou a Dominar, fizeram a limpeza e melhorou muito. Agora faço a cada 6 meses, não abro mão.", name: "Sônia Marlene Santos" },
  ];
  return (
    <section id="depoimentos" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          O que nossos clientes dizem
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-card p-6 shadow-sm border border-border flex flex-col">
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-star text-star" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{r.text}"</p>
              <p className="mt-6 text-sm font-semibold text-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-extrabold text-background">Dominar Climatização</p>
            <p className="mt-1 text-sm text-background/60">
              © {new Date().getFullYear()} Dominar Climatização. Todos os direitos reservados.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground hover:bg-whatsapp-hover transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Agende sua limpeza hoje mesmo
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl hover:bg-whatsapp-hover transition-colors animate-wa-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
