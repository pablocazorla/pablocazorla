$('document').ready(function(){
	
	//Stores
	var $gallery = $('#gallery'),
		$f = $gallery.find('figure'),
		
		nro = 20;
		
	
		
		for(var a = 0;a<nro;a++){
			var $nf = $f.clone();
			var img = $nf.find('img');
			
			var src = img.attr('src')+'?'+Math.floor(Math.random()*9999999);
			img.attr('src',src);
			
			
			$gallery.append($nf.show());
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
	
	
});
