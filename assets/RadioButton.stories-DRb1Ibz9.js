import{as as a,h as l,r as h}from"./iframe-C561pEjZ.js";const p={title:"Components/RadioButton",component:a,tags:["autodocs"],argTypes:{}},r=n=>({components:{VRadioButton:a},setup(){const e=h(null);return{args:n,value:e}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:2},()=>"Выбрать значение 2")])}}),t=r.bind({});t.args={name:"stories"};const u={render:n=>({components:{VRadioButton:a},setup(){const e=h(null);return{args:n,value:e}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l("div",{},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1,position:"left"},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:2},()=>"Выбрать значение 2"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:3,disabled:!0,buttonStyle:"outline"},()=>"Выбрать значение 3"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:4,position:"right",buttonStyle:"outline"},()=>"Выбрать значение 4")]),l("div",{},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1,position:"left",buttonStyle:"solid"},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},buttonStyle:"solid",value:2},()=>"Выбрать значение 2"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:3,disabled:!0,buttonStyle:"solid"},()=>"Выбрать значение 3"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:4,position:"right",buttonStyle:"solid"},()=>"Выбрать значение 4")]),l("div",{},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1,position:"left",buttonStyle:"solid",size:"small"},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},buttonStyle:"solid",value:2,size:"small"},()=>"Выбрать значение 2"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:3,disabled:!0,buttonStyle:"solid",size:"small"},()=>"Выбрать значение 3"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:4,position:"right",buttonStyle:"solid",size:"small"},()=>"Выбрать значение 4")]),l("div",{},[l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:1,position:"left",buttonStyle:"solid",size:"large"},()=>"Выбрать значение 1"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},buttonStyle:"solid",value:2,size:"large"},()=>"Выбрать значение 2"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:3,disabled:!0,buttonStyle:"solid",size:"large"},()=>"Выбрать значение 3"),l(a,{...n,modelValue:this.value,"onUpdate:modelValue":e=>{this.value=e},value:4,position:"right",buttonStyle:"solid",size:"large"},()=>"Выбрать значение 4")])])}}),args:{name:"stories",value:0}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    VRadioButton
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
    }, [h(VRadioButton, {
      ...args,
      modelValue: this.value,
      "onUpdate:modelValue": value => {
        this.value = value;
      },
      value: 1
    }, () => "Выбрать значение 1"), h(VRadioButton, {
      ...args,
      modelValue: this.value,
      "onUpdate:modelValue": value => {
        this.value = value;
      },
      value: 2
    }, () => "Выбрать значение 2")]);
  }
})`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,v,m;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VRadioButton
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
      }, [h("div", {}, [h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 1,
        position: "left"
      }, () => "Выбрать значение 1"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 2
      }, () => "Выбрать значение 2"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 3,
        disabled: true,
        buttonStyle: "outline"
      }, () => "Выбрать значение 3"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 4,
        position: "right",
        buttonStyle: "outline"
      }, () => "Выбрать значение 4")]), h("div", {}, [h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 1,
        position: "left",
        buttonStyle: "solid"
      }, () => "Выбрать значение 1"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        buttonStyle: "solid",
        value: 2
      }, () => "Выбрать значение 2"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 3,
        disabled: true,
        buttonStyle: "solid"
      }, () => "Выбрать значение 3"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 4,
        position: "right",
        buttonStyle: "solid"
      }, () => "Выбрать значение 4")]), h("div", {}, [h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 1,
        position: "left",
        buttonStyle: "solid",
        size: "small"
      }, () => "Выбрать значение 1"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        buttonStyle: "solid",
        value: 2,
        size: "small"
      }, () => "Выбрать значение 2"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 3,
        disabled: true,
        buttonStyle: "solid",
        size: "small"
      }, () => "Выбрать значение 3"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 4,
        position: "right",
        buttonStyle: "solid",
        size: "small"
      }, () => "Выбрать значение 4")]), h("div", {}, [h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 1,
        position: "left",
        buttonStyle: "solid",
        size: "large"
      }, () => "Выбрать значение 1"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        buttonStyle: "solid",
        value: 2,
        size: "large"
      }, () => "Выбрать значение 2"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 3,
        disabled: true,
        buttonStyle: "solid",
        size: "large"
      }, () => "Выбрать значение 3"), h(VRadioButton, {
        ...args,
        modelValue: this.value,
        "onUpdate:modelValue": value => {
          this.value = value;
        },
        value: 4,
        position: "right",
        buttonStyle: "solid",
        size: "large"
      }, () => "Выбрать значение 4")])]);
    }
  }),
  args: {
    name: "stories",
    value: 0
  }
}`,...(m=(v=u.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const y=["Primary","AllInOne"];export{u as AllInOne,t as Primary,y as __namedExportsOrder,p as default};
