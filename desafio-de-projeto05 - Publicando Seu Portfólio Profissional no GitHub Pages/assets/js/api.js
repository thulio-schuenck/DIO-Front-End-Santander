
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/thulio-schuenck/DIO-Front-End-Santander/refs/heads/main/desafio-de-projeto05%20-%20Publicando%20Seu%20Portf%C3%B3lio%20Profissional%20no%20GitHub%20Pages/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
