import { useState, useEffect } from "react";
import { Card, CardContent } from "./Card/Card";
import { Button } from "./Card/Button";
import { Star } from "lucide-react";
import "../ClientFeedBack/ClientFeedBack.css";
import avatar1 from "../../../assets/avatar1.jpg";
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";

const ClientFeedBack = () => {
  const avatars = [avatar1, avatar2, avatar3];

  // Charger les feedbacks depuis localStorage ou utiliser les valeurs par défaut
  const getStoredFeedbacks = () => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("FeedbackClinic"));
    return storedFeedbacks && storedFeedbacks.length > 0
      ? storedFeedbacks
      : [
          { name: "John Doe", rating: 5, comment: "I had a great", avatar: avatar1 },
          { name: "Alex Doe", rating: 4, comment: "good experience", avatar: avatar2 },
          { name: "Lucy Doe", rating: 5, comment: "You are the best", avatar: avatar3 },
        ];
  };

  const [feedbacks, setFeedbacks] = useState(getStoredFeedbacks);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Sauvegarde automatique dans localStorage si feedbacks change
  useEffect(() => {
    localStorage.setItem("FeedbackClinic", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || rating === 0 || !comment) return;

    const avatarIndex = feedbacks.length % avatars.length;
    const newFeedback = { name, rating, comment, avatar: avatars[avatarIndex] };

    setFeedbacks([...feedbacks, newFeedback]);

    // Réinitialisation des champs
    setName("");
    setRating(0);
    setComment("");
  };

  const isLogged = JSON.parse(localStorage.getItem("Login"));

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">
        Patients <span style={{ color: "#1BB13C" }}>Feedback</span>
      </h2>
      <p className="feedback-description">
        These reviews are shared by our patients who have been treated at our clinic. Their experience reflects the quality of our care. Don't hesitate to leave yours!
      </p>

      <div className="feedback-grid" style={{ marginBottom: "30px" }}>
        {feedbacks.map((fb, index) => (
          <Card key={index} className="feedback-card">
            <CardContent>
              <div className="feedback-header">
                <img src={fb.avatar} alt="avatar" className="feedback-avatar" />
                <div>
                  <h3 className="feedback-name">{fb.name}</h3>
                  <div className="feedback-stars">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} className="star-filled" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="feedback-comment">{fb.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {isLogged && (
        <div className="feedback-form-container">
          <h3 className="form-title" style={{ color: "#1B5C9E" }}>
            Leave <span style={{ color: "#1BB13C" }}>feedback</span>
          </h3>
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => setRating(star)}
                  className={`star ${star <= rating ? "star-filled" : "star-empty"}`}
                />
              ))}
            </div>
            <textarea
              placeholder="Your feedback"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea-field"
            ></textarea>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ClientFeedBack;
