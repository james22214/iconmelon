(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("router",["backbone","controllers/PagesController"],function(e,n){var r,i;return r=function(e){function r(){return i=r.__super__.constructor.apply(this,arguments),i}return t(r,e),r.prototype.routes={"":"main","/:pageNum":"main",submit:"submit",editr:"editr","support-us":"support","how-to-use":"how","hire-me":"hire","*path":"main"},r.prototype.main=function(e){var t;return e==null&&(e="1"),e=((t=e.match(/\d/gi))!=null?t[0]:void 0)||1,this.startPage(n.main,{pageNum:~~e}),this.checkMainMenuItem(),this.animateHeader()},r.prototype.submit=function(){return this.startPage(n.submit),this.checkMainMenuItem("#js-submit"),this.showHeader()},r.prototype.editr=function(){return this.startPage(n.editr),this.checkMainMenuItem("#js-editr"),this.showHeader()},r.prototype.support=function(){return this.startPage(n.support),this.checkMainMenuItem("#js-support-us"),this.showHeader()},r.prototype.how=function(){return this.startPage(n.how),this.checkMainMenuItem("#js-how"),this.showHeader()},r.prototype.hire=function(){return this.startPage(n.hire),this.checkMainMenuItem("#js-hire"),this.showHeader()},r.prototype.startPage=function(e,t){t==null&&(t={});if(this.currentPage===e)return;return this.currentPage=e,App.main.show(new e(t)),App.$bodyHtml.animate({scrollTop:0})},r.prototype.animateHeader=function(){var e=this;return setTimeout(function(){return App.$mainHeader.addClass("animated fadeInDown")},1e3)},r.prototype.showHeader=function(){return App.$mainHeader.css({opacity:1}).addClass("no-animation")},r.prototype.checkMainMenuItem=function(e){return App.$mainHeader.find("a").removeClass("is-check").filter(e).addClass("is-check")},r}(e.Router),r})}).call(this);