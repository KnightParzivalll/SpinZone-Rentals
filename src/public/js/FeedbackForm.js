document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      first_name: form.querySelector("#first-name").value,
      last_name: form.querySelector("#last-name").value,
      text: form.querySelector("#message").value,
      gender: form.querySelector('input[name="gender"]:checked').value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Если запрос успешен, обрабатываем успешный результат
        console.log("Отзыв успешно отправлен!");
        form.reset(); // Очищаем форму после успешной отправки
      } else {
        // Если запрос не удался, выводим сообщение об ошибке
        console.error("Ошибка при отправке отзыва:", response.statusText);
      }
    } catch (error) {
      // Если возникла ошибка при выполнении запроса, выводим ее в консоль
      console.error("Ошибка при отправке отзыва:", error);
    }
  });
});
