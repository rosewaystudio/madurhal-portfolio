"use client";

export default function EmailLink({ className }) {
  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText("madurhal@gmail.com").then(() => {
      const val = e.currentTarget.querySelector(".port-contact-link-val");
      if (val) {
        const original = val.textContent;
        val.textContent = "copied to clipboard ✓";
        setTimeout(() => { val.textContent = original; }, 2000);
      }
    }).catch(() => {
      // Clipboard failed — fall back to opening mailto directly
      window.location.href = "mailto:madurhal@gmail.com";
    });
  };

  return (
    <a href="mailto:madurhal@gmail.com" className={className} onClick={handleClick}>
      <span className="port-contact-link-label">email</span>
      <span className="port-contact-link-val">madurhal@gmail.com</span>
    </a>
  );
}