const newsApiLoad = () =>
{

    fetch( url )
        .then( res => res.json() )
        .then( data => displayData( data ) )


    fetch( url )
        .then( res => res.json() )
        .then( data => displayData( data ) )
}
const displayData = data =>
{
    console.log( data )
}

newsApiLoad()