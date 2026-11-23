/* MÊS 02 — continuação para quem fez o Mês 01 (Turma Fundadora, 23/11 a 18/12/2026). */
/* ====== PROGRAMA — para uma nova turma, edite só este bloco ====== */
const PROGRAMA = {
  turma: "Turma Fundadora · Mês 02",
  fim: "2026-12-21", /* a partir deste dia (00h de Brasília) os treinos saem do ar */
  /* e-mails liberados, guardados embaralhados (SHA-256 do e-mail em minúsculas) */
  acessos: [
    "89e2cb63e85179db3972426e4e5a2bcd0e9293661678d13a2a4337eb3af78ae8",
    "cb16490838554aadaf54cf3c67f390aa719396903ca71616479394ebffd695a6",
    "a49726ef081b73f0acb38ee1f944d505c180c8349b4c1a9933c7f36e0210bdad"
  ],
  /* registro de uso: link do Google Forms (formResponse) e os ids dos campos. Vazio = desligado */
  registro: {url:"", email:"", aparelho:"", evento:""},
  semanas: [
    {n:1, nome:"achar as cargas", datas:"23 a 27/11", inicio:"2026-11-23", foco:"pirâmide com folga de 3",
     texto:"Nos 2 primeiros exercícios a carga sobe a cada série (12, 10, 8). Na série de 8 tem que sobrar umas 3 repetições. Anote a carga da série de 8."},
    {n:2, nome:"subir", datas:"30/11 a 4/12", inicio:"2026-11-30", foco:"pirâmide com folga de 2",
     texto:"Mesma pirâmide com mais carga. Na série de 8, sobrar umas 2 repetições."},
    {n:3, nome:"mais carga", datas:"7 a 11/12", inicio:"2026-12-07", foco:"folga de 1 a 2 · tri-set com 4 voltas",
     texto:"Suba de novo. Na série de 8, sobrar 1 ou 2 repetições sem perder a técnica. O tri-set do fim ganha uma volta."},
    {n:4, nome:"semana de recorde", datas:"14 a 18/12", inicio:"2026-12-14", foco:"maior carga do mês",
     texto:"Tente a maior carga do mês na série de 8, com técnica limpa."}
  ],
  cardio: [
    {titulo:"Intervalado curto", desc:"6 vezes: 2 min forte + 1 min leve (18 min), na esteira, bike ou elíptico.", anotar:"velocidade no forte"},
    {titulo:"35 minutos sem parar", desc:"35 min contínuos num ritmo em que dá pra conversar.", anotar:"distância"},
    {titulo:"Subida", desc:"8 vezes: 1 min de esteira bem inclinada (10 a 15%) + 1 min plano e leve (16 min).", anotar:"inclinação e velocidade"},
    {titulo:"Desafio 5 km · revanche", desc:"Os mesmos 5 km do fim do mês 1. A meta é baixar o seu tempo.", anotar:"tempo total"}
  ],
  /* tipos: pir = pirâmide (3 séries, carga sobe a cada série) · normal = séries iguais · tri = tri-set no fim */
  treinos: {
    A:{dia:"segunda", enfase:"ênfase quadríceps e glúteo",
      mob:[["Mobilidade de tornozelo ajoelhada","2 x 10 cada lado","mobilidade de tornozelo ajoelhado joelho à frente"],
           ["Agachamento cossaco","2 x 6 cada lado","agachamento cossaco mobilidade execução"],
           ["Gato-camelo (coluna)","2 x 8","gato camelo mobilidade coluna"]],
      ex:[
        {nome:"Agachamento no smith", tipo:"pir", reps:"12 / 10 / 8", desc:75, aquece:true, prog:"fez a pirâmide com folga? semana que vem: +5 kg na barra (2,5 de cada lado)", q:"agachamento no smith execução correta"},
        {nome:"Leg press 45°", tipo:"pir", reps:"12 / 10 / 8", desc:75, prog:"fez a pirâmide com folga? semana que vem: +10 kg (5 kg de cada lado)", q:"Leg press 45° execução correta"},
        {nome:"Elevação pélvica (hip thrust) com barra", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +5 kg na barra", q:"elevação pélvica com barra execução correta"},
        {nome:"Supino reto com halteres", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Supino reto com halteres execução correta"},
        {nome:"Puxada frontal pegada aberta", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"puxada frontal pegada aberta execução correta"},
        {nome:"Tri-set metabólico", tipo:"tri", desc:60, voltas:[3,3,4,4],
         itens:[["Cadeira abdutora","15","Cadeira abdutora execução correta"],
                ["Agachamento com peso do corpo","15","agachamento livre peso corporal execução"],
                ["Prancha frontal",["30s","35s","40s","45s"],"Prancha frontal execução correta"]]}
      ]},
    B:{dia:"quarta", enfase:"ênfase posterior e glúteo",
      mob:[["Abertura de quadril em pé (portão)","2 x 6 cada lado","mobilidade de quadril em pé abrir e fechar o portão"],
           ["Caminhada com as mãos (inchworm)","2 x 5","inchworm caminhada com as mãos mobilidade"],
           ["Rotação torácica em quatro apoios","2 x 8 cada lado","rotação torácica quatro apoios mobilidade"]],
      ex:[
        {nome:"Terra romeno com barra ou kettlebell", tipo:"pir", reps:"12 / 10 / 8", desc:75, aquece:true, prog:"fez a pirâmide com folga? semana que vem: barra +4 kg ou o próximo kettlebell", q:"levantamento terra romeno com barra execução correta"},
        {nome:"Agachamento búlgaro", tipo:"pir", reps:"10 / 8 / 6 cada perna", desc:75, prog:"fez a pirâmide com folga? semana que vem: +1 kg em cada halter", q:"Agachamento búlgaro execução correta"},
        {nome:"Cadeira flexora", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Cadeira flexora execução correta"},
        {nome:"Remada baixa", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 placa (ou +2 kg)", q:"Remada baixa execução correta"},
        {nome:"Desenvolvimento com halteres sentada", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Desenvolvimento com halteres sentada execução correta"},
        {nome:"Tri-set metabólico", tipo:"tri", desc:60, voltas:[3,3,4,4],
         itens:[["Glúteo na polia (coice)","12 cada perna","glúteo coice na polia execução"],
                ["Flexão de braço inclinada no banco","10","flexão de braço inclinada no banco execução"],
                ["Dead bug",["8 cada lado","10 cada lado","10 cada lado","12 cada lado"],"Dead bug execução correta"]]}
      ]},
    C:{dia:"sexta", enfase:"ênfase glúteo",
      mob:[["Alongamento do maior do mundo (world's greatest stretch)","2 x 5 cada lado","world's greatest stretch execução"],
           ["Ponte de glúteo com marcha","2 x 10 (alternando)","ponte de glúteo com marcha execução"],
           ["Deslizamento de braços na parede","2 x 10","wall slide deslizamento na parede ombro"]],
      ex:[
        {nome:"Agachamento sumô com halter", tipo:"pir", reps:"12 / 10 / 8", desc:75, aquece:true, prog:"fez a pirâmide com folga? semana que vem: +2 kg no halter", q:"Agachamento sumô com halter execução correta"},
        {nome:"Passada andando com halteres", tipo:"pir", reps:"10 / 8 / 6 cada perna", desc:75, prog:"fez a pirâmide com folga? semana que vem: +1 kg em cada halter", q:"passada andando com halteres execução correta"},
        {nome:"Extensão de quadril no banco 45°", tipo:"normal", series:3, reps:"12–15", desc:45, prog:"fez 15 em todas as séries? semana que vem: segure uma anilha e suba 2 kg", q:"Extensão de quadril no banco 45° execução correta"},
        {nome:"Supino inclinado com halteres", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +1 kg em cada halter", q:"Supino inclinado com halteres execução correta"},
        {nome:"Remada unilateral com halter", tipo:"normal", series:3, reps:"10–12", desc:45, prog:"fez 12 em todas as séries? semana que vem: +2 kg no halter", q:"Remada unilateral com halter execução correta"},
        {nome:"Tri-set metabólico", tipo:"tri", desc:60, voltas:[3,3,4,4],
         itens:[["Cadeira extensora","15","Cadeira extensora execução correta"],
                ["Subida no banco (step-up)","10 cada perna","step up no banco execução"],
                ["Abdominal bicicleta","20 (10 cada lado)","abdominal bicicleta execução correta"]]}
      ]}
  }
};
/* ====== fim do programa ====== */
