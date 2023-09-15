const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    try{
        const search = form.elements.query.value;
        //console.log(search);
        const config = { params: { q: search } }
        const res = await axios.get('https://api.tvmaze.com/search/shows', config);
        // const img = document.createElement('IMG');
        // img.src = res.data[0].show.image.medium;
        // document.body.append(img);
        makeImages(res.data)
        form.elements.query.value = '';
    }
    catch(e){
        console.log('Problem occured:',e)
    }
    
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;  
        document.body.append(img);
        }
    }
}


