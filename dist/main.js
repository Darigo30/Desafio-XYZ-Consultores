"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Generamos la clase Cliente en base al diagrama de clases
var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Clientes);

    this.nombre = nombre;
    this.impuesto = {};
  }

  _createClass(Clientes, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(val) {
      this.nombre = val;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this.impuesto.impuesto;
    } // En vez de 21% se multiplica por 0.21 y la formula es ((monto_bruto_anual − deducciones) * 21%)

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montoBrutoAnual, deducciones) {
      var impuesto = (montoBrutoAnual - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto: impuesto
      };
    }
  }]);

  return Clientes;
}(); //Generamos la clase Impuestos en base al diagrama de clases


var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBrutoAnual",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "setMontoBrutoAnual",
    set: function set(val) {
      this.monto_bruto_anual = val;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(val) {
      this.deducciones = val;
    }
  }]);

  return Impuestos;
}(); //Capturamos los IDs para trabajar


var nombreCliente = document.getElementById("nombreCliente");
var MontoBrutoAnual = document.getElementById("MontoBrutoAnual");
var DeduccionesCliente = document.getElementById("DeduccionesCliente");
var botonConsultar = document.getElementById("botonConsultar");
var CalculoMonto = document.getElementById("CalculoMonto"); //Creamos evento escucha al hacer click en consultar

botonConsultar.addEventListener("click", function () {
  // Lo normalizamos
  var montoBrutoNormalizado = Number(MontoBrutoAnual.value);
  var deduccionesNormalizado = Number(DeduccionesCliente.value);
  var nombreNormalizado = nombreCliente.value;

  if (!nombreNormalizado || !montoBrutoNormalizado || !deduccionesNormalizado) {
    alert("Por favor, debe escribir todos los datos para calcular el impuesto");
    return;
  }

  var elCliente = new Clientes(nombreNormalizado);
  var elImpuesto = new Impuestos(montoBrutoNormalizado, deduccionesNormalizado);
  elCliente.calcularImpuesto(elImpuesto.getMontoBrutoAnual, elImpuesto.getDeducciones); //Imprimimos el valor en un ID

  CalculoMonto.innerHTML = "<div>El impuesto para ".concat(elCliente.getNombre, " es de: ").concat(elCliente.getImpuesto, "</div>");
});