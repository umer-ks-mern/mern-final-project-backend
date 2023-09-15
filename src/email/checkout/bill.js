import transport from "../../config/nodemailer.js";

const checkoutEmail = (email, bill) => {
  const subject = "Order Confirmation and Bill";
  const text = "Your Order is Confirmed!!\n\nBill Details:\n\n";

  // Add bill details to the email text
  text += `Total Amount: $${bill.total.toFixed(2)}\n`;
  text += "Products:\n";
  for (const product of bill.products) {
    text += `- ${product.product_name} (Quantity: ${
      product.quantity
    }, Price: $${product.price.toFixed(2)})\n`;
  }

  transport.sendMail(
    {
      from: "umer@gmail.com",
      to: email,
      subject: subject,
      text: text,
    },
    (error, res) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log(res, `Email to ${email} sent:`);
      }
    }
  );
};

export default checkoutEmail;
