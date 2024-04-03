export const ReviewList = ({ review, reviewsMode }) => {


    return (
        <div style={{color: reviewsMode === 'light' ? 'black' : 'white'}}>
            <b>{review.bikeName}</b>
            <p>{review.review}</p>
        </div>
    )
}