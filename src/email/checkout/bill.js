import transport from "../../config/nodemailer.js";
import productModel from "../../model/products.js";

const checkoutEmail = async(email, bill) => {
  const subject = "Order Confirmation and Bill";
  let text = "Your Order is Confirmed!!\n\nBill Details:\n\n";

  // Add bill details to the email text
  text += `Total Amount: $${bill.total.toFixed(2)}\n`;
  text += "Products:\n";
  for (const product of bill.products) {
    const productDoc = await productModel.findById(product.product_id);
    text += `- ${productDoc.name} (Quantity: ${
      product.quantity
    }, Price: $${productDoc.price.toFixed(2)})\n`;
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
