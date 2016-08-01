function RichMarker(e){var t=e||{};this.ready_=!1,this.dragging_=!1,void 0==e.visible&&(e.visible=!0),void 0==e.shadow&&(e.shadow="7px -3px 5px rgba(88,88,88,0.7)"),void 0==e.anchor&&(e.anchor=RichMarkerPosition.BOTTOM),this.setValues(t)}RichMarker.prototype=new google.maps.OverlayView,window.RichMarker=RichMarker,RichMarker.prototype.getVisible=function(){return this.get("visible")},RichMarker.prototype.getVisible=RichMarker.prototype.getVisible,RichMarker.prototype.setVisible=function(e){this.set("visible",e)},RichMarker.prototype.setVisible=RichMarker.prototype.setVisible,RichMarker.prototype.visible_changed=function(){this.ready_&&(this.markerWrapper_.style.display=this.getVisible()?"":"none",this.draw())},RichMarker.prototype.visible_changed=RichMarker.prototype.visible_changed,RichMarker.prototype.setFlat=function(e){this.set("flat",!!e)},RichMarker.prototype.setFlat=RichMarker.prototype.setFlat,RichMarker.prototype.getFlat=function(){return this.get("flat")},RichMarker.prototype.getFlat=RichMarker.prototype.getFlat,RichMarker.prototype.getWidth=function(){return this.get("width")},RichMarker.prototype.getWidth=RichMarker.prototype.getWidth,RichMarker.prototype.getHeight=function(){return this.get("height")},RichMarker.prototype.getHeight=RichMarker.prototype.getHeight,RichMarker.prototype.setShadow=function(e){this.set("shadow",e),this.flat_changed()},RichMarker.prototype.setShadow=RichMarker.prototype.setShadow,RichMarker.prototype.getShadow=function(){return this.get("shadow")},RichMarker.prototype.getShadow=RichMarker.prototype.getShadow,RichMarker.prototype.flat_changed=function(){this.ready_&&(this.markerWrapper_.style.boxShadow=this.markerWrapper_.style.webkitBoxShadow=this.markerWrapper_.style.MozBoxShadow=this.getFlat()?"":this.getShadow())},RichMarker.prototype.flat_changed=RichMarker.prototype.flat_changed,RichMarker.prototype.setZIndex=function(e){this.set("zIndex",e)},RichMarker.prototype.setZIndex=RichMarker.prototype.setZIndex,RichMarker.prototype.getZIndex=function(){return this.get("zIndex")},RichMarker.prototype.getZIndex=RichMarker.prototype.getZIndex,RichMarker.prototype.zIndex_changed=function(){this.getZIndex()&&this.ready_&&(this.markerWrapper_.style.zIndex=this.getZIndex())},RichMarker.prototype.zIndex_changed=RichMarker.prototype.zIndex_changed,RichMarker.prototype.getDraggable=function(){return this.get("draggable")},RichMarker.prototype.getDraggable=RichMarker.prototype.getDraggable,RichMarker.prototype.setDraggable=function(e){this.set("draggable",!!e)},RichMarker.prototype.setDraggable=RichMarker.prototype.setDraggable,RichMarker.prototype.draggable_changed=function(){this.ready_&&(this.getDraggable()?this.addDragging_(this.markerWrapper_):this.removeDragListeners_())},RichMarker.prototype.draggable_changed=RichMarker.prototype.draggable_changed,RichMarker.prototype.getPosition=function(){return this.get("position")},RichMarker.prototype.getPosition=RichMarker.prototype.getPosition,RichMarker.prototype.setPosition=function(e){this.set("position",e)},RichMarker.prototype.setPosition=RichMarker.prototype.setPosition,RichMarker.prototype.position_changed=function(){this.draw()},RichMarker.prototype.position_changed=RichMarker.prototype.position_changed,RichMarker.prototype.getAnchor=function(){return this.get("anchor")},RichMarker.prototype.getAnchor=RichMarker.prototype.getAnchor,RichMarker.prototype.setAnchor=function(e){this.set("anchor",e)},RichMarker.prototype.setAnchor=RichMarker.prototype.setAnchor,RichMarker.prototype.anchor_changed=function(){this.draw()},RichMarker.prototype.anchor_changed=RichMarker.prototype.anchor_changed,RichMarker.prototype.htmlToDocumentFragment_=function(e){var t=document.createElement("DIV");if(t.innerHTML=e,1==t.childNodes.length)return t.removeChild(t.firstChild);for(var r=document.createDocumentFragment();t.firstChild;)r.appendChild(t.firstChild);return r},RichMarker.prototype.removeChildren_=function(e){if(e)for(var t;t=e.firstChild;)e.removeChild(t)},RichMarker.prototype.setContent=function(e){this.set("content",e)},RichMarker.prototype.setContent=RichMarker.prototype.setContent,RichMarker.prototype.getContent=function(){return this.get("content")},RichMarker.prototype.getContent=RichMarker.prototype.getContent,RichMarker.prototype.content_changed=function(){if(this.markerContent_){this.removeChildren_(this.markerContent_);var e=this.getContent();if(e){"string"==typeof e&&(e=e.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),e=this.htmlToDocumentFragment_(e)),this.markerContent_.appendChild(e);for(var t,r=this,i=this.markerContent_.getElementsByTagName("IMG"),o=0;t=i[o];o++)google.maps.event.addDomListener(t,"mousedown",function(e){r.getDraggable()&&(e.preventDefault&&e.preventDefault(),e.returnValue=!1)}),google.maps.event.addDomListener(t,"load",function(){r.draw()});google.maps.event.trigger(this,"domready")}this.ready_&&this.draw()}},RichMarker.prototype.content_changed=RichMarker.prototype.content_changed,RichMarker.prototype.setCursor_=function(e){if(this.ready_){var t="";navigator.userAgent.indexOf("Gecko/")!==-1?("dragging"==e&&(t="-moz-grabbing"),"dragready"==e&&(t="-moz-grab"),"draggable"==e&&(t="pointer")):("dragging"!=e&&"dragready"!=e||(t="move"),"draggable"==e&&(t="pointer")),this.markerWrapper_.style.cursor!=t&&(this.markerWrapper_.style.cursor=t)}},RichMarker.prototype.startDrag=function(e){if(this.getDraggable()&&!this.dragging_){this.dragging_=!0;var t=this.getMap();this.mapDraggable_=t.get("draggable"),t.set("draggable",!1),this.mouseX_=e.clientX,this.mouseY_=e.clientY,this.setCursor_("dragready"),this.markerWrapper_.style.MozUserSelect="none",this.markerWrapper_.style.KhtmlUserSelect="none",this.markerWrapper_.style.WebkitUserSelect="none",this.markerWrapper_.unselectable="on",this.markerWrapper_.onselectstart=function(){return!1},this.addDraggingListeners_(),google.maps.event.trigger(this,"dragstart")}},RichMarker.prototype.stopDrag=function(){this.getDraggable()&&this.dragging_&&(this.dragging_=!1,this.getMap().set("draggable",this.mapDraggable_),this.mouseX_=this.mouseY_=this.mapDraggable_=null,this.markerWrapper_.style.MozUserSelect="",this.markerWrapper_.style.KhtmlUserSelect="",this.markerWrapper_.style.WebkitUserSelect="",this.markerWrapper_.unselectable="off",this.markerWrapper_.onselectstart=function(){},this.removeDraggingListeners_(),this.setCursor_("draggable"),google.maps.event.trigger(this,"dragend"),this.draw())},RichMarker.prototype.drag=function(e){if(!this.getDraggable()||!this.dragging_)return void this.stopDrag();var t=this.mouseX_-e.clientX,r=this.mouseY_-e.clientY;this.mouseX_=e.clientX,this.mouseY_=e.clientY;var i=parseInt(this.markerWrapper_.style.left,10)-t,o=parseInt(this.markerWrapper_.style.top,10)-r;this.markerWrapper_.style.left=i+"px",this.markerWrapper_.style.top=o+"px";var a=this.getOffset_(),s=new google.maps.Point(i-a.width,o-a.height),n=this.getProjection();this.setPosition(n.fromDivPixelToLatLng(s)),this.setCursor_("dragging"),google.maps.event.trigger(this,"drag")},RichMarker.prototype.removeDragListeners_=function(){this.draggableListener_&&(google.maps.event.removeListener(this.draggableListener_),delete this.draggableListener_),this.setCursor_("")},RichMarker.prototype.addDragging_=function(e){if(e){var t=this;this.draggableListener_=google.maps.event.addDomListener(e,"mousedown",function(e){t.startDrag(e)}),this.setCursor_("draggable")}},RichMarker.prototype.addDraggingListeners_=function(){var e=this;this.markerWrapper_.setCapture?(this.markerWrapper_.setCapture(!0),this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,"mousemove",function(t){e.drag(t)},!0),google.maps.event.addDomListener(this.markerWrapper_,"mouseup",function(){e.stopDrag(),e.markerWrapper_.releaseCapture()},!0)]):this.draggingListeners_=[google.maps.event.addDomListener(window,"mousemove",function(t){e.drag(t)},!0),google.maps.event.addDomListener(window,"mouseup",function(){e.stopDrag()},!0)]},RichMarker.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var e,t=0;e=this.draggingListeners_[t];t++)google.maps.event.removeListener(e);this.draggingListeners_.length=0}},RichMarker.prototype.getOffset_=function(){var e=this.getAnchor();if("object"==typeof e)return e;var t=new google.maps.Size(0,0);if(!this.markerContent_)return t;var r=this.markerContent_.offsetWidth,i=this.markerContent_.offsetHeight;switch(e){case RichMarkerPosition.TOP_LEFT:break;case RichMarkerPosition.TOP:t.width=-r/2;break;case RichMarkerPosition.TOP_RIGHT:t.width=-r;break;case RichMarkerPosition.LEFT:t.height=-i/2;break;case RichMarkerPosition.MIDDLE:t.width=-r/2,t.height=-i/2;break;case RichMarkerPosition.RIGHT:t.width=-r,t.height=-i/2;break;case RichMarkerPosition.BOTTOM_LEFT:t.height=-i;break;case RichMarkerPosition.BOTTOM:t.width=-r/2,t.height=-i;break;case RichMarkerPosition.BOTTOM_RIGHT:t.width=-r,t.height=-i}return t},RichMarker.prototype.onAdd=function(){if(!this.markerWrapper_){if(this.markerWrapper_=document.createElement("DIV"),this.markerWrapper_.style=this.style||{},this.style){var e=this,t=Object.keys(e.style);t.forEach(function(t){e.markerWrapper_.style[t]=e.style[t]})}this.markerWrapper_.style.position="absolute"}if(this.getZIndex()&&(this.markerWrapper_.style.zIndex=this.getZIndex()),this.markerWrapper_.style.display=this.getVisible()?"":"none",!this.markerContent_){this.markerContent_=document.createElement("DIV"),this.markerWrapper_.appendChild(this.markerContent_);var e=this;google.maps.event.addDomListener(this.markerContent_,"click",function(t){t.stopPropagation(),google.maps.event.trigger(e,"click",t)}),google.maps.event.addDomListener(this.markerContent_,"mouseover",function(t){t.stopPropagation(),google.maps.event.trigger(e,"mouseover",t)}),google.maps.event.addDomListener(this.markerContent_,"mouseout",function(t){t.stopPropagation(),google.maps.event.trigger(e,"mouseout",t)})}this.ready_=!0,this.content_changed(),this.flat_changed(),this.draggable_changed();var r=this.getPanes();r&&r.overlayMouseTarget.appendChild(this.markerWrapper_),google.maps.event.trigger(this,"ready")},RichMarker.prototype.onAdd=RichMarker.prototype.onAdd,RichMarker.prototype.draw=function(){if(this.ready_&&!this.dragging_){var e=this.getProjection();if(e){var t=this.get("position"),r=e.fromLatLngToDivPixel(t),i=this.getOffset_();this.markerWrapper_.style.top=r.y+i.height+"px",this.markerWrapper_.style.left=r.x+i.width+"px";var o=this.markerContent_.offsetHeight,a=this.markerContent_.offsetWidth;a!=this.get("width")&&this.set("width",a),o!=this.get("height")&&this.set("height",o)}}},RichMarker.prototype.draw=RichMarker.prototype.draw,RichMarker.prototype.onRemove=function(){this.markerWrapper_&&this.markerWrapper_.parentNode&&this.markerWrapper_.parentNode.removeChild(this.markerWrapper_),this.removeDragListeners_()},RichMarker.prototype.onRemove=RichMarker.prototype.onRemove;var RichMarkerPosition={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};window.RichMarkerPosition=RichMarkerPosition;