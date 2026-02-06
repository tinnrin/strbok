import{a as e,h as c,r as s,c as h}from"./iframe-C561pEjZ.js";const C={title:"Components/CheckBox",component:e,tags:["autodocs"],argTypes:{}},g=a=>({components:{VCheckBox:e},setup(){return{args:a}},render(){return c("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[c(e,{...a},()=>"Выбрать значение")])}}),d=g.bind({});d.args={};const r={render:a=>({components:{VCheckBox:e},setup(){const n=s(!1),o=s(!1),t=h(()=>n.value&&o.value),x=h(()=>!t.value&&(n.value||o.value));function f(l){o.value=l,n.value=l}return{args:a,checked:n,checkedSecond:o,checkedThird:t,indeterminate:x,onChangeThird:f}},render(){return c("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[c(e,{modelValue:this.checkedThird,"onUpdate:modelValue":this.onChangeThird,indeterminate:this.indeterminate},()=>"Выбрать Оба"),c(e,{modelValue:this.checkedSecond,"onUpdate:modelValue":n=>{this.checkedSecond=n}},()=>"Выбрать значение 1"),c(e,{block:!0,modelValue:this.checked,"onUpdate:modelValue":n=>{this.checked=n}},()=>"Выбрать значение 2"),c(e,{disabled:!0,modelValue:!1},()=>"Disabled checked"),c(e,{disabled:!0,modelValue:!0},()=>"Disabled unchecked")])}}),args:{}};var i,u,m;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    VCheckBox
  },
  setup() {
    return {
      args
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VCheckBox, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var k,p,V;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VCheckBox
    },
    setup() {
      const checked = ref(false);
      const checkedSecond = ref(false);
      const checkedThird = computed(() => checked.value && checkedSecond.value);
      const indeterminate = computed(() => !checkedThird.value && (checked.value || checkedSecond.value));
      function onChangeThird(check: boolean) {
        checkedSecond.value = check;
        checked.value = check;
      }
      return {
        args,
        checked,
        checkedSecond,
        checkedThird,
        indeterminate,
        onChangeThird
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VCheckBox, {
        modelValue: this.checkedThird,
        "onUpdate:modelValue": this.onChangeThird,
        indeterminate: this.indeterminate
      }, () => "Выбрать Оба"), h(VCheckBox, {
        modelValue: this.checkedSecond,
        "onUpdate:modelValue": newValue => {
          this.checkedSecond = newValue;
        }
      }, () => "Выбрать значение 1"), h(VCheckBox, {
        block: true,
        modelValue: this.checked,
        "onUpdate:modelValue": newValue => {
          this.checked = newValue;
        }
      }, () => "Выбрать значение 2"), h(VCheckBox, {
        disabled: true,
        modelValue: false
      }, () => "Disabled checked"), h(VCheckBox, {
        disabled: true,
        modelValue: true
      }, () => "Disabled unchecked")]);
    }
  }),
  args: {}
}`,...(V=(p=r.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};const T=["Primary","AllInOne"];export{r as AllInOne,d as Primary,T as __namedExportsOrder,C as default};
