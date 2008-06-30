YUI.add("dd-ddm-drop",function(A){A.mix(A.DD.DDM,{_activeShims:[],_hasActiveShim:function(){return((this._activeShims.length)?true:false);},_addActiveShim:function(C){var B=true;A.each(this._activeShims,function(E,D){if(E._yuid===C._yuid){B=false;}});if(B){this._activeShims[this._activeShims.length]=C;}},_removeActiveShim:function(C){var B=[];A.each(this._activeShims,function(E,D){if(E._yuid!==C._yuid){B[B.length]=E;}});this._activeShims=B;},syncActiveShims:function(){var B=this._lookup();A.each(B,function(D,C){D.sizeShim.call(D);},this);return B;},_oldMode:0,mode:0,POINT:0,INTERSECT:1,STRICT:2,useHash:true,activeDrop:null,validDrops:[],otherDrops:{},tars:[],addValid:function(B){this.validDrops[this.validDrops.length]=B;return this;},isOverTarget:function(B){if(A.Lang.isObject(this.activeDrag)&&B){var C=this.activeDrag.mouseXY;if(C){if(this.mode==this.STRICT){return this.activeDrag.get("dragNode").inRegion(B.region,true,this.activeDrag.region);}else{return B.shim.intersect({top:C[1],bottom:C[1],left:C[0],right:C[0]},B.region).inRegion;}}else{return false;}}else{return false;}},clearCache:function(){this.validDrops=[];this.otherDrops={};this._activeShims=[];},_setMode:function(){this._oldMode=this.mode;if(this.activeDrag&&(this.activeDrag.get("dragMode")!==-1)){this.mode=this.activeDrag.get("dragMode");}},_resetMode:function(){this.mode=this._oldMode;},_activateTargets:function(){this._setMode();this.clearCache();A.each(this.tars,function(C,B){C._activateShim.apply(C,[]);},this);this._handleTargetOver();},getBestMatch:function(F,D){var C=null,E=0;A.each(F,function(I,H){var G=this.activeDrag.get("dragNode").intersect(I.get("node"));I.region.area=G.area;if(G.inRegion){if(G.area>E){E=G.area;C=I;}}},this);if(D){var B=[];A.each(F,function(H,G){if(H!==C){B[B.length]=H;}},this);return[C,B];}else{return C;}},_deactivateTargets:function(){var B=[];if(this.activeDrag&&!A.Lang.isNull(this.activeDrop)&&this.otherDrops[this.activeDrop]){if(!this.mode){B=this.otherDrops;delete B[this.activeDrop];}else{var C=this.getBestMatch(this.otherDrops,true);this.activeDrop=C[0];B=C[1];}this.activeDrop.fire("drop:hit",{drag:this.activeDrag,drop:this.activeDrop,others:B});this.activeDrag.fire("drag:drophit",{drag:this.activeDrag,drop:this.activeDrop,others:B});}else{if(this.activeDrag){this.activeDrag.fire("drag:dropmiss");}else{}}this.activeDrop=null;A.each(this.tars,function(E,D){E._deactivateShim.apply(E,[]);},this);this._resetMode();},_dropMove:function(B){if(this._hasActiveShim()){this._handleTargetOver();}else{A.each(this.otherDrops,function(D,C){D._handleOut.apply(D,[]);});}},_lookup:function(){if(!this.useHash){return this.validDrops;}var B=[];A.each(this.validDrops,function(D,C){if(D.shim.inViewportRegion(false,D.region)){B[B.length]=D;}});return B;},_handleTargetOver:function(){var B=this._lookup();A.each(B,function(D,C){D._handleTargetOver.call(D);},this);},regTarget:function(B){this.tars[this.tars.length]=B;},unregTarget:function(C){var B=[];A.each(this.tars,function(E,D){if(E!=C){B[B.length]=E;}},this);this.tars=B;},rnd:function(B){return(Math.round(B/100)*100);},getDrop:function(C){var B=false,D=A.Node.get(C);if(D instanceof A.Node){A.each(this.tars,function(F,E){if(D.compareTo(F.get("node"))){B=F;}});}return B;}},true);},"@VERSION@",{requires:["dd-ddm"],skinnable:false});