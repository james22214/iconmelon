(function(){define("helpers",["md5"],function(e){var t;return t=function(){function t(){}return t.prototype.getRandom=function(e,t){return Math.floor(Math.random()*(t+1-e)+e)},t.prototype.showLoaderLine=function(e){return e==null&&(e=""),App.$loadingLine.show().addClass(e),this},t.prototype.hideLoaderLine=function(e){return e==null&&(e=""),App.$loadingLine.fadeOut(200,function(){return App.$loadingLine.css({width:"0"}).removeClass(e)}),this},t.prototype.setLoaderLineProgress=function(e){return App.$loadingLine.css({width:""+e+"%"}),this},t.prototype.listenLinks=function(){return $(document.body).on("click","a",function(e){var t;t=$(this);if(t.attr("target")==="_blank"||t.attr("href").match(/mailto:/g)||t.hasClass("js-no-follow"))return;return e.preventDefault(),App.router.navigate(t.attr("href"),{trigger:!0})})},t.prototype.normalizeBoolean=function(e){return e==="false"!==Boolean(e)},t.prototype.unescape=function(e){return e!=null?e.replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&quot;/g,'"'):void 0},t.prototype.generateHash=function(){return e(new Date+(new Date).getMilliseconds()+Math.random(9999999999999)+Math.random(9999999999999)+Math.random(9999999999999))},t.prototype.refreshSvg=function(){return App.$svgWrap.html(App.$svgWrap.html())},t.prototype.getFilterIcon=function(e){var t;return(t=this.currIconIndex)==null&&(this.currIconIndex=0),e==="<"?(this.currIconIndex--,this.currIconIndex<0&&(this.currIconIndex=App.iconsSelected.length-1)):(this.currIconIndex++,this.currIconIndex>=App.iconsSelected.length&&(this.currIconIndex=0),this.currIconIndex++,this.currIconIndex>=App.iconsSelected.length&&(this.currIconIndex=0)),App.iconsSelected[this.currIconIndex]?App.iconsSelected[this.currIconIndex].split(":")[1]:this.getStandartIcon(e)},t.prototype.getStandartIcon=function(e){var t,n,r;return t=App.sectionsCollectionView.collection.at(0).get("icons"),(n=this.currStandartIconIndex)==null&&(this.currStandartIconIndex=0),e==="<"?(this.currStandartIconIndex--,this.currStandartIconIndex<0&&(this.currStandartIconIndex=t.length-1)):(this.currStandartIconIndex++,this.currStandartIconIndex>=t.length&&(this.currStandartIconIndex=0)),((r=t[this.currStandartIconIndex])!=null?r.hash:void 0)||"tick-icon"},t.prototype.upsetSvgShape=function(e){var t,n,r;r=!1,e.isReset&&App.$svgWrap.find("#"+e.hash).remove();if(e.isCheck){n=0;while(n<App.loadedHashes.length)String(App.loadedHashes[n])===String(e.hash)&&(r=!0,n=App.loadedHashes.length),n++}if(!r)return t=$("<g>").html(e.shape).attr("id",e.hash),t.find("*").each(function(t,n){var r;r=$(n);if(!e.isMulticolor&&r.attr("fill")!=="none")return r.removeAttr("fill")}),e.$shapes.append(t),App.loadedHashes.push(e.hash)},t.prototype.addToSvg=function(e){var t;return t=e instanceof $?e.html():e,App.$svgWrap.find("#svg-source").append(t),this.refreshSvg()},t.prototype.placeInSvg=function(e){var t,n;return t="js-icons-data-place",App.$svgWrap.find("#js-icons-data-place").remove(),n=App.$svgWrap.html(),n=n.replace(/<!-- icons data marker -->/gi,"<!-- icons data marker --><defs id='"+t+"'>"+e+"</defs>"),App.$svgWrap.html(n),e},t.prototype.toggleArray=function(e,t,n){var r,i;return e==null?void 0:(i=e.slice(0),r=_.indexOf(i,t),r===-1?i.push(t):n?i.splice(r,1):i=_.without(i,t),i)},t}(),new t})}).call(this);