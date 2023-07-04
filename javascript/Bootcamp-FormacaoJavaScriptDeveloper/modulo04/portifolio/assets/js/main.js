function updateProfileIndo(profileData){
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phone
  phone.href = `https://api.whatsapp.com/send?phone=${profileData.phone}`

  const mail = document.getElementById('profile.mail')
  mail.innerText = profileData.mail
  mail.href = `mailto:${profileData.mail}`
}

function updateSoftSkills(profileData){
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
  const hardSkills = document.getElementById('profile.skills.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updatePortfolio(profileData){
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => {
    return`
    <li class="projeto" >
    <span class="title">
    <span class="${project.github ? 'github' : ''}"></span>
      ${project.name}
    </span>
    <a href="${project.url}" target="_blank" class="linkProjeto">
    ${project.url}
    </a>
  </li>
    `
  }).join('')
}

function updateProfessionalExperience(profileData){
  const professionalExperience = document.getElementById('profile.professionalExperience')
  professionalExperience.innerHTML = profileData.professionalExperience.map(experience =>{
    return`
    <li>
    <h3>${experience.name}</h3>
    <span class="tempoExperiencia"><span class="date"></span>${experience.period}</span>
    <p class="descricaoExperiencia">${experience.description}</p>
    </li>
    `
  })
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileIndo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updatePortfolio(profileData)
  updateProfessionalExperience(profileData)
})()