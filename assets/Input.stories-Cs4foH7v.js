import{m as i,S as n,h as e,r as h}from"./iframe-C561pEjZ.js";const g={title:"Components/Input",component:i,tags:["autodocs"],argTypes:{}},c=s=>({components:{VInput:i},setup(){return{args:s}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"}},[e(i,{...s})])}}),r=c.bind({});r.args={};const t={render:s=>({components:{VInput:i,VSettingFilled:n},setup(){const l=h("");return{args:s,value:l}},render(){return e("div",{style:{display:"flex",gap:"20px"}},[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"}},[e(i,{modelValue:this.value,onInput:l=>{this.value=l.target.value},placeholder:"Outlined",variant:"outlined"}),e(i,{placeholder:"Filled",variant:"filled"}),e(i,{placeholder:"Borderless",variant:"borderless"}),e(i,{placeholder:"Underline",variant:"underline"}),e(i,{placeholder:"Small",size:"small"}),e(i,{placeholder:"Large",size:"large"}),e(i,{placeholder:"Prefix and Suffix",class:"test"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Clear",allowClear:!0,modelValue:this.value,"onUpdate:modelValue":l=>{this.value=l}})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"}},[e(i,{placeholder:"Filled error",variant:"filled",status:"error"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Borderless error",variant:"borderless",status:"error"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Underline error",variant:"underline",status:"error"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Outlined error",variant:"outlined",status:"error"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Outlined warning",variant:"outlined",status:"warning"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Filled warning",variant:"filled",status:"warning"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Borderless warning",variant:"borderless",status:"warning"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Underline warning",variant:"underline",status:"warning"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"}},[e(i,{placeholder:"Outlined success",variant:"outlined",status:"success"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Filled success",variant:"filled",status:"success"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Borderless success",variant:"borderless",status:"success"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Underline success",variant:"underline",status:"success"},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Outlined error disabled",variant:"outlined",status:"error",disabled:!0},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Filled error disabled",variant:"filled",status:"error",disabled:!0},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Borderless error disabled",variant:"borderless",status:"error",disabled:!0},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})}),e(i,{placeholder:"Underline error disabled",variant:"underline",status:"error",disabled:!0},{prefix:()=>e(n,{size:16}),suffix:()=>e(n,{size:16})})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"}},[e(i,{modelValue:"Disabled",placeholder:"Outlined disabled",variant:"outlined",disabled:!0}),e(i,{placeholder:"Filled disabled",variant:"filled",disabled:!0}),e(i,{placeholder:"Borderless disabled",variant:"borderless",disabled:!0}),e(i,{placeholder:"Underline disabled",variant:"underline",disabled:!0})])])}}),args:{}};var a,d,u;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    VInput
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
        gap: "20px",
        maxWidth: "400px"
      }
    }, [h(VInput, {
      ...args
    })]);
  }
})`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,o,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VInput,
      VSettingFilled
    },
    setup() {
      const value = ref("");
      return {
        args,
        value
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
          maxWidth: "400px"
        }
      }, [h(VInput, {
        modelValue: this.value,
        onInput: (event: InputEvent) => {
          this.value = (event.target as HTMLInputElement).value;
        },
        placeholder: "Outlined",
        variant: "outlined"
      }), h(VInput, {
        placeholder: "Filled",
        variant: "filled"
      }), h(VInput, {
        placeholder: "Borderless",
        variant: "borderless"
      }), h(VInput, {
        placeholder: "Underline",
        variant: "underline"
      }), h(VInput, {
        placeholder: "Small",
        size: "small"
      }), h(VInput, {
        placeholder: "Large",
        size: "large"
      }), h(VInput, {
        placeholder: "Prefix and Suffix",
        class: "test"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Clear",
        allowClear: true,
        modelValue: this.value,
        "onUpdate:modelValue": newValue => {
          this.value = newValue;
        }
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "400px"
        }
      }, [h(VInput, {
        placeholder: "Filled error",
        variant: "filled",
        status: "error"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Borderless error",
        variant: "borderless",
        status: "error"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Underline error",
        variant: "underline",
        status: "error"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Outlined error",
        variant: "outlined",
        status: "error"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Outlined warning",
        variant: "outlined",
        status: "warning"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Filled warning",
        variant: "filled",
        status: "warning"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Borderless warning",
        variant: "borderless",
        status: "warning"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Underline warning",
        variant: "underline",
        status: "warning"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "400px"
        }
      }, [h(VInput, {
        placeholder: "Outlined success",
        variant: "outlined",
        status: "success"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Filled success",
        variant: "filled",
        status: "success"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Borderless success",
        variant: "borderless",
        status: "success"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Underline success",
        variant: "underline",
        status: "success"
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Outlined error disabled",
        variant: "outlined",
        status: "error",
        disabled: true
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Filled error disabled",
        variant: "filled",
        status: "error",
        disabled: true
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Borderless error disabled",
        variant: "borderless",
        status: "error",
        disabled: true
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      }), h(VInput, {
        placeholder: "Underline error disabled",
        variant: "underline",
        status: "error",
        disabled: true
      }, {
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        suffix: () => h(VSettingFilled, {
          size: 16
        })
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "400px"
        }
      }, [h(VInput, {
        modelValue: "Disabled",
        placeholder: "Outlined disabled",
        variant: "outlined",
        disabled: true
      }), h(VInput, {
        placeholder: "Filled disabled",
        variant: "filled",
        disabled: true
      }), h(VInput, {
        placeholder: "Borderless disabled",
        variant: "borderless",
        disabled: true
      }), h(VInput, {
        placeholder: "Underline disabled",
        variant: "underline",
        disabled: true
      })])]);
    }
  }),
  args: {}
}`,...(f=(o=t.parameters)==null?void 0:o.docs)==null?void 0:f.source}}};const V=["Primary","AllInOne"];export{t as AllInOne,r as Primary,V as __namedExportsOrder,g as default};
