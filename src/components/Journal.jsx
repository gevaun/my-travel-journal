import mapPin from '/src/assets/map-pin.svg'

export default function Journal(props) {
    console.log(props)
    return (
        <div className="flex justify-center p-6">
            <div className="p-1 border border-gray-200 rounded-md text-center">
                <div className="p-4 h-80 items-center justify-center">
                    <img src={`/${props.item.coverImg.src}`} alt={props.item.mapUrl} className="h-full rounded-md"/>
                </div>
                <div className="text-xs opacity-75">
                    {props.item.location} by <a href={props.item.coverImg?.attrib?.authorUrl} className="opacity-75">{props.item.coverImg?.attrib?.author}</a>
                </div>
            </div>
            <div className="space-y-1 w-96 ps-4 self-center">
                <div className="flex gap-1">
                    <img src={mapPin} className="w-4"/>
                    {props.item.country}
                    <span className="w-4"></span>
                    <a href={props.item.mapUrl} className="underline underline-offset-4 decoration-1 opacity-50 hover:opacity-75" target="new">View on Google Maps</a>
                </div>
                <div className="text-2xl font-bold pt-2 pb-4">{props.item.location}</div>
                <div className="text-xs font-medium">{props.item.startDate} - {props.item.endDate}</div>
                <div>{props.item.description}</div>
            </div>
        </div>
    )
}