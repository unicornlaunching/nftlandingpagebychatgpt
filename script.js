body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 50px;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image {
  position: relative;
  margin: 20px;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.5s ease;
}

.image:hover img {
  transform: scale(1.1);
}

.image:hover .overlay {
  transform: translateY(0);
}

.overlay h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.overlay p {
  font-size: 1.2rem;
  margin: 0 20px;
}
