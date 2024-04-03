export const SearchBox = ({searchItem,updateText}) => {

    

   

    return(
        <div>
            <div className="d-flex justify-content-center m-4  ">
                <input placeholder="Search bikes by model and brand " className="form-control w-50 shadow p-2 mb-2 bg-body-tertiary rounded" type="text" value={searchItem} onChange={updateText} />
            </div>
        </div>
    )
}