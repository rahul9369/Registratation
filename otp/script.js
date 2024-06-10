document.getElementById("otpForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const otp = document.getElementById("otp").value;
  const messageElement = document.getElementById("message");

  if (otp === "123456") {
    // Replace "123456" with the actual OTP logic
    messageElement.style.color = "green";
    messageElement.textContent = "OTP verified successfully!";
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid OTP. Please try again.";
  }
});

document
  .getElementById("resetOtpButton")
  .addEventListener("click", function () {
    document.getElementById("otp").value = "";
    document.getElementById("message").textContent = "";
  });
