"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_components_FormFact_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["complete-form"],
  props: {
    id: {
      type: String,
      required: false
    },
    actionform: {
      type: String,
      required: true
    }
  },
  setup: function setup() {
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
    return {
      toast: toast
    };
  },
  components: {
    Fab: (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent)(function () {
      return __webpack_require__.e(/*! import() */ "resources_js_vue_components_Fab_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Fab.vue */ "./resources/js/vue/components/Fab.vue"));
    })
  },
  data: function data() {
    return {
      count: 1,
      factura: this.$store.state.facturas.factura,
      items: this.$store.state.facturas.factura.items
    };
  },
  computed: {
    subTotal: function subTotal() {
      var subTotal = this.getSubTotal();
      var result = numeral(subTotal).format("$ 0,00.00");
      return result;
    },
    iva: function iva() {
      var iva = this.getSubTotal() * 0.19;
      var result = numeral(iva).format("$ 0,00.00");
      return result;
    },
    total: function total() {
      var total = this.getSubTotal() + this.getSubTotal() * 0.19;
      var result = numeral(total).format("$ 0,00.00");
      return result;
    }
  },
  methods: {
    getSubTotal: function getSubTotal() {
      var subTotal = 0;

      for (var i = this.factura.items.length - 1; i >= 0; i--) {
        subTotal += this.factura.items[i].unit_val * this.factura.items[i].cantidad;
      }

      return subTotal;
    },
    handleAdd: function handleAdd() {
      var newItem = {
        item_number: '',
        key: this.count,
        description: "",
        cantidad: "",
        unit_val: ""
      };
      this.count++;
      this.factura.items.push(newItem);
    },
    getItemTotal: function getItemTotal(cost, quantity) {
      return numeral(cost * quantity).format("$ 0,00.00");
    },
    checkEmpty: function checkEmpty() {
      var info = {
        id: JSON.parse(JSON.stringify(this.id)),
        fecha: JSON.parse(JSON.stringify(this.factura.fecha)),
        name_comprador: JSON.parse(JSON.stringify(this.factura.name_comprador)),
        name_emisor: JSON.parse(JSON.stringify(this.factura.name_emisor)),
        nit_comprador: JSON.parse(JSON.stringify(this.factura.nit_comprador)),
        nit_emisor: JSON.parse(JSON.stringify(this.factura.nit_emisor)),
        iva: JSON.parse(JSON.stringify(this.getSubTotal() * 0.19)),
        subtotal: JSON.parse(JSON.stringify(this.getSubTotal())),
        total: JSON.parse(JSON.stringify(this.getSubTotal() + this.getSubTotal() * 0.19))
      };
      var check = this.factura.items.some(function (element) {
        return Object.values(element).some(function (val) {
          return val === null || val === "";
        });
      });
      var check2 = Object.values(info).some(function (val) {
        return val === null || val === "";
      });

      if (check || check2) {
        this.toast.error("Por favor completa toda la información!");
      } else {
        this.$emit('complete-form', info, JSON.parse(JSON.stringify(this.factura.items)));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-62704f9c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card border shadow"
};
var _hoisted_2 = {
  "class": "row d-flex"
};
var _hoisted_3 = {
  "class": "col-6"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "my-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center h3 font"
  }, "Emisor")], -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "form-group row"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "name-vendedor",
    "class": "col-2 col-form-label"
  }, "Nombre", -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "col-9",
  id: "name-vendedor"
};
var _hoisted_8 = {
  "class": "form-group row"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "nit-vendedor",
    "class": "col-2 col-form-label"
  }, "NIT", -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "col-9",
  id: "nit-vendedor"
};
var _hoisted_11 = {
  "class": "form-group row"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "datetimepicker1",
    "class": "col-2 col-form-label"
  }, "Fecha", -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "col-9",
  id: "datetimepicker1"
};
var _hoisted_14 = {
  "class": "col-6"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "my-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center h3 font"
  }, "Comprador")], -1
  /* HOISTED */
  );
});

var _hoisted_16 = {
  "class": "form-group row"
};

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "name-comprador",
    "class": "col-2 col-form-label"
  }, "Nombe", -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "col-9",
  id: "name-comprador"
};
var _hoisted_19 = {
  "class": "form-group row"
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "nit-comprador",
    "class": "col-2 col-form-label"
  }, "NIT", -1
  /* HOISTED */
  );
});

var _hoisted_21 = {
  "class": "col-9",
  id: "nit-comprador"
};
var _hoisted_22 = {
  "class": "d-flex"
};
var _hoisted_23 = {
  "class": "col justify-content-center"
};
var _hoisted_24 = {
  "class": "mx-auto container-factura border-solid"
};
var _hoisted_25 = {
  "class": "table-responsive"
};
var _hoisted_26 = {
  "class": "table mx-auto container-factura text-start"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    scope: "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "col-1"
  }, "Item"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "col-6"
  }, "Descripcion"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "col-1"
  }, "Cantidad"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "col-2 text-center"
  }, "Valor Unit."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "col-2 text-center"
  }, "Total")])], -1
  /* HOISTED */
  );
});

var _hoisted_28 = {
  scope: "row"
};
var _hoisted_29 = {
  "class": "form-group row mx-1"
};
var _hoisted_30 = ["onUpdate:modelValue"];
var _hoisted_31 = {
  "class": "form-group row mx-1"
};
var _hoisted_32 = ["onUpdate:modelValue"];
var _hoisted_33 = {
  "class": "form-group row mx-1"
};
var _hoisted_34 = ["onUpdate:modelValue"];
var _hoisted_35 = {
  "class": "form-group row mx-1"
};
var _hoisted_36 = ["onUpdate:modelValue"];
var _hoisted_37 = {
  "class": "form-group mx-1 text-center"
};
var _hoisted_38 = {
  key: 0,
  "class": "d-flex container-factura mx-auto p-3 border-solid"
};

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-plus"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Añadir Item ");

var _hoisted_41 = [_hoisted_39, _hoisted_40];
var _hoisted_42 = {
  "class": "d-flex container-factura mx-auto"
};
var _hoisted_43 = {
  "class": "ms-auto col-4 text-start"
};

var _hoisted_44 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Fab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fab");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.factura.name_emisor = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.name_emisor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.factura.nit_emisor = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nit_emisor]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.factura.fecha = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.fecha]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.factura.name_comprador = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.name_comprador]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.factura.nit_comprador = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.nit_comprador]])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Factura # " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.factura.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.key
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.factura.items[item.key].item_number = $event;
      },
      "class": "form-control"
    }, null, 8
    /* PROPS */
    , _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.items[item.key].item_number]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.factura.items[item.key].description = $event;
      },
      "class": "form-control"
    }, null, 8
    /* PROPS */
    , _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.items[item.key].description]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.factura.items[item.key].cantidad = $event;
      },
      "class": "form-control"
    }, null, 8
    /* PROPS */
    , _hoisted_34), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.items[item.key].cantidad]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.factura.items[item.key].unit_val = $event;
      },
      "class": "form-control"
    }, null, 8
    /* PROPS */
    , _hoisted_36), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.factura.items[item.key].unit_val]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getItemTotal(item.unit_val, item.cantidad)), 1
    /* TEXT */
    )])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), $props.actionform == 'crear' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.handleAdd && $options.handleAdd.apply($options, arguments);
    })
  }, _hoisted_41)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Subtotal :" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.subTotal), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "IVA(19%):" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.iva), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Total:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.total), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fab, {
    onLaunchAction: $options.checkEmpty,
    action: $props.actionform
  }, null, 8
  /* PROPS */
  , ["onLaunchAction", "action"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "li[data-v-62704f9c] {\n  list-style-type: none;\n}\n.form-group[data-v-62704f9c] {\n  margin-block: 10px;\n}\n.font[data-v-62704f9c] {\n  font-weight: bold;\n}\n.border-solid[data-v-62704f9c] {\n  border-bottom: 3px solid #8a8686b0;\n}\n.container-factura[data-v-62704f9c] {\n  width: 95%;\n}\ntbody[data-v-62704f9c] {\n  border-top: none !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_style_index_0_id_62704f9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_style_index_0_id_62704f9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_style_index_0_id_62704f9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/vue/components/FormFact.vue":
/*!**************************************************!*\
  !*** ./resources/js/vue/components/FormFact.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormFact_vue_vue_type_template_id_62704f9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFact.vue?vue&type=template&id=62704f9c&scoped=true */ "./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true");
/* harmony import */ var _FormFact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFact.vue?vue&type=script&lang=js */ "./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js");
/* harmony import */ var _FormFact_vue_vue_type_style_index_0_id_62704f9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true */ "./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true");
/* harmony import */ var C_xampp_htdocs_test_job_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_test_job_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FormFact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormFact_vue_vue_type_template_id_62704f9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62704f9c"],['__file',"resources/js/vue/components/FormFact.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormFact.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_template_id_62704f9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_template_id_62704f9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormFact.vue?vue&type=template&id=62704f9c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=template&id=62704f9c&scoped=true");


/***/ }),

/***/ "./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormFact_vue_vue_type_style_index_0_id_62704f9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/FormFact.vue?vue&type=style&index=0&id=62704f9c&lang=scss&scoped=true");


/***/ })

}]);