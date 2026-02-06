import{ar as a,h as l,r as m}from"./iframe-C561pEjZ.js";const V={title:"Components/Radio",component:a,tags:["autodocs"],argTypes:{}},p=n=>({components:{VRadio:a},setup(){const e=m(null);return{args:n,value:e}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:2},()=>"Выбрать значение 2")])}}),u=p.bind({});u.args={name:"stories"};const o={render:n=>({components:{VRadio:a},setup(){const e=m(null);return{args:n,value:e}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:2},()=>"Выбрать значение 2"),l(a,{...n,modelValue:this.value,value:3,disabled:!0},()=>"Выбрать значение 3"),l(a,{...n,modelValue:5,value:5,disabled:!0},()=>"Выбрать значение 4")])}}),args:{name:"stories",value:0}};var s,r,t;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VRadio
  },
  setup() {
    const value = ref(null);
    return {
      args,
      value
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VRadio, {
      ...args,
      modelValue: this.value,
      "onUpdate:modelValue": value => {
        this.value = value;
      },
      value: 1
    }, () => "Выбрать значение 1"), h(VRadio, {
      ...args,
      modelValue: this.value,
      "onUpdate:modelValue": value => {
        this.value = value;
      },
      value: 2
    }, () => "Выбрать значение 2")]);
  }
})`,...(t=(r=u.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var d,i,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VRadio
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VRadio, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 1
      }, () => "Выбрать значение 1"), h(VRadio, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 2
      }, () => "Выбрать значение 2"), h(VRadio, {
        ...args,
        modelValue: this.value,
        value: 3,
        disabled: true
      }, () => "Выбрать значение 3"), h(VRadio, {
        ...args,
        modelValue: 5,
        value: 5,
        disabled: true
      }, () => "Выбрать значение 4")]);
    }
  }),
  args: {
    name: "stories",
    value: 0
  }
}`,...(v=(i=o.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};const h=["Primary","AllInOne"];export{o as AllInOne,u as Primary,h as __namedExportsOrder,V as default};
