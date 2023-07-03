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

function updatePortifolio(profileData){
  const portifolio = document.getElementById('profile.portifolio')
  portifolio.innerHTML = profileData.portifolio.map(project => {
    return`
    <li class="projeto" >
    <span class="title">
      <span class="${project.github ? 'class=github' : ''}"></span>
      ${project.name}
    </span>
    <a href="${portifolio.url}" target="_blank" class="linkProjeto">
    ${portifolio.url}
    </a>
  </li>
    `
  }).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileIndo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updatePortifolio(profileData)
})()