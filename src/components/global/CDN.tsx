import React, { useState } from "react";

interface CDNProps {
  path: string;
  name: string;
  ext: string;
  fileNameOverride?: string;
}

export default function CDN({ path, name, ext, fileNameOverride }: CDNProps) {
  const [copied, setCopied] = useState(false); // State to handle copied message
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect

  const cleanedPath = path.replace(/^\/+|\/+$/g, "");
  const cleanedNameP1 = name.split("'").join("");
  const cleanedName = cleanedNameP1
    .split(/[^a-zA-Z0-9]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  const img_url = `https://bcuw-cdn.pages.dev/${cleanedPath}/${
    fileNameOverride ? fileNameOverride : cleanedName
  }.${ext}`;
  const copy_url = `https://cdn.bcuw.xyz/${cleanedPath}/${
    fileNameOverride ? fileNameOverride : cleanedName
  }.${ext}`;

  const handleRightClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // Prevent default right-click menu
    navigator.clipboard.writeText(copy_url)
      .then(() => {
        setCopied(true); // Show the copied message
        console.log(`Copied to clipboard: ${copy_url}`);
        setTimeout(() => {
          setFadeOut(true); // Start fade-out after 2 seconds
          setTimeout(() => {
            setCopied(false); // Hide the copied message after fading out
            setFadeOut(false); // Reset fade-out state
          }, 500); // Wait for the fade-out duration
        }, 2000); // Display message for 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy the URL: ", err);
      });
  };

  const messageStyle: React.CSSProperties = {
    position: "absolute",
    top: "-10px",
    right: "0",
    backgroundColor: "var(--ifm-color-primary)",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    transition: "opacity 0.5s ease", // Fade transition
    opacity: fadeOut ? 0 : 1, // Apply fade-out effect based on state
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={img_url} alt={name} onContextMenu={handleRightClick} />
      {copied && (
        <span style={messageStyle}>
          Copied URL!
        </span>
      )}
    </div>
  );
}
