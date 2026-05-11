import { useState } from "react";
import "./PaymentSection.scss";

/* ─────────────────────────────────────────────
   Replace this with your actual Razorpay Key ID
   Get it from https://dashboard.razorpay.com
   ───────────────────────────────────────────── */
const RAZORPAY_KEY_ID = "rzp_test_SjDk7UgLa3iPv5";

const loadRazorpay = () =>
  new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const PaymentSection = ({ projectName, price, projectId }) => {
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const handleBuy = async () => {
    setLoading(true);

    const ok = await loadRazorpay();
    if (!ok) {
      alert("Could not load payment gateway. Please check your connection.");
      setLoading(false);
      return;
    }

    /* ── Razorpay options ──────────────────────────────────────────────
       In production you would create an order on YOUR backend first and
       pass the order_id here.  For a portfolio demo the amount/currency
       alone is enough to open the checkout.
    ── ──────────────────────────────────────────────────────────────── */
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: price * 100,          // Razorpay expects paise (1 INR = 100 paise)
      currency: "INR",
      name: "Rudra's Portfolio",
      description: `Source code – ${projectName}`,
      image: "/images/me.webp",
      handler: function (response) {
        setPaid(true);
        console.log("Payment success:", response);
        // TODO: send response.razorpay_payment_id to your backend to verify
        alert(
          `✅ Payment successful!\nPayment ID: ${response.razorpay_payment_id}\n\nYou will receive the source code via email shortly.`
        );
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#218306",
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert(`Payment failed: ${response.error.description}`);
      setLoading(false);
    });
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="payment-section">
      {/* pixel-art divider */}
      <div className="payment-divider">
        <span className="payment-divider-line" />
        <span className="payment-divider-icon">⛏</span>
        <span className="payment-divider-line" />
      </div>

      <div className="payment-card">
        <div className="payment-card-header">
          <span className="payment-label">SOURCE CODE</span>
          <span className="payment-badge">FOR SALE</span>
        </div>

        <p className="payment-description">
          Get the full source code for <strong>{projectName}</strong> — including
          all assets, comments, and setup instructions.
        </p>

        <ul className="payment-features">
          <li>✅ Full source code</li>
          <li>✅ Setup &amp; run instructions</li>
          <li>✅ All assets included</li>
          <li>✅ Lifetime access</li>
        </ul>

        <div className="payment-footer">
          <div className="payment-price">
            <span className="payment-currency">₹</span>
            <span className="payment-amount">{price.toLocaleString("en-IN")}</span>
          </div>

          {paid ? (
            <div className="payment-success-badge">
              ✅ PURCHASED
            </div>
          ) : (
            <button
              className={`payment-btn ${loading ? "payment-btn--loading" : ""}`}
              onClick={handleBuy}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="payment-spinner" /> Processing…
                </>
              ) : (
                <>🛒 Buy Source Code</>
              )}
            </button>
          )}
        </div>

        <p className="payment-note">
          Secure payment via Razorpay · UPI / Cards / Net Banking accepted
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
