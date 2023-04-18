


const jurosSimples = (C,i,t) => C * i * t;

const montanteSimples =({jurosSimples}) =>(C, i, t) => C + jurosSimples(C, i, t)

const montanteJurosCompostos = (C,i,t) => C * Math.pow((1+i),t)

const jurosCompostos = ({montanteJurosCompostos}) => (C, i, t) => montanteJurosCompostos(C,i,t) - C
module.exports = {
     jurosSimples,
     montanteSimples: montanteSimples({jurosSimples}),
     montanteJurosCompostos,
     pure: {
          montanteSimples,
          jurosCompostos
          
     }
}