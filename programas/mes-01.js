/* MÊS 01 — programa base para novas alunas (versão da Turma Fundadora, 19/10 a 15/11/2026).
   Para reutilizar: trocar turma, datas, fim e acessos. */
/* ====== PROGRAMA — para uma nova turma, edite só este bloco ====== */
const PROGRAMA = {
  turma: "Turma Fundadora",
  fim: "2026-11-16", /* a partir deste dia (00h de Brasília) os treinos saem do ar */
  /* e-mails liberados, guardados embaralhados (SHA-256 do e-mail em minúsculas) */
  acessos: [
    "89e2cb63e85179db3972426e4e5a2bcd0e9293661678d13a2a4337eb3af78ae8",
    "cb16490838554aadaf54cf3c67f390aa719396903ca71616479394ebffd695a6",
    "a49726ef081b73f0acb38ee1f944d505c180c8349b4c1a9933c7f36e0210bdad",
    "1f036cfe9c7bdeab8d40ba4f120addcb4e1495fb093b5ec0bd390bdc94cac09a"
  ],
  /* registro de uso: link do Google Forms (formResponse) e os ids dos campos. Vazio = desligado */
  registro: {url:"", email:"", aparelho:"", evento:""},
  semanas: [
    {n:1, nome:"aprender", datas:"19 a 23/10", inicio:"2026-10-19", series:2,
     texto:"2 séries em cada exercício. Escolha uma carga em que sobrariam umas 4 repetições no fim da série. Foco total na técnica."},
    {n:2, nome:"volume", datas:"26 a 30/10", inicio:"2026-10-26", series:3,
     texto:"Agora são 3 séries. A carga deve deixar sobrar umas 3 repetições."},
    {n:3, nome:"carga", datas:"2 a 6/11", inicio:"2026-11-02", series:3,
     texto:"Use a regra de progressão: quem bateu o topo das repetições na semana 2 sobe a carga. Sobrar umas 2 repetições."},
    {n:4, nome:"semana mais forte", datas:"9 a 13/11", inicio:"2026-11-09", series:3,
     texto:"A semana mais pesada do mês. Nas máquinas, sobrar 1 repetição. No peso livre (halter e barra), sobrar 2, sem perder a técnica."}
  ],
  cardio: [
    {titulo:"Caminhada inclinada", desc:"20 min contínuos na esteira, inclinação entre 8 e 12%.", anotar:"inclinação e velocidade"},
    {titulo:"30 minutos sem parar", desc:"30 min de bike, esteira ou elíptico, num ritmo em que dá pra conversar.", anotar:"distância"},
    {titulo:"Intervalado 5x5", desc:"5 vezes: 3 min forte + 2 min leve (25 min no total).", anotar:"velocidade no forte"},
    {titulo:"Desafio 5 km", desc:"5 km caminhando, trotando ou correndo, do jeito que der. Guarde esse tempo: no próximo mês a meta é baixar ele.", anotar:"tempo total"}
  ],
  treinos: {
    A:{dia:"segunda", enfase:"ênfase quadríceps e glúteo",
      mob:[["Mobilidade de quadril 90/90","2 x 8 cada lado","mobilidade de quadril 90 90"],
           ["Agachamento com pausa embaixo (peso do corpo)","2 x 8","Agachamento com pausa embaixo (peso do corpo) execução correta"],
           ["Ponte de glúteo","2 x 12","Ponte de glúteo execução correta"]],
      ex:[
        {nome:"Agachamento goblet com halter", reps:"10–12", desc:60, aquece:true, prog:"fez 12 em todas as séries? semana que vem: +2 kg no halter", q:"Agachamento goblet com halter execução correta"},
        {nome:"Leg press 45°", reps:"10–12", desc:60, prog:"fez 12 em todas as séries? semana que vem: +5 kg (2,5 kg de cada lado)", q:"Leg press 45° execução correta"},
        {nome:"Elevação pélvica (hip thrust) com barra", reps:"10–12", desc:60, prog:"fez 12 em todas as séries? semana que vem: +5 kg na barra", q:"elevação pélvica com barra execução correta"},
        {nome:"Supino reto com halteres", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Supino reto com halteres execução correta"},
        {nome:"Puxada frontal com triângulo", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"puxada frontal com triângulo pegada neutra execução"},
        {nome:"Cadeira abdutora", reps:"12–15", desc:45, prog:"fez 15 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Cadeira abdutora execução correta"},
        {nome:"Prancha frontal", reps:["30s","35s","40s","45s"], desc:30, semCarga:true, prog:"o tempo sobe sozinho a cada semana", q:"Prancha frontal execução correta"}
      ]},
    B:{dia:"quarta", enfase:"ênfase posterior e glúteo",
      mob:[["Mobilidade de tornozelo na parede","2 x 10 cada lado","Mobilidade de tornozelo na parede execução correta"],
           ["Good morning sem carga","2 x 10","Good morning sem carga execução correta"],
           ["Ponte de glúteo unilateral","2 x 8 cada lado","Ponte de glúteo unilateral execução correta"]],
      ex:[
        {nome:"Levantamento terra romeno com halteres", reps:"10–12", desc:60, aquece:true, prog:"fez 12 em todas as séries? semana que vem: +2 kg em cada halter", q:"Levantamento terra romeno com halteres execução correta"},
        {nome:"Agachamento búlgaro", reps:"8–10 cada perna", desc:60, prog:"fez 10 em todas as séries? semana que vem: +1 kg em cada halter", q:"Agachamento búlgaro execução correta"},
        {nome:"Cadeira flexora", reps:"12–15", desc:45, prog:"fez 15 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Cadeira flexora execução correta"},
        {nome:"Remada baixa", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Remada baixa execução correta"},
        {nome:"Desenvolvimento com halteres sentada", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Desenvolvimento com halteres sentada execução correta"},
        {nome:"Glúteo na polia (coice)", reps:"12–15 cada perna", desc:45, prog:"fez 15 em todas as séries? semana que vem: +1 placa (ou +1 kg)", q:"glúteo coice na polia execução"},
        {nome:"Dead bug", reps:["8 cada lado","10 cada lado","10 cada lado","12 cada lado"], desc:30, semCarga:true, prog:"as repetições sobem sozinhas a cada semana", q:"Dead bug execução correta"}
      ]},
    C:{dia:"sexta", enfase:"ênfase glúteo",
      mob:[["Mobilidade de quadril 90/90","2 x 8 cada lado","mobilidade de quadril 90 90"],
           ["Rotação torácica no chão (livro aberto)","2 x 8 cada lado","rotação torácica livro aberto mobilidade"],
           ["Ponte de glúteo","2 x 12","Ponte de glúteo execução correta"]],
      ex:[
        {nome:"Agachamento sumô com halter", reps:"10–12", desc:60, aquece:true, prog:"fez 12 em todas as séries? semana que vem: +2 kg no halter", q:"Agachamento sumô com halter execução correta"},
        {nome:"Recuo (passada para trás) com halteres", reps:"10 cada perna", desc:60, prog:"fez 10 em todas as séries? semana que vem: +1 kg em cada halter", q:"recuo afundo para trás com halteres execução"},
        {nome:"Extensão de quadril no banco 45°", reps:"12–15", desc:45, prog:"fez 15 em todas as séries? semana que vem: segure uma anilha e suba 2 kg", q:"Extensão de quadril no banco 45° execução correta"},
        {nome:"Supino inclinado com halteres", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Supino inclinado com halteres execução correta"},
        {nome:"Remada unilateral com halter", reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +2 kg no halter", q:"Remada unilateral com halter execução correta"},
        {nome:"Cadeira extensora", reps:"12–15", desc:45, prog:"fez 15 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Cadeira extensora execução correta"},
        {nome:"Prancha lateral", reps:["20s cada lado","25s cada lado","30s cada lado","30s cada lado"], desc:30, semCarga:true, prog:"o tempo sobe sozinho a cada semana", q:"Prancha lateral execução correta"}
      ]}
  }
};
/* ====== fim do programa ====== */
