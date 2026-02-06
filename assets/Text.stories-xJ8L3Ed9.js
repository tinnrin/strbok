import{j as e,h as n}from"./iframe-C561pEjZ.js";const f={title:"Components/Text",component:e,tags:["autodocs"],argTypes:{}},o=r=>({components:{VText:e},setup(){return{args:r}},render(){return n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{...r},{default:()=>Array.from({length:10},()=>"Длинный текст ограниченный контейнером.").join(" ")})])}}),t=o.bind({});t.args={};const l={render:()=>({components:{VText:e},setup(){return{}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{nowrap:!0},{default:()=>"[No wrap] "+Array.from({length:2},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{ellipsis:!0},{default:()=>"[Default] "+Array.from({length:5},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{},{default:()=>"[Break] "+Array.from({length:5},()=>"ДлинныйТекстОграниченныйКонтейнером").join("")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{},{default:()=>"[Ellipsis] "+Array.from({length:5},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{rows:3},{default:()=>"[Rows-3] "+Array.from({length:10},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{weight:600},{default:()=>"[Weight 600] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{size:24,ellipsis:!0},{default:()=>"[Size 24] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{size:"small",ellipsis:!0},{default:()=>"[Size sm] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{italic:!0,ellipsis:!0},{default:()=>"[Italic] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{strong:!0,ellipsis:!0},{default:()=>"[Strong] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{underline:!0,ellipsis:!0},{default:()=>"[Underline] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{delete:!0,ellipsis:!0},{default:()=>"[Delete] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{disabled:!0,ellipsis:!0},{default:()=>"[Disabled] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{type:"secondary",ellipsis:!0},{default:()=>"[Secondary] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{type:"success",ellipsis:!0},{default:()=>"[Success] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{type:"warning",ellipsis:!0},{default:()=>"[Warning] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})]),n("div",{style:{display:"flex",maxWidth:"400px"}},[n(e,{type:"error",ellipsis:!0},{default:()=>"[Error] "+Array.from({length:1},()=>"Длинный текст ограниченный контейнером.").join(" ")})])])}}),args:{}};var i,a,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    VText
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
        maxWidth: "400px"
      }
    }, [h(VText, {
      ...args
    }, {
      default: () => Array.from({
        length: 10
      }, () => "Длинный текст ограниченный контейнером.").join(" ")
    })]);
  }
})`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,p,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VText
    },
    setup() {
      return {};
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        nowrap: true
      }, {
        default: () => "[No wrap] " + Array.from({
          length: 2
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        ellipsis: true
      }, {
        default: () => "[Default] " + Array.from({
          length: 5
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {}, {
        default: () => "[Break] " + Array.from({
          length: 5
        }, () => "ДлинныйТекстОграниченныйКонтейнером").join("")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {}, {
        default: () => "[Ellipsis] " + Array.from({
          length: 5
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        rows: 3
      }, {
        default: () => "[Rows-3] " + Array.from({
          length: 10
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        weight: 600
      }, {
        default: () => "[Weight 600] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        size: 24,
        ellipsis: true
      }, {
        default: () => "[Size 24] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        size: "small",
        ellipsis: true
      }, {
        default: () => "[Size sm] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        italic: true,
        ellipsis: true
      }, {
        default: () => "[Italic] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        strong: true,
        ellipsis: true
      }, {
        default: () => "[Strong] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        underline: true,
        ellipsis: true
      }, {
        default: () => "[Underline] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        delete: true,
        ellipsis: true
      }, {
        default: () => "[Delete] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        disabled: true,
        ellipsis: true
      }, {
        default: () => "[Disabled] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        type: "secondary",
        ellipsis: true
      }, {
        default: () => "[Secondary] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        type: "success",
        ellipsis: true
      }, {
        default: () => "[Success] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        type: "warning",
        ellipsis: true
      }, {
        default: () => "[Warning] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })]), h("div", {
        style: {
          display: "flex",
          maxWidth: "400px"
        }
      }, [h(VText, {
        type: "error",
        ellipsis: true
      }, {
        default: () => "[Error] " + Array.from({
          length: 1
        }, () => "Длинный текст ограниченный контейнером.").join(" ")
      })])]);
    }
  }),
  args: {}
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const h=["Primary","AllInOne"];export{l as AllInOne,t as Primary,h as __namedExportsOrder,f as default};
