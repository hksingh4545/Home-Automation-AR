var value=2;
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
	        Object.keys(scale).forEach((key) => scale[key] = scale[key]);
		aEntity.setAttribute('scale', scale);
		if(value==2){
		var url="http://192.168.43.232/24/on";
		window.open(url, "_blank");
		value=1;
}
		else{var url="http://192.168.43.232/24/off";
		window.open(url, "_blank");
		value=2;
		}
            }
        });
}});
