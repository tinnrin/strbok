import{n as l,h as e,_ as r,S as i,j as t}from"./iframe-C561pEjZ.js";const g={title:"Components/DropDown",component:l,tags:["autodocs"],argTypes:{}},b=n=>({components:{VDropDown:l},setup(){return{args:n}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(l,{...n},{default:()=>e(r,{},()=>"Dropdown Click")})])}}),a=b.bind({});a.args={menu:[{key:"1",label:"Пункт 1"},{key:"2",label:"Пункт 2"},{key:"3",label:"Пункт 3"},{key:"0",divider:!0},{key:"4",label:e(t,{},()=>"Компонент"),icon:e(i,{size:16})}],disabled:!1};const s={render:n=>({components:{VDropDown:l},setup(){return{args:n}},render(){return e("div",{style:{display:"flex",gap:"20px"}},[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(l,{...n,triggers:["hover"],classNamePositionerContent:"test-class"},{default:()=>e(r,{},()=>"Dropdown Hover")}),e(l,{...n,triggers:["click"],menu:[{key:"0",label:"Name",noInteractive:!0},{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2 (disabled)",disabled:!0},{key:"3",label:"Пункт 3 (pop)",popConfirm:{text:"Спасибо за внимание!",title:"Внимание"}},{key:"10",label:"Очень длинное название пункта меню, которое не помещается"},{key:"11",label:"Очень длинное название пункта меню, которое не помещается",ellipsis:!0},{key:"5",label:"Опасный пункт",danger:!0},{key:"0",divider:!0},{key:"4",onClick:o=>console.log(o),label:e(t,{},()=>"Компонент"),icon:e(i,{size:16})}]},{default:()=>e(r,{},()=>"Dropdown Click")}),e(l,{...n,triggers:["contextMenu"]},{default:()=>e(r,{},()=>"Dropdown Context")}),e(l,{...n,arrow:!0},{default:()=>e(r,{},()=>"Dropdown Arrow")}),e(l,{...n,arrow:!0,interactiveMode:"focusable"},{default:()=>e(r,{},()=>"Dropdown Focusable mode")}),e(l,{...n},{default:()=>e(t,{},()=>"Dropdown by not interactive")})]),e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(l,{size:"large",menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2"},{key:"3",label:"Пункт 3",innerOptions:{innerArrow:!0,placement:"right-top",menu:[{key:"1",label:"Пункт 4"},{key:"2",label:"Пункт 5 (И длинное описание этого пункта)"},{key:"3",divider:!0},{key:"4",label:"Пункт 6",innerOptions:{innerArrow:!0,placement:"right-top",menu:[{key:"1",label:"Пункт 7"},{key:"2",label:"Пункт 8"},{key:"3",divider:!0},{key:"4",label:"Пункт 9",innerOptions:{innerArrow:!0,placement:"left-top",menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 10"])},{key:"2",label:"Пункт 11"},{key:"3",divider:!0},{key:"4",label:"Пункт 12"}]}}]}}]}},{key:"0",divider:!0},{key:"4",onClick:o=>console.log(o),label:e(t,{},()=>"Компонент"),icon:e(i,{size:16})}]},{default:()=>e(r,{},()=>"Dropdown inner")}),e(l,{size:"large",menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2"},{key:"3",label:"Пункт 3",innerOptions:{innerArrow:!0,placement:"right-top",triggers:["hover"],menu:[{key:"1",label:"Пункт 4"},{key:"2",label:"Пункт 5 (И длинное описание этого пункта)"},{key:"3",divider:!0},{key:"4",label:"Пункт 6",innerOptions:{triggers:["hover"],innerArrow:!0,placement:"right-top",menu:[{key:"1",label:"Пункт 7"},{key:"2",label:"Пункт 8"},{key:"3",divider:!0},{key:"4",label:"Пункт 9",innerOptions:{triggers:["hover"],innerArrow:!0,placement:"left-top",menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 10"])},{key:"2",label:"Пункт 11"},{key:"3",divider:!0},{key:"4",label:"Пункт 12"}]}}]}}]}},{key:"0",divider:!0},{key:"4",onClick:o=>console.log(o),label:e(t,{},()=>"Компонент"),icon:e(i,{size:16})}]},{default:()=>e(r,{},()=>"Dropdown inner hover")})])])}}),args:{menu:[{key:"0",label:"Name",noInteractive:!0},{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2 (disabled)",disabled:!0},{key:"3",label:"Пункт 3 (pop)",popConfirm:{text:"Спасибо за внимание!",title:"Внимание"}},{key:"5",label:"Опасный пункт",danger:!0},{key:"0",divider:!0},{key:"4",onClick:n=>console.log(n),label:e(t,{},()=>"Компонент"),icon:e(i,{size:16})}]}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    VDropDown
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
    }, [h(VDropDown, {
      ...args
    }, {
      default: () => h(VButton, {}, () => "Dropdown Click")
    })]);
  }
})`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var k,y,c;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VDropDown
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
          gap: "20px"
        }
      }, [h(VDropDown, {
        ...args,
        triggers: ["hover"],
        classNamePositionerContent: "test-class"
      }, {
        default: () => h(VButton, {}, () => "Dropdown Hover")
      }), h(VDropDown, {
        ...args,
        triggers: ["click"],
        menu: [{
          key: "0",
          label: "Name",
          noInteractive: true
        }, {
          key: "1",
          link: true,
          label: h("a", {
            href: "#test"
          }, ["Пункт 1"])
        }, {
          key: "2",
          label: "Пункт 2 (disabled)",
          disabled: true
        }, {
          key: "3",
          label: "Пункт 3 (pop)",
          popConfirm: {
            text: "Спасибо за внимание!",
            title: "Внимание"
          }
        }, {
          key: "10",
          label: "Очень длинное название пункта меню, которое не помещается"
        }, {
          key: "11",
          label: "Очень длинное название пункта меню, которое не помещается",
          ellipsis: true
        }, {
          key: "5",
          label: "Опасный пункт",
          danger: true
        }, {
          key: "0",
          divider: true
        }, {
          key: "4",
          // eslint-disable-next-line no-console
          onClick: event => console.log(event),
          label: h(VText, {}, () => "Компонент"),
          icon: h(VSettingFilled, {
            size: 16
          })
        }]
      }, {
        default: () => h(VButton, {}, () => "Dropdown Click")
      }), h(VDropDown, {
        ...args,
        triggers: ["contextMenu"]
      }, {
        default: () => h(VButton, {}, () => "Dropdown Context")
      }), h(VDropDown, {
        ...args,
        arrow: true
      }, {
        default: () => h(VButton, {}, () => "Dropdown Arrow")
      }), h(VDropDown, {
        ...args,
        arrow: true,
        interactiveMode: "focusable"
      }, {
        default: () => h(VButton, {}, () => "Dropdown Focusable mode")
      }), h(VDropDown, {
        ...args
      }, {
        default: () => h(VText, {}, () => "Dropdown by not interactive")
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VDropDown, {
        size: "large",
        menu: [{
          key: "1",
          link: true,
          label: h("a", {
            href: "#test"
          }, ["Пункт 1"])
        }, {
          key: "2",
          label: "Пункт 2"
        }, {
          key: "3",
          label: "Пункт 3",
          innerOptions: {
            innerArrow: true,
            placement: "right-top",
            menu: [{
              key: "1",
              label: "Пункт 4"
            }, {
              key: "2",
              label: "Пункт 5 (И длинное описание этого пункта)"
            }, {
              key: "3",
              divider: true
            }, {
              key: "4",
              label: "Пункт 6",
              innerOptions: {
                innerArrow: true,
                placement: "right-top",
                menu: [{
                  key: "1",
                  label: "Пункт 7"
                }, {
                  key: "2",
                  label: "Пункт 8"
                }, {
                  key: "3",
                  divider: true
                }, {
                  key: "4",
                  label: "Пункт 9",
                  innerOptions: {
                    innerArrow: true,
                    placement: "left-top",
                    menu: [{
                      key: "1",
                      link: true,
                      label: h("a", {
                        href: "#test"
                      }, ["Пункт 10"])
                    }, {
                      key: "2",
                      label: "Пункт 11"
                    }, {
                      key: "3",
                      divider: true
                    }, {
                      key: "4",
                      label: "Пункт 12"
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          key: "0",
          divider: true
        }, {
          key: "4",
          // eslint-disable-next-line no-console
          onClick: event => console.log(event),
          label: h(VText, {}, () => "Компонент"),
          icon: h(VSettingFilled, {
            size: 16
          })
        }]
      }, {
        default: () => h(VButton, {}, () => "Dropdown inner")
      }), h(VDropDown, {
        size: "large",
        menu: [{
          key: "1",
          link: true,
          label: h("a", {
            href: "#test"
          }, ["Пункт 1"])
        }, {
          key: "2",
          label: "Пункт 2"
        }, {
          key: "3",
          label: "Пункт 3",
          innerOptions: {
            innerArrow: true,
            placement: "right-top",
            triggers: ["hover"],
            menu: [{
              key: "1",
              label: "Пункт 4"
            }, {
              key: "2",
              label: "Пункт 5 (И длинное описание этого пункта)"
            }, {
              key: "3",
              divider: true
            }, {
              key: "4",
              label: "Пункт 6",
              innerOptions: {
                triggers: ["hover"],
                innerArrow: true,
                placement: "right-top",
                menu: [{
                  key: "1",
                  label: "Пункт 7"
                }, {
                  key: "2",
                  label: "Пункт 8"
                }, {
                  key: "3",
                  divider: true
                }, {
                  key: "4",
                  label: "Пункт 9",
                  innerOptions: {
                    triggers: ["hover"],
                    innerArrow: true,
                    placement: "left-top",
                    menu: [{
                      key: "1",
                      link: true,
                      label: h("a", {
                        href: "#test"
                      }, ["Пункт 10"])
                    }, {
                      key: "2",
                      label: "Пункт 11"
                    }, {
                      key: "3",
                      divider: true
                    }, {
                      key: "4",
                      label: "Пункт 12"
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          key: "0",
          divider: true
        }, {
          key: "4",
          // eslint-disable-next-line no-console
          onClick: event => console.log(event),
          label: h(VText, {}, () => "Компонент"),
          icon: h(VSettingFilled, {
            size: 16
          })
        }]
      }, {
        default: () => h(VButton, {}, () => "Dropdown inner hover")
      })])]);
    }
  }),
  args: {
    menu: [{
      key: "0",
      label: "Name",
      noInteractive: true
    }, {
      key: "1",
      link: true,
      label: h("a", {
        href: "#test"
      }, ["Пункт 1"])
    }, {
      key: "2",
      label: "Пункт 2 (disabled)",
      disabled: true
    }, {
      key: "3",
      label: "Пункт 3 (pop)",
      popConfirm: {
        text: "Спасибо за внимание!",
        title: "Внимание"
      }
    }, {
      key: "5",
      label: "Опасный пункт",
      danger: true
    }, {
      key: "0",
      divider: true
    }, {
      key: "4",
      // eslint-disable-next-line no-console
      onClick: event => console.log(event),
      label: h(VText, {}, () => "Компонент"),
      icon: h(VSettingFilled, {
        size: 16
      })
    }]
  }
}`,...(c=(y=s.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};const h=["Primary","AllInOne"];export{s as AllInOne,a as Primary,h as __namedExportsOrder,g as default};
