//find current temparature of a city
const loadCityTemparature = ( city ) =>
{

    fetch( url )
        .then( res => res.json() )
        .then( data => displayData( data ) )
}
const displayData = ( data ) =>
{

    const tempCity = document.getElementById( 'temparature' )
    const tempCurrent = data.main.temp
    tempCity.innerText = tempCurrent

    setCondition( data )
}

const setCondition = data =>
{
    console.log( data.weather[ 0 ].main )
    // set the weather condition
    const condition = document.getElementById( 'condition' )
    condition.innerText = data.weather[ 0 ].main

}

//by clicking search button change the temparature of specified city
document.getElementById( 'search-btn' ).addEventListener( 'click', function ()
{
    const searchInput = document.getElementById( "search-input" )
    const cityName = searchInput.value

    const cityNam = document.getElementById( 'cityName' )
    cityNam.innerText = cityName

    loadCityTemparature( cityName )
} )
loadCityTemparature( 'dhaka' )