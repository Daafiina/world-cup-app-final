<template>
    <section>
        <div class="container">
            
                <div class="form-group">
                    <label for="fullName">Full name:</label>
                    <input type="text" id="fullName" >
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" >
                </div>
  
                <div class="form-group">
                    <label for="massage">Massage:</label>
                    <textarea id="massage" rows="5" ></textarea>
                </div>
  
                <button type="submit">Submit</button>
            
        </div>
    </section>
  </template>
  
  
  <style>
  * {
    box-sizing: border-box;
    font-family: "Montserrat";
  }
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
  }
  .form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(8, 8, 8, 0.199);
    margin-top: 5px;
  }
  textarea {
    resize: vertical;
  }

  </style>