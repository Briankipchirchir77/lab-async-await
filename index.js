// Write your code here!
// Function to display posts
function displayPosts(posts) {
  const ul = document.getElementById("post-list")

  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    // Add content
    h1.textContent = post.title
    p.textContent = post.body

    // Append elements
    li.appendChild(h1)
    li.appendChild(p)
    ul.appendChild(li)
  })
}

// Async function used to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json()

    // Calling display function
    displayPosts(posts)

  } catch (error) {
    console.error("Error fetching posts:", error)
  }
}

// Running the function
fetchPosts()

