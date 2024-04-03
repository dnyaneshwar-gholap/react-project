import { useState } from "react";
import { ReviewList } from "./ReviewList";
import { AddReview } from "./AddReview";

export const Review = ({ reviewsMode }) => {

    const [bikeName, setBikeName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    let nextId = 0;

    const handleAddReviewClick = () => {
        setReviews([
            ...reviews,
            { id: nextId++, bikeName: bikeName, review: reviewText }
        ])
        setBikeName('');
        setReviewText('');

    }

    const handleReviewTextChange = (e) => {
        setReviewText(e.target.value)
    }

    const handleBikeNameChange = (e) => {
        setBikeName(e.target.value)
    }

    return (
        <div>
            <div className="container mt-4">

                <AddReview reviewText={reviewText} updateReviewText={handleReviewTextChange} addReview={handleAddReviewClick} bikeName={bikeName} updateBikeName={handleBikeNameChange} />

                {reviews.map(review => (
                    <ReviewList key={nextId++} review={review} reviewsMode={reviewsMode} />

                ))}

                <div style={{color: reviewsMode === 'light' ? 'black' : 'white'}}>
                    <b>TVS Apache RTR 160</b>
                    <p>The TVS Apache RTR 160 is far from just a bike; it’s a snapshot of my running DNA that will keep you entertained on the road every day. This bike offers a thrilling riding experience that stimulates the senses with its appealing looks and essential mechanics. The Apache RTR 160 excels in definition and taste, making every lift a compelling experience. Whether connecting megacity streets or floating along roads, it’s easy to see why thrill-seeking cyclists are happy for the fast, agile, and sharp running of this bike. Feel the bubbling excitement with the TVS Apache RTR 160.</p>
                </div>
            </div>

        </div>
    )
}





