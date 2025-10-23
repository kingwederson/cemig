function calcularDebitos() {
      var corpodetabela = document.getElementById('corpodetabela');
      debitos.forEach(function(debito, i) {
            if(i==0){
                  corpodetabela.innerHTML += `
                      <tr>
                          <td>${debito.ref}</td>
                          <td class="num">${debito.medida_global} kWh</td>
                          <td class="num">${debito.consumo_global} kWh</td>
                          <td class="num">R$ ${debito.cobranca_global.toFixed(2)}</td>
                          <td>sem medida</td>
                          <td class="num">${debito.consumo_casa1} kWh</td>
                          <td class="num">R$ ${debito.cobranca_casa1.toFixed(2)}</td>
                          <td class="num">${debito.medida_casa2.toFixed(1)} kWh</td>
                          <td class="num">${debito.consumo_casa2.toFixed(1)} kWh</td>
                          <td class="num">R$ ${debito.cobranca_casa2.toFixed(2)}</td>
                      </tr>
                  `;
            }
            if(i>0){ // Ignora o primeiro elemento (índice 0)
                  debito.consumo_global = debito.medida_global - debitos[i - 1].medida_global;
                  debito.consumo_casa2 = debito.medida_casa2 - debitos[i - 1].medida_casa2;
                  debito.consumo_casa1 = debito.consumo_global - debito.consumo_casa2;
                  debito.cobranca_casa1 = debito.cobranca_global * debito.consumo_casa1 / debito.consumo_global;
                  debito.cobranca_casa2 = debito.cobranca_global * debito.consumo_casa2 / debito.consumo_global;
                  corpodetabela.innerHTML += `
                      <tr>
                          <td>${debito.ref}</td>
                          <td class="num">${debito.medida_global} kWh</td>
                          <td class="num">${debito.consumo_global} kWh</td>
                          <td class="num">R$ ${debito.cobranca_global.toFixed(2)}</td>
                          <td>sem medida</td>
                          <td class="num">${debito.consumo_casa1} kWh</td>
                          <td class="num">R$ ${debito.cobranca_casa1.toFixed(2)}</td>
                          <td class="num">${debito.medida_casa2.toFixed(1)} kWh</td>
                          <td class="num">${debito.consumo_casa2.toFixed(1)} kWh</td>
                          <td class="num">R$ ${debito.cobranca_casa2.toFixed(2)}</td>
                      </tr>
                  `;
            }
    });
}