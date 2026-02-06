import{l as n,h as e,S as d,j as s,w as x,c as S}from"./iframe-C561pEjZ.js";const w={title:"Components/Select",component:n,tags:["autodocs"],argTypes:{}},y=l=>({components:{VSelect:n},setup(){return{args:l}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{...l,style:{width:"200px"}},()=>"Выбрать значение")])}}),t=y.bind({});t.args={options:Array.from({length:100},(l,a)=>({label:`Значение ${a}`,value:a}))};const r={render:l=>({components:{VSelect:n},setup(){const a=x([]),b=S(()=>l.options.filter(o=>"value"in o&&!a.value.includes(o.value)));return{args:l,filteredOptions:b,result:a}},render(){return e("div",{},[e(n,{...l,options:this.filteredOptions,labelOptions:l.options,modelValue:this.result,placeholder:"Обычный",multiple:!1,"onUpdate:modelValue":a=>{this.result=a??[]},style:{width:"300px"}})])}}),args:{options:[{value:1,label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"},{value:4,label:"Очень Длинное значение для проверки размеров у селектов 4"},{value:5,label:"Значение 5",desc:e("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},[e(d,{size:14}),e(s,{},()=>"Особое значение 5")])}]}},i={render:l=>({components:{VSelect:n},setup(){return{args:l}},render(){return e("div",{style:{display:"flex",gap:"20px"}},[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"200px"}},[e(n,{...l,modelValue:void 0,placeholder:"Обычный"}),e(n,{...l,modelValue:"Test",placeholder:"Без очистки",clear:!1}),e(n,{...l,modelValue:"Test",placeholder:"С выбранным значением"}),e(n,{...l,modelValue:void 0,placeholder:"Без поиска",search:!1}),e(n,{...l,modelValue:void 0,placeholder:"Filled",variant:"filled"}),e(n,{...l,modelValue:void 0,placeholder:"Borderless",variant:"borderless"}),e(n,{...l,modelValue:void 0,placeholder:"Underline",variant:"underline"}),e(n,{...l,modelValue:void 0,placeholder:"Small",size:"small"}),e(n,{...l,modelValue:void 0,placeholder:"Large",size:"large"})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"200px"}},[e(n,{...l,modelValue:void 0,placeholder:"Outline Error",variant:"outlined",status:"error"}),e(n,{...l,modelValue:void 0,placeholder:"Filled Error",variant:"filled",status:"error"}),e(n,{...l,modelValue:void 0,placeholder:"Borderless Error",variant:"borderless",status:"error"}),e(n,{...l,modelValue:void 0,placeholder:"Underline Error",variant:"underline",status:"error"}),e(n,{...l,modelValue:void 0,placeholder:"Outline Warning",variant:"outlined",status:"warning"}),e(n,{...l,modelValue:void 0,placeholder:"Filled Warning",variant:"filled",status:"warning"}),e(n,{...l,modelValue:void 0,placeholder:"Borderless Warning",variant:"borderless",status:"warning"}),e(n,{...l,modelValue:void 0,placeholder:"Underline Warning",variant:"underline",status:"warning"}),e(n,{...l,modelValue:void 0,placeholder:"Outline Success",variant:"outlined",status:"success"}),e(n,{...l,modelValue:void 0,placeholder:"Filled Success",variant:"filled",status:"success"}),e(n,{...l,modelValue:void 0,placeholder:"Borderless Success",variant:"borderless",status:"success"}),e(n,{...l,modelValue:void 0,placeholder:"Underline Success",variant:"underline",status:"success"})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},[e(n,{...l,modelValue:["1",2,3,"4",5],placeholder:"Outline Multiple",variant:"outlined",multiple:!0}),e(n,{...l,modelValue:["1",2,3],placeholder:"Outline Multiple Small",variant:"outlined",multiple:!0,size:"small"}),e(n,{...l,modelValue:["1",2,3],placeholder:"Outline Multiple Large",variant:"outlined",multiple:!0,size:"large"}),e(n,{...l,modelValue:["1",2,3],placeholder:"Filled Multiple",variant:"filled",multiple:!0}),e(n,{...l,modelValue:void 0,placeholder:"Borderless Multiple",variant:"borderless",multiple:!0}),e(n,{...l,modelValue:void 0,placeholder:"Underline Multiple",variant:"underline",multiple:!0}),e(n,{...l,modelValue:["1",3],placeholder:"Outline Disabled",variant:"outlined",disabled:!0,multiple:!0}),e(n,{...l,modelValue:2,placeholder:"Filled Disabled",variant:"filled",disabled:!0}),e(n,{...l,modelValue:["1",3],placeholder:"Borderless Disabled",variant:"borderless",multiple:!0,disabled:!0}),e(n,{...l,modelValue:void 0,placeholder:"Underline Disabled",variant:"underline",disabled:!0}),e(n,{...l,modelValue:["1",3],placeholder:"Outline Loading",variant:"outlined",loading:!0})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},[e(n,{...l,modelValue:["1"],placeholder:"Grouped Multiple",variant:"outlined",multiple:!0,options:[{title:"firstGroup",options:[{value:"1",label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"}]},{title:"secondGroup",options:[{value:"4",label:"Очень Длинное значение для проверки размеров у селектов 4"},{value:5,label:"Значение 5",desc:e("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},[e(d,{size:14}),e(s,{},()=>"Особое значение 5")])}]}]}),e(n,{...l,modelValue:"1",placeholder:"Grouped single",variant:"outlined",multiple:!1,options:[{title:"firstGroup",options:[{value:"1",label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"}]},{title:"secondGroup",options:[{value:"4",label:"Очень Длинное значение для проверки размеров у селектов 4"},{value:5,label:"Значение 5",desc:e("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},[e(d,{size:14}),e(s,{},()=>"Особое значение 5")])}]}]})])])}}),args:{options:[{value:1,label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"},{value:4,label:"Очень Длинное значение для проверки размеров у селектов 4"},{value:5,label:"Значение 5",desc:e("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},[e(d,{size:14}),e(s,{},()=>"Особое значение 5")])}]}};var u,p,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    VSelect
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
    }, [h(VSelect, {
      ...args,
      style: {
        width: "200px"
      }
    }, () => "Выбрать значение")]);
  }
})`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSelect
    },
    setup() {
      const result = shallowRef<(string | number)[]>([]);
      const filteredOptions = computed<
      // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
      (SelectItem<number | string> | SelectGroupItem<number | string>)[]>(() => args.options.filter(o => "value" in o && !result.value.includes(o.value)));
      return {
        args,
        filteredOptions,
        result
      };
    },
    render() {
      return h("div", {}, [h(VSelect, {
        ...args,
        options: this.filteredOptions,
        labelOptions: args.options,
        modelValue: this.result,
        placeholder: "Обычный",
        multiple: false,
        "onUpdate:modelValue": value => {
          this.result = value ?? [];
        },
        style: {
          width: "300px"
        }
      })]);
    }
  }),
  args: {
    options: [{
      value: 1,
      label: "Значение 1"
    }, {
      value: 2,
      label: "Значение 2"
    }, {
      value: 3,
      label: "Значение 3"
    }, {
      value: 4,
      label: "Очень Длинное значение для проверки размеров у селектов 4"
    }, {
      value: 5,
      label: "Значение 5",
      desc: h("div", {
        style: {
          display: "flex",
          gap: "10px",
          alignItems: "center"
        }
      }, [h(VSettingFilled, {
        size: 14
      }), h(VText, {}, () => "Особое значение 5")])
    }]
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var V,f,g;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSelect
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
          gap: "20px"
        }
      }, [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "200px"
        }
      }, [h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Обычный"
      }), h(VSelect, {
        ...args,
        modelValue: "Test",
        placeholder: "Без очистки",
        clear: false
      }), h(VSelect, {
        ...args,
        modelValue: "Test",
        placeholder: "С выбранным значением"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Без поиска",
        search: false
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Filled",
        variant: "filled"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Borderless",
        variant: "borderless"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline",
        variant: "underline"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Small",
        size: "small"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Large",
        size: "large"
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "200px"
        }
      }, [h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Outline Error",
        variant: "outlined",
        status: "error"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Filled Error",
        variant: "filled",
        status: "error"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Borderless Error",
        variant: "borderless",
        status: "error"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline Error",
        variant: "underline",
        status: "error"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Outline Warning",
        variant: "outlined",
        status: "warning"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Filled Warning",
        variant: "filled",
        status: "warning"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Borderless Warning",
        variant: "borderless",
        status: "warning"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline Warning",
        variant: "underline",
        status: "warning"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Outline Success",
        variant: "outlined",
        status: "success"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Filled Success",
        variant: "filled",
        status: "success"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Borderless Success",
        variant: "borderless",
        status: "success"
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline Success",
        variant: "underline",
        status: "success"
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px"
        }
      }, [h(VSelect, {
        ...args,
        modelValue: ["1", 2, 3, "4", 5],
        placeholder: "Outline Multiple",
        variant: "outlined",
        multiple: true
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 2, 3],
        placeholder: "Outline Multiple Small",
        variant: "outlined",
        multiple: true,
        size: "small"
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 2, 3],
        placeholder: "Outline Multiple Large",
        variant: "outlined",
        multiple: true,
        size: "large"
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 2, 3],
        placeholder: "Filled Multiple",
        variant: "filled",
        multiple: true
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Borderless Multiple",
        variant: "borderless",
        multiple: true
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline Multiple",
        variant: "underline",
        multiple: true
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 3],
        placeholder: "Outline Disabled",
        variant: "outlined",
        disabled: true,
        multiple: true
      }), h(VSelect, {
        ...args,
        modelValue: 2,
        placeholder: "Filled Disabled",
        variant: "filled",
        disabled: true
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 3],
        placeholder: "Borderless Disabled",
        variant: "borderless",
        multiple: true,
        disabled: true
      }), h(VSelect, {
        ...args,
        modelValue: undefined,
        placeholder: "Underline Disabled",
        variant: "underline",
        disabled: true
      }), h(VSelect, {
        ...args,
        modelValue: ["1", 3],
        placeholder: "Outline Loading",
        variant: "outlined",
        loading: true
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px"
        }
      }, [h(VSelect, {
        ...args,
        modelValue: ["1"],
        placeholder: "Grouped Multiple",
        variant: "outlined",
        multiple: true,
        options: [{
          title: "firstGroup",
          options: [{
            value: "1",
            label: "Значение 1"
          }, {
            value: 2,
            label: "Значение 2"
          }, {
            value: 3,
            label: "Значение 3"
          }]
        }, {
          title: "secondGroup",
          options: [{
            value: "4",
            label: "Очень Длинное значение для проверки размеров у селектов 4"
          }, {
            value: 5,
            label: "Значение 5",
            desc: h("div", {
              style: {
                display: "flex",
                gap: "10px",
                alignItems: "center"
              }
            }, [h(VSettingFilled, {
              size: 14
            }), h(VText, {}, () => "Особое значение 5")])
          }]
        }]
      }), h(VSelect, {
        ...args,
        modelValue: "1",
        placeholder: "Grouped single",
        variant: "outlined",
        multiple: false,
        options: [{
          title: "firstGroup",
          options: [{
            value: "1",
            label: "Значение 1"
          }, {
            value: 2,
            label: "Значение 2"
          }, {
            value: 3,
            label: "Значение 3"
          }]
        }, {
          title: "secondGroup",
          options: [{
            value: "4",
            label: "Очень Длинное значение для проверки размеров у селектов 4"
          }, {
            value: 5,
            label: "Значение 5",
            desc: h("div", {
              style: {
                display: "flex",
                gap: "10px",
                alignItems: "center"
              }
            }, [h(VSettingFilled, {
              size: 14
            }), h(VText, {}, () => "Особое значение 5")])
          }]
        }]
      })])]);
    }
  }),
  args: {
    options: [{
      value: 1,
      label: "Значение 1"
    }, {
      value: 2,
      label: "Значение 2"
    }, {
      value: 3,
      label: "Значение 3"
    }, {
      value: 4,
      label: "Очень Длинное значение для проверки размеров у селектов 4"
    }, {
      value: 5,
      label: "Значение 5",
      desc: h("div", {
        style: {
          display: "flex",
          gap: "10px",
          alignItems: "center"
        }
      }, [h(VSettingFilled, {
        size: 14
      }), h(VText, {}, () => "Особое значение 5")])
    }]
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Primary","LabelOptions","AllInOne"];export{i as AllInOne,r as LabelOptions,t as Primary,D as __namedExportsOrder,w as default};
