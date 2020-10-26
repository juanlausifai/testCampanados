

//Guardar en el cache dinamico
function ActualizaCacheDinamico(dynamicCache, req ,res){

    if (res.ok) {
        
        return caches.open(dynamicCache).then(cache => {

            //Guardo en el cache la req
            cache.put(req, res.clone());
            return res.clone();

        });
    }else{
        return res;
    }


}