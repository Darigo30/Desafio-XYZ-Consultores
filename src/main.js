//Generamos la clase Cliente en base al diagrama de clases

class Clientes {
    constructor(nombre, impuesto = {}) {
      this.nombre = nombre;
      this.impuesto = {}
    }
    get getNombre() {
      return this.nombre;
    }
    set setNombre(val) {
      this.nombre = val;
    }
    get getImpuesto() {
      return this.impuesto.impuesto;
    }
    // En vez de 21% se multiplica por 0.21 y la formula es ((monto_bruto_anual − deducciones) * 21%)
    calcularImpuesto(montoBrutoAnual, deducciones) {
      const impuesto = (montoBrutoAnual - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto,
      };
    }
  }

//Generamos la clase Impuestos en base al diagrama de clases
  class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
      this.monto_bruto_anual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
    get getMontoBrutoAnual() {
      return this.monto_bruto_anual;
    }
    set setMontoBrutoAnual(val) {
      this.monto_bruto_anual = val;
    }
    get getDeducciones() {
      return this.deducciones;
    }
    set setDeducciones(val) {
      this.deducciones = val;
    }
  }

//Capturamos los IDs para trabajar
  const nombreCliente = document.getElementById("nombreCliente");
  const MontoBrutoAnual = document.getElementById("MontoBrutoAnual");
  const DeduccionesCliente = document.getElementById("DeduccionesCliente");
  const botonConsultar = document.getElementById("botonConsultar");
  const CalculoMonto = document.getElementById("CalculoMonto");

//Creamos evento escucha al hacer click en consultar
  botonConsultar.addEventListener("click", () => {
    // Lo normalizamos
    const montoBrutoNormalizado = Number(MontoBrutoAnual.value);
    const deduccionesNormalizado = Number(DeduccionesCliente.value);
    const nombreNormalizado = nombreCliente.value;

    if (
      !nombreNormalizado ||
      !montoBrutoNormalizado ||
      !deduccionesNormalizado
    ) {
      alert("Por favor, debe escribir todos los datos para calcular el impuesto");
      return;
    }
    const elCliente = new Clientes(nombreNormalizado);
    const elImpuesto = new Impuestos(
      montoBrutoNormalizado,
      deduccionesNormalizado
    );

    elCliente.calcularImpuesto(
      elImpuesto.getMontoBrutoAnual,
      elImpuesto.getDeducciones
    );
//Imprimimos el valor en un ID
  CalculoMonto.innerHTML = `<div>El impuesto para ${elCliente.getNombre} es de: ${elCliente.getImpuesto}</div>`;
  });