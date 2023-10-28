import "./CSS/home.css";
import React, { useState, useRef } from "react";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <img src="/ggbs.png" alt="our logo icon" />
          <h3>Lan Detection</h3>
        </nav>
      </header>

      <main>
        <div className="logoAndSlogan"></div>

        <h1 style={{ color: "white", textAlign: "center" }}>
          Upload Your Image To Check A LandSlide Chances
        </h1>

             {/* Display a placeholder image or text */}
             {selectedImage ? (
          <div className="upload-image-box">
            <img src={selectedImage} alt="Selected Image" />
          </div>
        ) : (
          <div className="upload-image-box">
            <span>No image selected</span>
          </div>
        )}

        <button className="submit-button" onClick={openFilePicker}>
          Upload Image
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

      </main>
    </div>
  );
};

export default Home;
