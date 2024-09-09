export default function List({listDatas})
{
    return (
        <ul className="list-unstyled custom-list my-4">
            {listDatas.map((listData, index) => {return (<li key={index}>{listData.list}</li>)} )}
        </ul>
    )
}