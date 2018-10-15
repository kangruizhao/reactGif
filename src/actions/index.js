import axios from 'axios';
  const GIPHY_KEY='3PchG3zJ0pfXToZhdTG9yCXrmwcqDutY';
export const handleupload=(value,history)=>{
  let formData = new FormData();
  formData.append('file',value.file);
  formData.append('source_image_url',value.source_image_url);
  formData.append('tags',value.tags);
  formData.append('source_post_url',value.source_post_url);
  var url=` https://upload.giphy.com/v1/gifs?api_key=${GIPHY_KEY}`;
  axios.post(url,formData).then(function(res){
    console.log(res);
  }).catch(function(res){
    console.log(res);
  })
}
export function clean(){

  return { type: "FETCH_GIFS", payload:null };

}
export function fetchAGif(id){
  var url=` http://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_KEY}`;
  return dispatch=>{
    const res=axios.get(url).then(function(res){
      dispatch({ type: "FETCH_AGIF", payload: res.data.data });
    })
  }
}
export function searchAction(key,limit){
  var url=` http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${key}&limit=${limit}`;
  return dispatch=>{
    const res=axios.get(url).then(function(res){
      dispatch({ type: "FETCH_GIFS", payload: res.data.data });
    })
  }
};
export function fetchTrend(offset){
  var url=` http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=${offset}`;
  return dispatch=>{
    const res=axios.get(url).then(function(res){
      dispatch({ type: "FETCH_GIFS", payload: res.data.data });
    })
  }
};

export function addLocal(gif){
  var fl = JSON.parse(localStorage.getItem('flist'));
  if(fl===null){
      fl=[];
    }
  for(var i=0;i<fl.length;i++)
        {
          if(fl[i].id===gif.id)
            {
              return;
            }
        }
    fl.push({id:gif.id,
      trending_datetime:gif.trending_datetime,
      username:gif.username,
      source:gif.source,
      title:gif.title,
      rating:gif.rating,
      images:{
        fixed_width:gif.images.fixed_width
      }
    })
    localStorage.setItem('flist', JSON.stringify(fl));
    location.reload();
}
export function fetchFavor(){
   const res= [];
    var fl = JSON.parse(localStorage.getItem('flist'));
     return { type: "FETCH_GIFS", payload: fl };


}
export function removeLocal(id){
  var fl = JSON.parse(localStorage.getItem('flist'));
  if(fl===null){
      return
    }
  for(var i=0;i<fl.length;i++)
        {
          if(fl[i].id===id)
            {
              fl.splice(i, 1);
              localStorage.setItem('flist', JSON.stringify(fl));
              location.reload();
              return;
            }
        }
}
