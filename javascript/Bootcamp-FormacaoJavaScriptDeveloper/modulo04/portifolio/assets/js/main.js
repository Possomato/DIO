


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
  phone.href = `https://api.whatsapp.com/send?phone=${profileData.phoneZap}`

  const mail = document.getElementById('profile.mail')
  mail.innerText = profileData.mail
  mail.href = `mailto:${profileData.mail}`

  
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileIndo(profileData)
})()