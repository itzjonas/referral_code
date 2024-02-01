export const copyTextToClipboard = (text: string) => {
  // Create a new text area element
  const textArea = document.createElement('textarea');

  // Set the value of the text area to the text you want to copy
  textArea.value = text;

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  // Copy the selected text
  try {
    document.execCommand('copy');
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text', err);
  }

  // Remove the text area from the document
  document.body.removeChild(textArea);
};
