import{h as n,r as E,q as d,s as J,t as v,T as w,v as W,F as c,N as k,X as q}from"./iframe-C561pEjZ.js";import{_ as p}from"./Filter-BnTzyMHz.js";import{g as m}from"./get-date-by-rules-DSbyUWrR.js";const z=p,A={title:"Components/Filter",component:z,tags:["autodocs"],argTypes:{}},O=Array.from({length:30},(l,e)=>({id:e,name:J(10),username:`user_${e}`})),a=[{field:"string",label:"Имя файла",icon:v,components:[{component:"text",props:{placeholder:"Имя файла",allowClear:!0},operatorValue:"equal",operatorLabel:"Равен",operatorShortLabel:"==",clearTag:"text"},{component:"text",props:{placeholder:"Имя файла",allowClear:!0},operatorValue:"!equal",operatorLabel:"Не равен",operatorShortLabel:"!=",clearTag:"text"}]},{field:"long",label:"Очень длинное название поля для компонента фильтра",icon:v,components:[{component:"text"}]},{field:"number",label:"Сумма",icon:w,components:[{component:"number",props:{min:-5,max:5}}]},{field:"range",label:"Количество",icon:W,components:[{component:"number-range"}]},{field:"select",label:"Тип (Несколько)",icon:c,components:[{component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!0,placeholder:"Выберите тип",search:!0},clearTag:"select",operatorValue:"array_some",operatorLabel:"Вхождение хотя бы одного из элементов массива",operatorShortLabel:"∩"},{component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!0,placeholder:"Выберите тип",search:!0},clearTag:"select",operatorValue:"!array_some",operatorLabel:"Отсутствие вхождения хотя бы одним из элементов массива",operatorShortLabel:"!∩"},{component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!0,placeholder:"Выберите тип",search:!0},clearTag:"select",operatorValue:"array_every",operatorLabel:"Вхождение всех элементов массива",operatorShortLabel:"⊂"},{component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!0,placeholder:"Выберите тип",search:!0},clearTag:"select",operatorValue:"!array_every",operatorLabel:"Отсутствие полного вхождения элементов массива",operatorShortLabel:"!⊂"}]},{field:"select_single",label:"Тип (Один)",icon:c,components:[{component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!1,placeholder:"Выберите тип",search:!0}}]},{field:"custom_bool",label:"Кастомный буль",icon:c,components:[{component:"select",props:{options:[{label:"Нет",value:0},{label:"Да",value:1}],clear:!0,multiple:!1,placeholder:"Выберите тип",search:!0}}]},{field:"date",label:"Дата создания",icon:k,components:[{component:"date",operatorLabel:"Дата",operatorValue:"date"},{component:"date",props:{multiple:!0},operatorLabel:"Между датами",operatorValue:"date-range"},{component:"date",props:{multiple:!0},operatorLabel:"Не между датами",operatorValue:"not-date-range"}]},{field:"date-range",label:"Дата изменения",icon:q,components:[{component:"date",props:{multiple:!0},operatorLabel:"Между датами",operatorValue:"date-range",clearTag:"date-range"},{component:"date",props:{multiple:!0},operatorLabel:"Не между датами",operatorValue:"not-date-range",clearTag:"date-range"},{component:"date",operatorLabel:"Дата",operatorValue:"date"}]},{field:"users",label:"Редактор",components:[{component:"user",operatorValue:"equal",operatorLabel:"Равен",props:{users:O,multiple:!0}}]}],f=l=>({components:{VFilter:p},setup(){const e=E([{field:"string",value:"Тестовое"},{field:"long",value:"Очень длинное значение для компонента фильтра"},{field:"range",value:[1,5]},{field:"number",value:0},{field:"custom_bool",value:0},{field:"select",value:[1]},{field:"select_single",value:1},{field:"date",value:d(m([{increment:-1,type:"years"}]),"YYYY-MM-DD")},{field:"date-range",value:[d(m([{increment:-1,type:"years"}]),"YYYY-MM-DD"),d(m([{increment:0,type:"years"}]),"YYYY-MM-DD")]},{field:"users",value:[O[0].id]}]);return{args:l,filterValues:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"100px"}},[n(p,{...l,modelValue:this.filterValues,"onUpdate:modelValue":e=>{this.filterValues=e,console.log("updated")}}),n("div",{},[JSON.stringify(this.filterValues)])])}}),g=l=>({components:{VFilter:p},setup(){const e=E([]);return{args:l,filterValues:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"100px"}},[n("div",{style:{display:"flex",gap:"var(--ksd-filter-gap)",alignItems:"center",flexWrap:"wrap"}},[n(p,{...l,modelValue:this.filterValues,"onUpdate:modelValue":e=>{this.filterValues=e,console.log("updated")}})]),n("div",{},[JSON.stringify(this.filterValues)])])}}),r=f.bind({});r.args={filters:a};const t=f.bind({});t.args={filters:a,buttonSize:"small",controlSize:"small"};const o=f.bind({});o.args={filters:a,buttonSize:"large",controlSize:"large",controlVariant:"filled"};const s=g.bind({});s.args={filters:a};const i=g.bind({});i.args={filters:a,direction:"left"};const u=g.bind({});u.args={filters:a,wrap:!1};var b,V,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([{
      field: "string",
      value: "Тестовое"
    }, {
      field: "long",
      value: "Очень длинное значение для компонента фильтра"
    }, {
      field: "range",
      value: [1, 5]
    }, {
      field: "number",
      value: 0
    }, {
      field: "custom_bool",
      value: 0
    }, {
      field: "select",
      value: [1]
    }, {
      field: "select_single",
      value: 1
    }, {
      field: "date",
      value: dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD")
    }, {
      field: "date-range",
      value: [dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD"), dateFormat(getDateByRules([{
        increment: 0,
        type: "years"
      }]), "YYYY-MM-DD")]
    }, {
      field: "users",
      value: [USERS[0].id]
    }]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    }), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(y=(V=r.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var h,Y,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([{
      field: "string",
      value: "Тестовое"
    }, {
      field: "long",
      value: "Очень длинное значение для компонента фильтра"
    }, {
      field: "range",
      value: [1, 5]
    }, {
      field: "number",
      value: 0
    }, {
      field: "custom_bool",
      value: 0
    }, {
      field: "select",
      value: [1]
    }, {
      field: "select_single",
      value: 1
    }, {
      field: "date",
      value: dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD")
    }, {
      field: "date-range",
      value: [dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD"), dateFormat(getDateByRules([{
        increment: 0,
        type: "years"
      }]), "YYYY-MM-DD")]
    }, {
      field: "users",
      value: [USERS[0].id]
    }]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    }), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(x=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var D,S,F;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([{
      field: "string",
      value: "Тестовое"
    }, {
      field: "long",
      value: "Очень длинное значение для компонента фильтра"
    }, {
      field: "range",
      value: [1, 5]
    }, {
      field: "number",
      value: 0
    }, {
      field: "custom_bool",
      value: 0
    }, {
      field: "select",
      value: [1]
    }, {
      field: "select_single",
      value: 1
    }, {
      field: "date",
      value: dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD")
    }, {
      field: "date-range",
      value: [dateFormat(getDateByRules([{
        increment: -1,
        type: "years"
      }]), "YYYY-MM-DD"), dateFormat(getDateByRules([{
        increment: 0,
        type: "years"
      }]), "YYYY-MM-DD")]
    }, {
      field: "users",
      value: [USERS[0].id]
    }]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    }), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var L,M,_;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h("div", {
      style: {
        display: "flex",
        gap: "var(--ksd-filter-gap)",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    })]), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(_=(M=s.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var R,T,N;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h("div", {
      style: {
        display: "flex",
        gap: "var(--ksd-filter-gap)",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    })]), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var U,I,B;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    VFilter
  },
  setup() {
    const filterValues = ref<FilterItem<string | number, string | number>[]>([]);
    return {
      args,
      filterValues
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
      }
    }, [h("div", {
      style: {
        display: "flex",
        gap: "var(--ksd-filter-gap)",
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, [h(VFilter, {
      ...args,
      modelValue: this.filterValues,
      "onUpdate:modelValue": value => {
        this.filterValues = value;
        // eslint-disable-next-line no-console
        console.log("updated");
      }
    })]), h("div", {}, [JSON.stringify(this.filterValues)])]);
  }
})`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const $=["Primary","Small","Large","Empty","Left","NoWrap"];export{s as Empty,o as Large,i as Left,u as NoWrap,r as Primary,t as Small,$ as __namedExportsOrder,A as default};
