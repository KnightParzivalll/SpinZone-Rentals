document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("http://localhost:3000/api/feedback");
    if (!response.ok) {
      throw new Error("Ошибка при получении отзывов");
    }
    const feedbacks = await response.json();
    const feedbackList = document.querySelector(".feedback-cards");
    feedbackList.innerHTML = "";

    feedbacks.forEach((feedback) => {
      if (feedback.gender === "female") {
        feedback.avatar = "http://localhost:3000/api/images/woman_avatar.png";
      } else {
        feedback.avatar = "http://localhost:3000/api/images/man_avatar.png";
      }

      const cardContainer = document.createElement("div");
      cardContainer.classList.add("feedback-card-container");

      const card = document.createElement("div");
      card.classList.add("feedback-card");

      card.innerHTML = `
        <img src=${feedback.avatar} alt=""/>
        <div class="feedback-card-text">
            <p>${feedback.text}</p>
        </div>
        <div class="feedback-card-author">
            <p>${feedback.last_name} ${feedback.first_name}</p>
        </div>
        `;

      cardContainer.appendChild(card);
      feedbackList.append(cardContainer);
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
});
