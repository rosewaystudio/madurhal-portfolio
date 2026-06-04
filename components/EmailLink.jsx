"use client";

export default function EmailLink({ className }) {
  const handleClick = (e) => {
    e.preventDefault();
    const email = "madurhal@gmail.com";
    const val = e.currentTarget.querySelector(".port-contact-link-val");

    const showCopied = () => {
      if (val) {
        const original = val.textContent;
        val.textContent = "copied to clipboard ✓";
        setTimeout(() => { val.textContent = original; }, 2000);
      }
    };

    const tryClipboard = () => {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        showCopied();
      } catch {
        window.location.href = `mailto:${email}`;
      } finally {
        document.body.removeChild(ta);
      }
    };

    navigator.clipboard?.writeText(email)
      .then(showCopied)
      .catch(tryClipboard);
  };

  return (
    <a href="mailto:madurhal@gmail.com" className={className} onClick={handleClick}>
      <span className="port-contact-link-label">email</span>
      <span className="port-contact-link-val">madurhal@gmail.com</span>
    </a>
  );
}