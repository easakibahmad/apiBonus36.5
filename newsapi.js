const newsApiLoad = () =>
{
    // const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-09-05&sortBy=popularity&apiKey= 2e7150d41d0b4a49ba6f9831590c5680'

    const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-09-05&sortBy=popularity&apiKey=${ `2e7150d41d0b4a49ba6f9831590c5680` }`
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