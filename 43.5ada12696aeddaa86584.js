(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1Ei1":function(n,l,e){"use strict";e.d(l,"a",function(){return c});var a=e("YbqN"),c=function(){function n(n,l,e,a){this.directiveView=n,this.componentFactoryResolver=l,this.renderer=e,this.directiveElement=a,this.isSpinnerExist=!1,this.shouldShow=!1}return Object.defineProperty(n.prototype,"nbSpinner",{set:function(n){this.componentFactory?n?this.show():this.hide():this.shouldShow=n},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.componentFactory=this.componentFactoryResolver.resolveComponentFactory(a.a),this.shouldShow&&this.show()},n.prototype.hide=function(){this.isSpinnerExist&&(this.directiveView.remove(),this.isSpinnerExist=!1)},n.prototype.show=function(){this.isSpinnerExist||(this.spinner=this.directiveView.createComponent(this.componentFactory),this.setInstanceInputs(this.spinner.instance),this.spinner.changeDetectorRef.detectChanges(),this.renderer.appendChild(this.directiveElement.nativeElement,this.spinner.location.nativeElement),this.isSpinnerExist=!0)},n.prototype.setInstanceInputs=function(n){void 0!==this.spinnerMessage&&(n.message=this.spinnerMessage),void 0!==this.spinnerStatus&&(n.status=this.spinnerStatus),void 0!==this.spinnerSize&&(n.size=this.spinnerSize)},n}()},"4Ssn":function(n,l,e){"use strict";var a=e("CcnG");e("S+eJ"),e.d(l,"d",function(){return c}),e.d(l,"h",function(){return u}),e.d(l,"a",function(){return r}),e.d(l,"e",function(){return t}),e.d(l,"c",function(){return i}),e.d(l,"g",function(){return b}),e.d(l,"b",function(){return s}),e.d(l,"f",function(){return d});var c=a.sb({encapsulation:2,styles:[],data:{}});function u(n){return a.Ob(0,[a.Db(null,0)],null,null)}var r=a.sb({encapsulation:2,styles:[],data:{}});function t(n){return a.Ob(0,[a.Db(null,0)],null,null)}var i=a.sb({encapsulation:2,styles:[],data:{}});function b(n){return a.Ob(0,[a.Db(null,0)],null,null)}var s=a.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function d(n){return a.Ob(0,[a.Db(null,0),a.Db(null,1),a.Db(null,2),a.Db(null,3)],null,null)}},YNTD:function(n,l,e){"use strict";e.d(l,"a",function(){return a});var a=function(){return function(){}}()},YbqN:function(n,l,e){"use strict";e.d(l,"a",function(){return a});var a=function(){function n(){this.size=n.SIZE_MEDIUM,this.status=n.STATUS_ACTIVE,this.message="Loading..."}return Object.defineProperty(n.prototype,"setSize",{set:function(n){this.size=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"setStatus",{set:function(n){this.status=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"xxsmall",{get:function(){return this.size===n.SIZE_XXSMALL},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"xsmall",{get:function(){return this.size===n.SIZE_XSMALL},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"small",{get:function(){return this.size===n.SIZE_SMALL},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"medium",{get:function(){return this.size===n.SIZE_MEDIUM},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"large",{get:function(){return this.size===n.SIZE_LARGE},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"xlarge",{get:function(){return this.size===n.SIZE_XLARGE},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"xxlarge",{get:function(){return this.size===n.SIZE_XXLARGE},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"active",{get:function(){return this.status===n.STATUS_ACTIVE},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this.status===n.STATUS_DISABLED},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"primary",{get:function(){return this.status===n.STATUS_PRIMARY},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"info",{get:function(){return this.status===n.STATUS_INFO},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"success",{get:function(){return this.status===n.STATUS_SUCCESS},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"warning",{get:function(){return this.status===n.STATUS_WARNING},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"danger",{get:function(){return this.status===n.STATUS_DANGER},enumerable:!0,configurable:!0}),n.SIZE_XXSMALL="xxsmall",n.SIZE_XSMALL="xsmall",n.SIZE_SMALL="small",n.SIZE_MEDIUM="medium",n.SIZE_LARGE="large",n.SIZE_XLARGE="xlarge",n.SIZE_XXLARGE="xxlarge",n.STATUS_ACTIVE="active",n.STATUS_DISABLED="disabled",n.STATUS_PRIMARY="primary",n.STATUS_INFO="info",n.STATUS_SUCCESS="success",n.STATUS_WARNING="warning",n.STATUS_DANGER="danger",n}()},hTEy:function(n,l,e){"use strict";e.r(l);var a=e("CcnG"),c=function(){return function(){}}(),u=e("pMnS"),r=e("7s4d"),t=e("4Ssn"),i=e("S+eJ"),b=e("1Ei1"),s=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},3e3)},n}(),d=a.sb({encapsulation:0,styles:["button[_ngcontent-%COMP%] {\n      margin: 1rem;\n    }"],data:{}});function o(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,22,"nb-card",[["accent","primary"],["size","small"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(1,49152,null,0,i.b,[],{setSize:[0,"setSize"],setAccent:[1,"setAccent"]},null),(n()(),a.ub(2,0,null,1,20,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(3,49152,null,0,i.a,[],null,null),(n()(),a.ub(4,0,null,0,18,"div",[["class","d-flex align-items-start"]],null,null,null,null,null)),(n()(),a.ub(5,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","success"],["size","large"],["status","success"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(6,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "])),(n()(),a.ub(8,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","primary"],["size","large"],["status","primary"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(9,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "])),(n()(),a.ub(11,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","large"],["nbSpinnerStatus","warning"],["size","large"],["status","warning"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(12,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "])),(n()(),a.ub(14,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerStatus","danger"],["size","medium"],["status","danger"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(15,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "])),(n()(),a.ub(17,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","small"],["nbSpinnerStatus","info"],["size","medium"],["status","info"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(18,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "])),(n()(),a.ub(20,16777216,null,null,2,"button",[["nbButton",""],["nbSpinnerMessage",""],["nbSpinnerSize","xsmall"],["nbSpinnerStatus","info"],["size","medium"],["status","info"]],[[2,"nb-spinner-container",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),a.tb(21,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],spinnerSize:[2,"spinnerSize"],nbSpinner:[3,"nbSpinner"]},null),(n()(),a.Mb(-1,null,[" Download "]))],function(n,l){var e=l.component;n(l,1,0,"small","primary"),n(l,6,0,"","success","large",e.loading),n(l,9,0,"","primary","large",e.loading),n(l,12,0,"","warning","large",e.loading),n(l,15,0,"","danger",e.loading),n(l,18,0,"","info","small",e.loading),n(l,21,0,"","info","xsmall",e.loading)},function(n,l){n(l,0,1,[a.Eb(l,1).xxsmall,a.Eb(l,1).xsmall,a.Eb(l,1).small,a.Eb(l,1).medium,a.Eb(l,1).large,a.Eb(l,1).xlarge,a.Eb(l,1).xxlarge,a.Eb(l,1).active,a.Eb(l,1).disabled,a.Eb(l,1).primary,a.Eb(l,1).info,a.Eb(l,1).success,a.Eb(l,1).warning,a.Eb(l,1).danger,a.Eb(l,1).hasAccent,a.Eb(l,1).primaryAccent,a.Eb(l,1).infoAccent,a.Eb(l,1).successAccent,a.Eb(l,1).warningAccent,a.Eb(l,1).dangerAccent,a.Eb(l,1).activeAccent,a.Eb(l,1).disabledAccent]),n(l,5,0,a.Eb(l,6).isSpinnerExist),n(l,8,0,a.Eb(l,9).isSpinnerExist),n(l,11,0,a.Eb(l,12).isSpinnerExist),n(l,14,0,a.Eb(l,15).isSpinnerExist),n(l,17,0,a.Eb(l,18).isSpinnerExist),n(l,20,0,a.Eb(l,21).isSpinnerExist)})}function E(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,1,"nb-app-spinner-button",[],null,null,null,o,d)),a.tb(1,49152,null,0,s,[],null,null)],null,null)}var p=a.qb("nb-app-spinner-button",s,E,{},{},[]),g=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},3e3)},n}(),m=a.sb({encapsulation:2,styles:[],data:{}});function S(n){return a.Ob(0,[(n()(),a.ub(0,16777216,null,null,11,"nb-card",[["accent","danger"],["nbSpinnerSize","xlarge"],["nbSpinnerStatus","danger"],["size","xsmall"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(1,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),a.tb(2,49152,null,0,i.b,[],{setSize:[0,"setSize"],setAccent:[1,"setAccent"]},null),(n()(),a.ub(3,0,null,0,2,"nb-card-header",[],null,null,null,t.h,t.d)),a.tb(4,49152,null,0,i.d,[],null,null),(n()(),a.Mb(-1,0,["Spinners"])),(n()(),a.ub(6,0,null,1,5,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(7,49152,null,0,i.a,[],null,null),(n()(),a.ub(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),a.Mb(-1,null,[" A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "])),(n()(),a.ub(10,0,null,0,1,"button",[["nbButton",""],["size","small"],["status","info"]],null,[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},null,null)),(n()(),a.Mb(-1,null,["Reload"]))],function(n,l){n(l,1,0,"danger","xlarge",l.component.loading),n(l,2,0,"xsmall","danger")},function(n,l){n(l,0,1,[a.Eb(l,1).isSpinnerExist,a.Eb(l,2).xxsmall,a.Eb(l,2).xsmall,a.Eb(l,2).small,a.Eb(l,2).medium,a.Eb(l,2).large,a.Eb(l,2).xlarge,a.Eb(l,2).xxlarge,a.Eb(l,2).active,a.Eb(l,2).disabled,a.Eb(l,2).primary,a.Eb(l,2).info,a.Eb(l,2).success,a.Eb(l,2).warning,a.Eb(l,2).danger,a.Eb(l,2).hasAccent,a.Eb(l,2).primaryAccent,a.Eb(l,2).infoAccent,a.Eb(l,2).successAccent,a.Eb(l,2).warningAccent,a.Eb(l,2).dangerAccent,a.Eb(l,2).activeAccent,a.Eb(l,2).disabledAccent])})}function x(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,1,"nb-app-spinner-card",[],null,null,null,S,m)),a.tb(1,49152,null,0,g,[],null,null)],null,null)}var f=a.qb("nb-app-spinner-card",g,x,{},{},[]),A=function(){return function(){}}(),y=a.sb({encapsulation:2,styles:[],data:{}});function h(n){return a.Ob(2,[(n()(),a.ub(0,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","active"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(1,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(2,49152,null,0,i.b,[],null,null),(n()(),a.ub(3,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(4,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(6,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","disabled"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(7,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(8,49152,null,0,i.b,[],null,null),(n()(),a.ub(9,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(10,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(12,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","warning"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(13,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(14,49152,null,0,i.b,[],null,null),(n()(),a.ub(15,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(16,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(18,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","danger"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(19,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(20,49152,null,0,i.b,[],null,null),(n()(),a.ub(21,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(22,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(24,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(25,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(26,49152,null,0,i.b,[],null,null),(n()(),a.ub(27,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(28,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(30,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","info"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(31,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(32,49152,null,0,i.b,[],null,null),(n()(),a.ub(33,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(34,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(36,16777216,null,null,5,"nb-card",[["nbSpinnerStatus","primary"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(37,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],nbSpinner:[1,"nbSpinner"]},null),a.tb(38,49152,null,0,i.b,[],null,null),(n()(),a.ub(39,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(40,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "]))],function(n,l){n(l,1,0,"active",!0),n(l,7,0,"disabled",!0),n(l,13,0,"warning",!0),n(l,19,0,"danger",!0),n(l,25,0,"success",!0),n(l,31,0,"info",!0),n(l,37,0,"primary",!0)},function(n,l){n(l,0,1,[a.Eb(l,1).isSpinnerExist,a.Eb(l,2).xxsmall,a.Eb(l,2).xsmall,a.Eb(l,2).small,a.Eb(l,2).medium,a.Eb(l,2).large,a.Eb(l,2).xlarge,a.Eb(l,2).xxlarge,a.Eb(l,2).active,a.Eb(l,2).disabled,a.Eb(l,2).primary,a.Eb(l,2).info,a.Eb(l,2).success,a.Eb(l,2).warning,a.Eb(l,2).danger,a.Eb(l,2).hasAccent,a.Eb(l,2).primaryAccent,a.Eb(l,2).infoAccent,a.Eb(l,2).successAccent,a.Eb(l,2).warningAccent,a.Eb(l,2).dangerAccent,a.Eb(l,2).activeAccent,a.Eb(l,2).disabledAccent]),n(l,6,1,[a.Eb(l,7).isSpinnerExist,a.Eb(l,8).xxsmall,a.Eb(l,8).xsmall,a.Eb(l,8).small,a.Eb(l,8).medium,a.Eb(l,8).large,a.Eb(l,8).xlarge,a.Eb(l,8).xxlarge,a.Eb(l,8).active,a.Eb(l,8).disabled,a.Eb(l,8).primary,a.Eb(l,8).info,a.Eb(l,8).success,a.Eb(l,8).warning,a.Eb(l,8).danger,a.Eb(l,8).hasAccent,a.Eb(l,8).primaryAccent,a.Eb(l,8).infoAccent,a.Eb(l,8).successAccent,a.Eb(l,8).warningAccent,a.Eb(l,8).dangerAccent,a.Eb(l,8).activeAccent,a.Eb(l,8).disabledAccent]),n(l,12,1,[a.Eb(l,13).isSpinnerExist,a.Eb(l,14).xxsmall,a.Eb(l,14).xsmall,a.Eb(l,14).small,a.Eb(l,14).medium,a.Eb(l,14).large,a.Eb(l,14).xlarge,a.Eb(l,14).xxlarge,a.Eb(l,14).active,a.Eb(l,14).disabled,a.Eb(l,14).primary,a.Eb(l,14).info,a.Eb(l,14).success,a.Eb(l,14).warning,a.Eb(l,14).danger,a.Eb(l,14).hasAccent,a.Eb(l,14).primaryAccent,a.Eb(l,14).infoAccent,a.Eb(l,14).successAccent,a.Eb(l,14).warningAccent,a.Eb(l,14).dangerAccent,a.Eb(l,14).activeAccent,a.Eb(l,14).disabledAccent]),n(l,18,1,[a.Eb(l,19).isSpinnerExist,a.Eb(l,20).xxsmall,a.Eb(l,20).xsmall,a.Eb(l,20).small,a.Eb(l,20).medium,a.Eb(l,20).large,a.Eb(l,20).xlarge,a.Eb(l,20).xxlarge,a.Eb(l,20).active,a.Eb(l,20).disabled,a.Eb(l,20).primary,a.Eb(l,20).info,a.Eb(l,20).success,a.Eb(l,20).warning,a.Eb(l,20).danger,a.Eb(l,20).hasAccent,a.Eb(l,20).primaryAccent,a.Eb(l,20).infoAccent,a.Eb(l,20).successAccent,a.Eb(l,20).warningAccent,a.Eb(l,20).dangerAccent,a.Eb(l,20).activeAccent,a.Eb(l,20).disabledAccent]),n(l,24,1,[a.Eb(l,25).isSpinnerExist,a.Eb(l,26).xxsmall,a.Eb(l,26).xsmall,a.Eb(l,26).small,a.Eb(l,26).medium,a.Eb(l,26).large,a.Eb(l,26).xlarge,a.Eb(l,26).xxlarge,a.Eb(l,26).active,a.Eb(l,26).disabled,a.Eb(l,26).primary,a.Eb(l,26).info,a.Eb(l,26).success,a.Eb(l,26).warning,a.Eb(l,26).danger,a.Eb(l,26).hasAccent,a.Eb(l,26).primaryAccent,a.Eb(l,26).infoAccent,a.Eb(l,26).successAccent,a.Eb(l,26).warningAccent,a.Eb(l,26).dangerAccent,a.Eb(l,26).activeAccent,a.Eb(l,26).disabledAccent]),n(l,30,1,[a.Eb(l,31).isSpinnerExist,a.Eb(l,32).xxsmall,a.Eb(l,32).xsmall,a.Eb(l,32).small,a.Eb(l,32).medium,a.Eb(l,32).large,a.Eb(l,32).xlarge,a.Eb(l,32).xxlarge,a.Eb(l,32).active,a.Eb(l,32).disabled,a.Eb(l,32).primary,a.Eb(l,32).info,a.Eb(l,32).success,a.Eb(l,32).warning,a.Eb(l,32).danger,a.Eb(l,32).hasAccent,a.Eb(l,32).primaryAccent,a.Eb(l,32).infoAccent,a.Eb(l,32).successAccent,a.Eb(l,32).warningAccent,a.Eb(l,32).dangerAccent,a.Eb(l,32).activeAccent,a.Eb(l,32).disabledAccent]),n(l,36,1,[a.Eb(l,37).isSpinnerExist,a.Eb(l,38).xxsmall,a.Eb(l,38).xsmall,a.Eb(l,38).small,a.Eb(l,38).medium,a.Eb(l,38).large,a.Eb(l,38).xlarge,a.Eb(l,38).xxlarge,a.Eb(l,38).active,a.Eb(l,38).disabled,a.Eb(l,38).primary,a.Eb(l,38).info,a.Eb(l,38).success,a.Eb(l,38).warning,a.Eb(l,38).danger,a.Eb(l,38).hasAccent,a.Eb(l,38).primaryAccent,a.Eb(l,38).infoAccent,a.Eb(l,38).successAccent,a.Eb(l,38).warningAccent,a.Eb(l,38).dangerAccent,a.Eb(l,38).activeAccent,a.Eb(l,38).disabledAccent])})}function v(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,1,"nb-spinner-colors",[],null,null,null,h,y)),a.tb(1,49152,null,0,A,[],null,null)],null,null)}var w=a.qb("nb-spinner-colors",A,v,{},{},[]),T=function(){return function(){}}(),z=a.sb({encapsulation:2,styles:[],data:{}});function M(n){return a.Ob(2,[(n()(),a.ub(0,16777216,null,null,5,"nb-card",[["nbSpinnerSize","xxsmall"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(1,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(2,49152,null,0,i.b,[],null,null),(n()(),a.ub(3,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(4,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(6,16777216,null,null,5,"nb-card",[["nbSpinnerSize","xsmall"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(7,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(8,49152,null,0,i.b,[],null,null),(n()(),a.ub(9,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(10,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(12,16777216,null,null,5,"nb-card",[["nbSpinnerSize","small"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(13,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(14,49152,null,0,i.b,[],null,null),(n()(),a.ub(15,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(16,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(18,16777216,null,null,5,"nb-card",[["nbSpinnerSize","medium"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(19,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(20,49152,null,0,i.b,[],null,null),(n()(),a.ub(21,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(22,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(24,16777216,null,null,5,"nb-card",[["nbSpinnerSize","large"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(25,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(26,49152,null,0,i.b,[],null,null),(n()(),a.ub(27,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(28,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(30,16777216,null,null,5,"nb-card",[["nbSpinnerSize","xlarge"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(31,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(32,49152,null,0,i.b,[],null,null),(n()(),a.ub(33,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(34,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "])),(n()(),a.ub(36,16777216,null,null,5,"nb-card",[["nbSpinnerSize","xxlarge"]],[[2,"nb-spinner-container",null],[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(37,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerSize:[0,"spinnerSize"],nbSpinner:[1,"nbSpinner"]},null),a.tb(38,49152,null,0,i.b,[],null,null),(n()(),a.ub(39,0,null,1,2,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(40,49152,null,0,i.a,[],null,null),(n()(),a.Mb(-1,0,[" Some card content. "]))],function(n,l){n(l,1,0,"xxsmall",!0),n(l,7,0,"xsmall",!0),n(l,13,0,"small",!0),n(l,19,0,"medium",!0),n(l,25,0,"large",!0),n(l,31,0,"xlarge",!0),n(l,37,0,"xxlarge",!0)},function(n,l){n(l,0,1,[a.Eb(l,1).isSpinnerExist,a.Eb(l,2).xxsmall,a.Eb(l,2).xsmall,a.Eb(l,2).small,a.Eb(l,2).medium,a.Eb(l,2).large,a.Eb(l,2).xlarge,a.Eb(l,2).xxlarge,a.Eb(l,2).active,a.Eb(l,2).disabled,a.Eb(l,2).primary,a.Eb(l,2).info,a.Eb(l,2).success,a.Eb(l,2).warning,a.Eb(l,2).danger,a.Eb(l,2).hasAccent,a.Eb(l,2).primaryAccent,a.Eb(l,2).infoAccent,a.Eb(l,2).successAccent,a.Eb(l,2).warningAccent,a.Eb(l,2).dangerAccent,a.Eb(l,2).activeAccent,a.Eb(l,2).disabledAccent]),n(l,6,1,[a.Eb(l,7).isSpinnerExist,a.Eb(l,8).xxsmall,a.Eb(l,8).xsmall,a.Eb(l,8).small,a.Eb(l,8).medium,a.Eb(l,8).large,a.Eb(l,8).xlarge,a.Eb(l,8).xxlarge,a.Eb(l,8).active,a.Eb(l,8).disabled,a.Eb(l,8).primary,a.Eb(l,8).info,a.Eb(l,8).success,a.Eb(l,8).warning,a.Eb(l,8).danger,a.Eb(l,8).hasAccent,a.Eb(l,8).primaryAccent,a.Eb(l,8).infoAccent,a.Eb(l,8).successAccent,a.Eb(l,8).warningAccent,a.Eb(l,8).dangerAccent,a.Eb(l,8).activeAccent,a.Eb(l,8).disabledAccent]),n(l,12,1,[a.Eb(l,13).isSpinnerExist,a.Eb(l,14).xxsmall,a.Eb(l,14).xsmall,a.Eb(l,14).small,a.Eb(l,14).medium,a.Eb(l,14).large,a.Eb(l,14).xlarge,a.Eb(l,14).xxlarge,a.Eb(l,14).active,a.Eb(l,14).disabled,a.Eb(l,14).primary,a.Eb(l,14).info,a.Eb(l,14).success,a.Eb(l,14).warning,a.Eb(l,14).danger,a.Eb(l,14).hasAccent,a.Eb(l,14).primaryAccent,a.Eb(l,14).infoAccent,a.Eb(l,14).successAccent,a.Eb(l,14).warningAccent,a.Eb(l,14).dangerAccent,a.Eb(l,14).activeAccent,a.Eb(l,14).disabledAccent]),n(l,18,1,[a.Eb(l,19).isSpinnerExist,a.Eb(l,20).xxsmall,a.Eb(l,20).xsmall,a.Eb(l,20).small,a.Eb(l,20).medium,a.Eb(l,20).large,a.Eb(l,20).xlarge,a.Eb(l,20).xxlarge,a.Eb(l,20).active,a.Eb(l,20).disabled,a.Eb(l,20).primary,a.Eb(l,20).info,a.Eb(l,20).success,a.Eb(l,20).warning,a.Eb(l,20).danger,a.Eb(l,20).hasAccent,a.Eb(l,20).primaryAccent,a.Eb(l,20).infoAccent,a.Eb(l,20).successAccent,a.Eb(l,20).warningAccent,a.Eb(l,20).dangerAccent,a.Eb(l,20).activeAccent,a.Eb(l,20).disabledAccent]),n(l,24,1,[a.Eb(l,25).isSpinnerExist,a.Eb(l,26).xxsmall,a.Eb(l,26).xsmall,a.Eb(l,26).small,a.Eb(l,26).medium,a.Eb(l,26).large,a.Eb(l,26).xlarge,a.Eb(l,26).xxlarge,a.Eb(l,26).active,a.Eb(l,26).disabled,a.Eb(l,26).primary,a.Eb(l,26).info,a.Eb(l,26).success,a.Eb(l,26).warning,a.Eb(l,26).danger,a.Eb(l,26).hasAccent,a.Eb(l,26).primaryAccent,a.Eb(l,26).infoAccent,a.Eb(l,26).successAccent,a.Eb(l,26).warningAccent,a.Eb(l,26).dangerAccent,a.Eb(l,26).activeAccent,a.Eb(l,26).disabledAccent]),n(l,30,1,[a.Eb(l,31).isSpinnerExist,a.Eb(l,32).xxsmall,a.Eb(l,32).xsmall,a.Eb(l,32).small,a.Eb(l,32).medium,a.Eb(l,32).large,a.Eb(l,32).xlarge,a.Eb(l,32).xxlarge,a.Eb(l,32).active,a.Eb(l,32).disabled,a.Eb(l,32).primary,a.Eb(l,32).info,a.Eb(l,32).success,a.Eb(l,32).warning,a.Eb(l,32).danger,a.Eb(l,32).hasAccent,a.Eb(l,32).primaryAccent,a.Eb(l,32).infoAccent,a.Eb(l,32).successAccent,a.Eb(l,32).warningAccent,a.Eb(l,32).dangerAccent,a.Eb(l,32).activeAccent,a.Eb(l,32).disabledAccent]),n(l,36,1,[a.Eb(l,37).isSpinnerExist,a.Eb(l,38).xxsmall,a.Eb(l,38).xsmall,a.Eb(l,38).small,a.Eb(l,38).medium,a.Eb(l,38).large,a.Eb(l,38).xlarge,a.Eb(l,38).xxlarge,a.Eb(l,38).active,a.Eb(l,38).disabled,a.Eb(l,38).primary,a.Eb(l,38).info,a.Eb(l,38).success,a.Eb(l,38).warning,a.Eb(l,38).danger,a.Eb(l,38).hasAccent,a.Eb(l,38).primaryAccent,a.Eb(l,38).infoAccent,a.Eb(l,38).successAccent,a.Eb(l,38).warningAccent,a.Eb(l,38).dangerAccent,a.Eb(l,38).activeAccent,a.Eb(l,38).disabledAccent])})}function O(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,1,"nb-spinner-sizes",[],null,null,null,M,z)),a.tb(1,49152,null,0,T,[],null,null)],null,null)}var _=a.qb("nb-spinner-sizes",T,O,{},{},[]),j=e("cMFP"),k=e("T76v"),I=e("ZYCi"),C=function(){function n(){this.loading=!1}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},2e4)},n}(),F=a.sb({encapsulation:0,styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"],data:{}});function L(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,16,"nb-card",[["size","xsmall"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,t.f,t.b)),a.tb(1,49152,null,0,i.b,[],{setSize:[0,"setSize"]},null),(n()(),a.ub(2,0,null,1,14,"nb-card-body",[],null,null,null,t.e,t.a)),a.tb(3,49152,null,0,i.a,[],null,null),(n()(),a.ub(4,0,null,0,12,"nb-tabset",[["fullWidth",""]],[[2,"full-width",null]],[[null,"changeTab"]],function(n,l,e){var a=!0;return"changeTab"===l&&(a=!1!==n.component.toggleLoadingAnimation()&&a),a},j.d,j.b)),a.tb(5,1097728,null,1,k.b,[I.a,a.h],{fullWidth:[0,"fullWidth"]},{changeTab:"changeTab"}),a.Kb(603979776,1,{tabs:1}),(n()(),a.ub(7,16777216,null,0,4,"nb-tab",[["nbSpinnerSize","xxlarge"],["nbSpinnerStatus","success"],["tabTitle","Tab 1"]],[[2,"nb-spinner-container",null],[2,"disabled",null],[2,"content-active",null]],null,null,j.c,j.a)),a.tb(8,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),a.tb(9,49152,[[1,4]],0,k.a,[],{tabTitle:[0,"tabTitle"]},null),(n()(),a.ub(10,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),a.Mb(-1,null,[" A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "])),(n()(),a.ub(12,16777216,null,0,4,"nb-tab",[["nbSpinnerSize","xxlarge"],["nbSpinnerStatus","info"],["tabTitle","Tab 2"]],[[2,"nb-spinner-container",null],[2,"disabled",null],[2,"content-active",null]],null,null,j.c,j.a)),a.tb(13,81920,null,0,b.a,[a.S,a.j,a.F,a.k],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),a.tb(14,49152,[[1,4]],0,k.a,[],{tabTitle:[0,"tabTitle"]},null),(n()(),a.ub(15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),a.Mb(-1,null,[" Nebular's primary goal is to assemble together and connect the most awesome features and libraries creating an efficient ecosystem to speed up and simplify the development. "]))],function(n,l){var e=l.component;n(l,1,0,"xsmall"),n(l,5,0,""),n(l,8,0,"success","xxlarge",e.loading),n(l,9,0,"Tab 1"),n(l,13,0,"info","xxlarge",e.loading),n(l,14,0,"Tab 2")},function(n,l){n(l,0,1,[a.Eb(l,1).xxsmall,a.Eb(l,1).xsmall,a.Eb(l,1).small,a.Eb(l,1).medium,a.Eb(l,1).large,a.Eb(l,1).xlarge,a.Eb(l,1).xxlarge,a.Eb(l,1).active,a.Eb(l,1).disabled,a.Eb(l,1).primary,a.Eb(l,1).info,a.Eb(l,1).success,a.Eb(l,1).warning,a.Eb(l,1).danger,a.Eb(l,1).hasAccent,a.Eb(l,1).primaryAccent,a.Eb(l,1).infoAccent,a.Eb(l,1).successAccent,a.Eb(l,1).warningAccent,a.Eb(l,1).dangerAccent,a.Eb(l,1).activeAccent,a.Eb(l,1).disabledAccent]),n(l,4,0,a.Eb(l,5).fullWidthValue),n(l,7,0,a.Eb(l,8).isSpinnerExist,a.Eb(l,9).disabled,a.Eb(l,9).activeValue),n(l,12,0,a.Eb(l,13).isSpinnerExist,a.Eb(l,14).disabled,a.Eb(l,14).activeValue)})}function P(n){return a.Ob(0,[(n()(),a.ub(0,0,null,null,1,"nb-app-spinner-tabs",[],null,null,null,L,F)),a.tb(1,49152,null,0,C,[],null,null)],null,null)}var D=a.qb("nb-app-spinner-tabs",C,P,{},{},[]),R=e("Ip0R"),U=e("gIcY"),N=e("i6JN"),G=e("YNTD"),Z=e("0AKQ"),B=e("sQZK"),X=e("9bB3"),Y=function(){return function(){}}();e.d(l,"SpinnerModuleNgFactory",function(){return V});var V=a.rb(c,[],function(n){return a.Bb([a.Cb(512,a.j,a.fb,[[8,[u.a,r.a,p,f,w,_,D]],[3,a.j],a.y]),a.Cb(4608,R.p,R.o,[a.v,[2,R.E]]),a.Cb(4608,U.A,U.A,[]),a.Cb(1073742336,R.c,R.c,[]),a.Cb(1073742336,U.y,U.y,[]),a.Cb(1073742336,U.i,U.i,[]),a.Cb(1073742336,I.p,I.p,[[2,I.v],[2,I.l]]),a.Cb(1073742336,N.a,N.a,[]),a.Cb(1073742336,G.a,G.a,[]),a.Cb(1073742336,Z.a,Z.a,[]),a.Cb(1073742336,B.a,B.a,[]),a.Cb(1073742336,X.a,X.a,[]),a.Cb(1073742336,Y,Y,[]),a.Cb(1073742336,c,c,[]),a.Cb(1024,I.j,function(){return[[{path:"spinner-button.component",component:s},{path:"spinner-card.component",component:g},{path:"spinner-colors.component",component:A},{path:"spinner-sizes.component",component:T},{path:"spinner-tabs.component",component:C}]]},[])])})},k3KB:function(n,l,e){"use strict";e.d(l,"a",function(){return a}),e("NfCQ");var a=function(){function n(l){this.layoutDirectionService=l,this.colorClass=n.STATUS_PRIMARY,this.text=""}return Object.defineProperty(n.prototype,"status",{set:function(n){n&&(this.colorClass=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positionClass",{get:function(){if(!this.position)return n.TOP_RIGHT;var l=this.layoutDirectionService.isLtr(),e=l?"right":"left";return this.position.replace(/\bstart\b/,l?"left":"right").replace(/\bend\b/,e)},enumerable:!0,configurable:!0}),n.TOP_LEFT="top left",n.TOP_RIGHT="top right",n.BOTTOM_LEFT="bottom left",n.BOTTOM_RIGHT="bottom right",n.TOP_START="top start",n.TOP_END="top end",n.BOTTOM_START="bottom start",n.BOTTOM_END="bottom end",n.STATUS_PRIMARY="primary",n.STATUS_INFO="info",n.STATUS_SUCCESS="success",n.STATUS_WARNING="warning",n.STATUS_DANGER="danger",n}()}}]);