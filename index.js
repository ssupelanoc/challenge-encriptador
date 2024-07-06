function encryptText() {
    // Get input text from the DOM
    let text = document.getElementById("texto").value;
  
    // Get DOM elements for displaying messages
    let messageTitle = document.getElementById("titulo-mensaje");
    let messageParagraph = document.getElementById("parrafo");
    let dollImage = document.getElementById("muñeco");
  
    
    let encryptedText = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    
    if (text.length !== 0) {
      
      document.getElementById("texto").value = encryptedText;
  
      // Update the message elements
      messageTitle.textContent = "Texto encriptado con éxito";
      messageParagraph.textContent = "";
      dollImage.src = "./img/img1.jpg";
    } else {
      // Update the doll image, message title, and paragraph
      dollImage.src = "./img/challenge.png";
      messageTitle.textContent = "Ningún mensaje fue encontrado";
      messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  
      // Show a warning message using a popup
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  /**
   * Decrypts the given text using a specific set of rules.
   *
   * @return {undefined} This function does not return a value.
   */
  function decryptText() {
    let text = document.getElementById("texto").value;
    let titleMessage = document.getElementById("titulo-mensaje");
    let paragraph = document.getElementById("parrafo");
    let doll = document.getElementById("muñeco");
  
    let decryptedText = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (text.length !== 0) {
      document.getElementById("texto").value = decryptedText;
      titleMessage.textContent = "Texto desencriptado con éxito";
      paragraph.textContent = "";
      doll.src = "./img/img2.png";
    } else {
      doll.src = "./img/challenge.png";
      titleMessage.textContent = "No message found";
      paragraph.textContent = "Enter the text you want to encrypt or decrypt";
      swal("Ooops!", "You must enter some text", "warning");
    }
  }