export const AddReview = ({ reviewText, updateReviewText, addReview, bikeName, updateBikeName }) => {


    return (
        <div>
            <div>
                <input className="form-control mb-2" placeholder="Enter bike name" type="text" value={bikeName} onChange={updateBikeName} />
                <textarea className="form-control mb-2" placeholder="Write review " type="text" value={reviewText} onChange={updateReviewText} />
                <button type="submit" className=" btn btn-primary mb-2" onClick={addReview}>Add</button>
            </div>
        </div>
    )
}