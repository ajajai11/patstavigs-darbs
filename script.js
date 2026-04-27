body {
    margin: 0;
    font-family: Arial, sans-serif;
}

/* HERO sekcija (lielais fons) */
.hero {
    height: 100vh;
    background: url("https://source.unsplash.com/1600x900/?cake") no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* tumšs pārklājums */
.overlay {
    background: rgba(0,0,0,0.5);
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    color: white;
}

.overlay h1 {
    font-family: 'Playfair Display', serif;
    font-size: 60px;
    margin: 0;
}

.overlay p {
    font-size: 20px;
    margin-top: 10px;
}

/* kūku sadaļa */
.cakes {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 50px;
    background: #fff0f5;
    flex-wrap: wrap;
}

/* kartītes */
.cake-card {
    width: 220px;
    text-decoration: none;
    color: black;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: 0.3s;
}

.cake-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.cake-card span {
    display: block;
    padding: 15px;
    font-weight: bold;
    text-align: center;
}

.cake-card:hover {
    transform: scale(1.07);
}
