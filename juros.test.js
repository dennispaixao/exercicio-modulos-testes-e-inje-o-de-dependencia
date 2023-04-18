const juros = require('./juros');

test('juros simples', ()=>{
    const C = 100;
    const i = 0.10;
    const t = 1;
    const jurosEsperado = 10;
    const jurosCalc = juros.jurosSimples(C,i, t);
    expect(jurosCalc).toBe(jurosEsperado);


})
test('juros simples', ()=>{
    const C = 100;
    const i = 0.10;
    const t = 0;
    const jurosEsperado = 0;
    const jurosCalc = juros.jurosSimples(C,i, t);
    expect(jurosCalc).toBe(jurosEsperado);


})

test('juros simples', ()=>{
    const C = 100;
    const i = 0.10;
    const t = 10;
    const jurosEsperado = 100;
    const jurosCalc = juros.jurosSimples(C,i, t);
    expect(jurosCalc).toBe(jurosEsperado);


})

test('montante simples', ()=>{
    const C = 100;
    const i = 0.10;
    const t = 1;
    const montanteEsperado = 110;
    const jurosSimples = jest.fn();
    jurosSimples.mockImplementation(()=>10)
    const montanteSimples = juros.pure.montanteSimples({jurosSimples});
    const montante = montanteSimples( C, i, t)
    expect(jurosSimples.mock.calls[0]).toEqual([C,i,t]);
    expect(montante).toBe(montanteEsperado);
    
})


test('montante juros compostos', ()=>{
    const C = 1000;
    const i = 0.10;
    const t = 1;
    const jurosEsperado = 1100;
    const jurosCalc = juros.montanteJurosCompostos(C,i, t);
    expect(jurosCalc).toBe(jurosEsperado);


})

test('juros compostos', ()=>{
    const C = 1000;
    const i = 0.10;
    const t = 1;
    const jurosEsperado = 100;
    const montanteJurosCompostos = jest.fn();
    montanteJurosCompostos.mockImplementation(()=>1100)
    const jurosCompostos = juros.pure.jurosCompostos({montanteJurosCompostos});
    const jurosCalc = jurosCompostos( C, i, t)
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C,i,t]);
    expect(jurosCalc).toBe(jurosEsperado);

    
    
})

