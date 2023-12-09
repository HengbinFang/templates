

// Function to make the API request
function fetchReels(reelsId) {
  // Replace 'your-api-endpoint' with the actual URL of the API
  const apiUrl = "/api/get_embed?id=" + reelsId;

  // Making the Fetch request
  return fetch(apiUrl)
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response as JSON
      return response.json();
    })
    .catch(error => {
      // Handle errors here
      console.error('Error:', error);
      throw error; // Optional: rethrow the error to propagate it further
    });
}





async function ChangeIt() {
    const reelsContainer = document.getElementById('reels-box');
    // Example of using the fetchData function
    fetchReels("CxDkrOermzN").then(data => {
      reelsContainer.srcdoc  = data.html
      
      const scripts = reelsContainer.getElementsByTagName('script');
      console.log(scripts)
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.innerHTML = script.innerHTML;
        script.parentNode.replaceChild(newScript, script);
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


