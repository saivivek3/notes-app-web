export function dateFormatConverter(isoDate){
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-US",{
        day:"2-digit",
        month:"short",
        year:"numeric"
    }).format(date).replaceAll(",","")

}
